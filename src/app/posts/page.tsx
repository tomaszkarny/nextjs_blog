'use client'

import React, { useEffect, useState, useMemo, useRef } from 'react'
import { client } from '@/lib/contentful/client'
import { EntryCollection, EntrySkeletonType } from 'contentful'
import PostCard from '@/src/app/components/PostCard'
import Pagination from '@/src/app/components/ui/Pagination'
import Skeleton from '@/src/app/components/ui/Skeleton'
import { PostProps } from '@/types/contentfulTypes'
import { useSearch } from '@/contexts/SearchContext'

const Posts = () => {
  const { searchTerm, postsRef } = useSearch()
  const [loading, setLoading] = useState(true)
  const [response, setResponse] =
    useState<EntryCollection<EntrySkeletonType> | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const limit = 10 // Items per page

  const headerContent = searchTerm
    ? `Search results for: "${searchTerm}"`
    : 'Latest Blog Posts'

  useEffect(() => {
    const fetchPosts = async (page: number, limit: number) => {
      setLoading(true)
      try {
        const response = await client.getEntries({
          content_type: 'post',
          'fields.title[match]': searchTerm,
          skip: (page - 1) * limit,
          limit: limit
        })
        console.log('Surowe dane z Contentful:', response)
        setResponse(response)

        const totalItems = response.total || 0
        setTotalPages(Math.ceil(totalItems / limit))
      } catch (error) {
        console.error('Error fetching posts:', error)
        // setPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts(currentPage, limit)
  }, [searchTerm, currentPage, limit])

  const assetsMap =
    response?.includes?.Asset?.reduce((acc: any, asset: any) => {
      acc[asset.sys.id] = asset.fields
      return acc
    }, {}) || {}

  const entriesMap =
    response?.includes?.Entry?.reduce((acc: any, entry: any) => {
      acc[entry.sys.id] = entry.fields
      return acc
    }, {}) || {}

  const formattedPosts: PostProps[] = useMemo(() => {
    if (!response || !response.items) {
      return []
    }

    const assetsMap =
      response.includes?.Asset?.reduce((acc, asset) => {
        acc[asset.sys.id] = asset.fields
        return acc
      }, {}) || {}

    const entriesMap =
      response.includes?.Entry?.reduce((acc, entry) => {
        acc[entry.sys.id] = entry.fields
        return acc
      }, {}) || {}

    return response.items.map((item: any): PostProps => {
      const authorEntry = entriesMap[item.fields.author.sys.id]
      const author = {
        ...authorEntry,
        picture: {
          ...authorEntry.picture,
          url: assetsMap[authorEntry.picture.sys.id]?.file?.url
        }
      }

      let coverImage = undefined
      if (item.fields.coverImage) {
        const coverImageData = item.fields.coverImage.fields
        coverImage = {
          title: coverImageData.title,
          description: coverImageData.description,
          ...coverImageData.file,
          url: assetsMap[item.fields.coverImage.sys.id]?.file?.url
        }
      }

      return {
        title: item.fields.title,
        slug: item.fields.slug,
        date: item.fields.date,
        content: item.fields.content,
        author: author,
        coverImage: coverImage
      }
    })
  }, [response])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <section className='section bg-background w-full mx-auto' ref={postsRef}>
      <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-2 leading-tight pb-10'>
        {headerContent}
      </h1>
      <div className='container text-red'>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-y-0 sm:gap-x-10'>
              {formattedPosts.map(post => (
                <li key={post.slug} className='mb-4 sm:mb-0'>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </section>
  )
}

export default Posts

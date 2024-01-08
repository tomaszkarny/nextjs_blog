'use client'

import { client } from '@/lib/contentful/client'
import { EntryCollection, EntrySkeletonType } from 'contentful'
import PostCard from '@/src/app/components/PostCard'
import Skeleton from '@/src/app/components/ui/Skeleton'
import { useEffect, useState, useMemo } from 'react'
import { PostProps } from '@/types/contentfulTypes'

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(true)

  const [response, setResponse] =
    useState<EntryCollection<EntrySkeletonType> | null>(null)

  const fetchPosts = async () => {
    try {
      const response = await client.getEntries({ content_type: 'post' })
      console.log('Surowe dane z Contentful:', response)
      setResponse(response)
    } catch (error) {
      console.error('Error fetching posts:', error)
      setPosts([])
      setLoading(false)
    }
  }

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
    if (!response) {
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

  useEffect(() => {
    if (response) {
      setPosts(formattedPosts)
      setLoading(false)
    }
  }, [response, formattedPosts])

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <section className='section bg-background w-full mx-auto'>
      <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-2 leading-tight pb-10'>
        Latest Blog Posts
      </h1>
      <div className='container text-red'>
        {loading ? (
          <Skeleton />
        ) : (
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-y-0 sm:gap-x-10'>
            {posts.map(post => (
              <li key={post.slug} className='mb-4 sm:mb-0'>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Posts

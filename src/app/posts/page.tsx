'use client'

import { client } from '@/lib/contentful/client'
import PostCard from '@/src/app/components/PostCard'
import Skeleton from '@/src/app/components/ui/Skeleton'
import { useEffect, useState } from 'react'
import { PostProps } from '@/types/contentfulTypes'

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({ content_type: 'post' })
        console.log('Surowe dane z Contentful:', response)

        const assetsMap =
          response.includes?.Asset?.reduce((acc: any, asset: any) => {
            acc[asset.sys.id] = asset.fields
            return acc
          }, {}) || {}

        const entriesMap =
          response.includes?.Entry?.reduce((acc: any, entry: any) => {
            acc[entry.sys.id] = entry.fields
            return acc
          }, {}) || {}

        const formattedPosts: PostProps[] = response.items.map(
          (item: any): PostProps => {
            const author = entriesMap[item.fields.author.sys.id]
            author.picture = {
              ...author.picture,
              url: assetsMap[author.picture.sys.id]?.file?.url
            }

            let coverImage = undefined
            if (item.fields.coverImage) {
              coverImage = {
                title: item.fields.coverImage.fields.title,
                description: item.fields.coverImage.fields.description,
                ...item.fields.coverImage.fields.file,
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
          }
        )

        setPosts(formattedPosts)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setPosts([])
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <section className='section bg-background w-full mx-auto'>
      <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-2 leading-tight'>
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

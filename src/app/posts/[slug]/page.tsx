'use client'

import { client, previewClient } from '@lib/contentful/client'
import { useRouter, useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { PostProps } from '@/types/contentfulTypes'
import PostBody from '@/src/app/components/PostBody'
import PostHeader from '@/src/app/components/PostHeader'
import PreviewAlert from '@/src/app/components/ui/PreviewAlert'
import Skeleton from '@/src/app/components/ui/Skeleton'

const Post = () => {
  const router = useRouter()
  const { slug } = useParams()
  const [post, setPost] = useState<PostProps | null>(null)
  const [preview, setPreview] = useState(false)

  // useEffect(() => {
  //   const draftCookie = document.cookie
  //     .split('; ')
  //     .find(row => row.startsWith('draftMode='))
  //   if (draftCookie) {
  //     setPreview(true)
  //   }
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        const currentClient = preview ? previewClient : client
        const response = await currentClient.getEntries({
          content_type: 'post',
          'fields.slug': slug as string
        })

        if (response?.items?.length) {
          const rawPostData: any = response.items[0]
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

          const coverImageData = rawPostData.fields.coverImage.fields

          const post: PostProps = {
            title: rawPostData.fields.title,
            slug: rawPostData.fields.slug,
            date: rawPostData.fields.date,
            content: rawPostData.fields.content,
            author: {
              name: entriesMap[rawPostData.fields.author.sys.id].name,
              picture: {
                ...entriesMap[rawPostData.fields.author.sys.id].picture.fields,
                url: assetsMap[
                  entriesMap[rawPostData.fields.author.sys.id].picture.sys.id
                ]?.file?.url
              }
            },
            coverImage: {
              title: coverImageData.title,
              description: coverImageData.description,
              url: coverImageData.file.url,
              details: coverImageData.file.details,
              fileName: coverImageData.file.fileName,
              contentType: coverImageData.file.contentType,
              file: {
                url: coverImageData.file.url,
                details: coverImageData.file.details,
                fileName: coverImageData.file.fileName,
                contentType: coverImageData.file.contentType
              }
            }
          }

          setPost(post)
        } else {
          router.push('/posts')
        }
      }
    }

    fetchData()
  }, [slug, router, preview])

  return (
    <section className='section'>
      {preview && <PreviewAlert />}
      <div className='container'>
        <article className='prose mx-auto'>
          {!post ? (
            <Skeleton />
          ) : (
            <>
              <PostHeader post={post} />
              <PostBody post={post} />
            </>
          )}
        </article>
      </div>
    </section>
  )
}

export default Post

'use client'
import React from 'react'
import Avatar from '@/src/app/components/ui/Avatar'
import ContentfulImage from '@/src/app/components/ui/ContentfulImage'
import DateComponent from '@/src/app/components/ui/DateComponent'
import { PostProps, DirectImageDetails } from '@/types/contentfulTypes'

interface PostHeaderProps {
  post: PostProps
}

const PostHeader = ({ post }: PostHeaderProps) => {
  const { title, coverImage, author, date } = post

  return (
    <>
      <h2>{title}</h2>
      <div className='hidden md:flex md:justify-between md:items-center md:mb-10'>
        <Avatar name={author.name} picture={author.picture} />

        <DateComponent dateString={date} className='text-sm text-gray-400' />
      </div>
      {coverImage &&
        coverImage.fileName &&
        coverImage.details &&
        coverImage.details.image && (
          <div className='mb-8 md:mb-16 sm:mx-0'>
            <ContentfulImage
              alt={`Cover Image for ${title}`}
              src={coverImage.url}
              width={coverImage.details.image.width}
              height={coverImage.details.image.height}
            />
          </div>
        )}
      <div className='flex justify-between items-center md:hidden mb-6'>
        <Avatar name={author.name} picture={author.picture} />
        <DateComponent dateString={date} className='text-sm text-gray-400' />
      </div>
    </>
  )
}

export default PostHeader

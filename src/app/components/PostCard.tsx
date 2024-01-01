import React from 'react'
import Link from 'next/link'
import Avatar from '@/src/app/components/ui/Avatar'
import DateComponent from '@/src/app/components/ui/DateComponent'
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
import { PostProps } from '@/types/contentfulTypes'

interface PostCardProps {
  post: PostProps
}

const PostCard = ({ post }: PostCardProps) => {
  const { title, slug, excerpt, coverImage, author, date } = post

  return (
    <Card className='h-full py-4 rounded-xl bg-darkGreen shadow-lg transition duration-200 ease-in-out transform hover:shadow-2xl hover:scale-105'>
      <Link href={`/posts/${slug}`} aria-label={title}>
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
          <h3 className='text-3xl  leading-tight tracking-wide'>{title}</h3>
          <div className='flex items-center mt-2 text-neutral font-light '>
            <Avatar name={author.name} picture={author.picture} />

            <DateComponent
              dateString={date}
              className='text-xs text-gray-400 ml-2'
            />
          </div>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          {coverImage?.url && (
            <Image
              isBlurred
              alt={`Cover Image for ${title}`}
              className='object-cover rounded-xl'
              src={
                coverImage.url.startsWith('//')
                  ? `https:${coverImage.url}`
                  : coverImage.url
              }
              width='100%'
              height='auto'
            />
          )}
          {/* <p className='text-base p-4'>{excerpt}</p> */}
        </CardBody>
      </Link>
    </Card>
  )
}

export default PostCard

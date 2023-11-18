import Link from 'next/link'
import Avatar from '@/src/app/components/ui/Avatar'
import DateComponent from '@/src/app/components/ui/DateComponent'
import ContentfulImage from '@/src/app/components/ui/ContentfulImage'
import { PostProps, DirectImageDetails } from '@/types/contentfulTypes'

interface PostCardProps {
  post: PostProps
}

const PostCard = ({ post }: PostCardProps) => {
  const { title, slug, excerpt, coverImage, author, date } = post

  return (
    <li className='rounded-md overflow-hidden shadow-md'>
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div className='mb-2'>
          {coverImage?.url && (
            <ContentfulImage
              name={`Cover Image for ${title}`}
              alt={`Cover Image for ${title}`}
              src={
                coverImage.url.startsWith('//')
                  ? `https:${coverImage.url}`
                  : coverImage.url
              }
              width={coverImage.details?.image?.width}
              height={coverImage.details?.image?.height}
            />
          )}
        </div>
        <div className='p-4'>
          <h3 className='text-xl mb-1 leading-snug'>{title}</h3>
          <div className='text-sm mb-4 text-gray-400'>
            <DateComponent dateString={date} />
          </div>
          <p className='text-base mb-4'>{excerpt}</p>

          <Avatar name={post.author.name} picture={post.author.picture} />
        </div>
      </Link>
    </li>
  )
}

export default PostCard

import RichText from '@/src/app/components/ui/RichText'
import { PostProps } from '@/types/contentfulTypes'

type PostBodyProps = {
  post: PostProps
}

const PostBody = ({ post }: PostBodyProps) => {
  const { content } = post

  return (
    <div className='mx-auto prose'>
      <RichText content={content} />
    </div>
  )
}

export default PostBody

import ContentfulImage from '@/src/app/components/ui/ContentfulImage'
import { DirectImageDetails } from '@/types/contentfulTypes'

type AvatarProps = {
  name: string
  picture: DirectImageDetails
}

const Avatar = ({ name, picture }: AvatarProps): JSX.Element | null => {
  if (!picture?.url) {
    return null
  }

  return (
    <div className='flex items-center'>
      <div className='relative w-10 h-10 mr-4'>
        <ContentfulImage
          src={
            picture.url.startsWith('//') ? `https:${picture.url}` : picture.url
          }
          alt={name}
          className='rounded-full m-0'
          name={name}
        />
      </div>
      <div className='font-semibold'>{name}</div>
    </div>
  )
}

export default Avatar

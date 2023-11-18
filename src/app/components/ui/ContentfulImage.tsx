import Image, { ImageProps } from 'next/image'

type ContentfulImageProps = Omit<ImageProps, 'loader'> & {
  quality?: number
  name?: string
  alt: string
  defaultWidth?: number
  defaultHeight?: number
}

const contentfulLoader = ({
  src,
  width,
  quality
}: {
  src: string
  width: number
  quality?: number
}) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage = (props: ContentfulImageProps) => {
  const imageUrl =
    typeof props.src === 'string' && props.src.startsWith('//')
      ? `https:${props.src}`
      : props.src

  const { defaultWidth = 400, defaultHeight = 300, ...restProps } = props
  const width = props.width || defaultWidth
  const height = props.height || defaultHeight

  return (
    <Image
      {...restProps}
      width={width}
      height={height}
      src={imageUrl}
      alt={props.name || props.alt}
      loader={contentfulLoader}
    />
  )
}

export default ContentfulImage

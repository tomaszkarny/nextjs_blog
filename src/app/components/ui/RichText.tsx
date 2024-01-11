'use client'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import ContentfulImage from '@/src/app/components/ui/ContentfulImage'

const options = {
  renderMark: {
    [MARKS.CODE]: (text: React.ReactNode) => (
      <pre>
        <code>{text}</code>
      </pre>
    )
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
      if (
        node.content.find((item: any) =>
          item.marks?.find((mark: any) => mark.type === MARKS.CODE)
        )
      ) {
        return (
          <div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>
        )
      }
      return <p>{children}</p>
    },

    [INLINES.ENTRY_HYPERLINK]: (node: any) => {
      if (node.data.target.sys.contentType.sys.id === 'post') {
        return (
          <Link href={`/posts/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </Link>
        )
      }
    },

    [INLINES.HYPERLINK]: (node: any) => {
      const text = node.content.find(
        (item: any) => item.nodeType === 'text'
      )?.value
      return (
        <Link href={node.data.uri} target='_blank' rel='noopener noreferrer'>
          {text}
        </Link>
      )
    },

    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            height='400'
            width='100%'
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        )
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return (
        <ContentfulImage
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.title}
          width={node.data.target.fields.file.details.image.width}
          height={node.data.target.fields.file.details.image.height}
          name={node.data.target.fields.title}
          className='h-20 w-20'
        />
      )
    }
  }
}

const RichText = ({ content }: any) => {
  return <>{documentToReactComponents(content, options)}</>
}

export default RichText

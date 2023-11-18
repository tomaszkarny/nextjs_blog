import { draftMode } from 'next/headers'
import { previewClient } from '@lib/contentful/client'

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // Check the secret and slug parameters
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return new Response('Invalid token', { status: 401 })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const response = await previewClient.getEntries({
    content_type: 'post',
    'fields.slug': slug as string
  })
  const post = response?.items?.[0]

  // If the slug doesn't exist prevent draft mode from being enabled
  if (!post) {
    return new Response('Invalid slug', { status: 401 })
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable()

  // Manual redirection with setting headers
  return new Response(null, {
    status: 307,
    headers: {
      Location: `/posts/${post.fields.slug}`
    }
  })
}

// import { draftMode } from 'next/headers'
// import { redirect } from 'next/navigation'
// import { previewClient } from '@lib/contentful/client'

// export async function GET(request: Request) {
//   // Parse query string parameters
//   const { searchParams } = new URL(request.url)
//   const secret = searchParams.get('secret')
//   const slug = searchParams.get('slug')

//   // Check the secret and slug parameters
//   if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
//     return new Response('Invalid token', { status: 401 })
//   }

//   // Fetch the headless CMS to check if the provided `slug` exists
//   const response = await previewClient.getEntries({
//     content_type: 'post',
//     'fields.slug': slug as string
//   })
//   const post = response?.items?.[0]

//   // If the slug doesn't exist prevent draft mode from being enabled
//   if (!post) {
//     return new Response('Invalid slug', { status: 401 })
//   }

//   // Enable Draft Mode by setting the cookie
//   draftMode().enable()

//   // Redirect to the path from the fetched post
//   redirect(`/posts/${post.fields.slug}`)
// }

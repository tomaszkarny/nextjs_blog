import Hero from '@/src/app/components/layout/Hero/Hero'
import Posts from '@/src/app/posts/page'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-12'>
      <Hero />
      <Posts />
    </main>
  )
}

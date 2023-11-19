import Image from 'next/image'
import PostsList from "@/components/Posts";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center min-w-fit">
        <div className={"md:w-3/4 lg:w-1/2 sm:w-4/5 w-11/12 2xl:w-1/3"}>
          <PostsList posts={[]}></PostsList>
        </div>
        <div className="bg-red-600 w-48 h-48 lg:w-1/2 md:w-32 sm:w-20">2</div>
        <div className='w-1/2'>
        </div>
    </main>
  )
}

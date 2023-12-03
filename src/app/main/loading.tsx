import PostLoader from "@/components/loaders/PostLoaders";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center min-w-fit mt-3">
      <div className="md:w-3/4 lg:w-1/2 sm:w-4/5 w-11/12 2xl:w-1/3 grid grid-cols-1 gap-4  min-h-screen">
        <PostLoader></PostLoader>
        <PostLoader></PostLoader>
        <PostLoader></PostLoader>
        <PostLoader></PostLoader> 
      </div>
    </div>
  )
}



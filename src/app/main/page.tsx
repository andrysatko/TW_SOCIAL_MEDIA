import { getClient } from "../../Apollo/registerApolloClient";
import { gql } from "@apollo/client";
import PostsList from '../../components/PostList'
import { GetPost_Filter, Variables_GetPost_Filter, Return_GetPost_Filter, TFilterByEnum } from "../../GQL/gql";
import DragAndDrop from "@/components/dragdrop/DragSDrop";
import AddPostSecation from "@/components/CreatePost.tsx/CreatePost";
export const revalidate = 20

export default async function Page() {
  const { data, error, loading } = await getClient().query<Return_GetPost_Filter, Variables_GetPost_Filter>(
    { query: GetPost_Filter, variables: { filterBy: TFilterByEnum.oldest } }
    );
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center min-w-fit bg-white mt-3">
        <div className={"md:w-3/4 lg:w-1/2 sm:w-4/5 w-11/12 2xl:w-1/3"}>
        <AddPostSecation></AddPostSecation> 
          <PostsList posts={data.GetPost_Filter.posts}></PostsList>
        </div>
      </div>
    </main>
  )
}




import { getClient } from "../../Apollo/registerApolloClient";
import { gql } from "@apollo/client";
import PostsList from '../../components/PostList'
import { GetPost_Filter, Variables_GetPost_Filter, Return_GetPost_Filter, TFilterByEnum } from "../../GQL/gql";
export const revalidate = 20

export default async function Page() {
  const { data, error, loading } = await getClient().query<Return_GetPost_Filter, Variables_GetPost_Filter>(
    { query: GetPost_Filter, variables: { filterBy: TFilterByEnum.resent } }
    );
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center min-w-fit bg-white mt-3">
        <div className={"md:w-3/4 lg:w-1/2 sm:w-4/5 w-11/12 2xl:w-1/3"}>
          <PostsList posts={data.GetPost_Filter.posts}></PostsList>
        </div>
        <div className="bg-red-600 w-48 h-48 lg:w-1/2 md:w-32 sm:w-20">2</div>
        <div className='w-1/2'>
        </div>
      </div>
    </main>
  )
}




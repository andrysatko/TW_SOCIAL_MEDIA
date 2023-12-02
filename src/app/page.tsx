import { getClient } from "../Apollo/registerApolloClient";
import { gql } from "@apollo/client";
import PostsList from '../components/PostList'
const query = gql`
query LatestPost {
  GetPostFo__User(userId:"655208af133bbaa7687252ec") {
    posts {
      id
      image
      title
      content
      Image
      createdAt
      author{
        id
        firstName
        Avatar
        lastName
      }
      comments {
        id
        postId
        userId
        text
        createdAt
        updatedAt
      }
      Likes
      Dislikes
    }
    Post_count
  }
}
`;
export const revalidate = 20


export default async function Home() {
  const { data, error, loading } = await getClient().query({ query });
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center min-w-fit">
        <div className={"md:w-3/4 lg:w-1/2 sm:w-4/5 w-11/12 2xl:w-1/3"}>
          <PostsList posts={data.GetPostFo__User.posts}></PostsList>
        </div>
        <div className="bg-red-600 w-48 h-48 lg:w-1/2 md:w-32 sm:w-20">2</div>
        <div className='w-1/2'>
        </div>
      </div>
    </main>
  )
}




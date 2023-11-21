import { getClient } from "../registerApolloClient";

import { gql } from "@apollo/client";

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
import Posts from '../components/page';

export default async function Home() {
  console.log('BEFORE!!!!!!')
  const { data, error } = await getClient().query({ query });
  console.log(data.GetPostFo__User.posts,error);
  return (
    <main>
     <Posts posts={data.GetPostFo__User.posts}></Posts>
    </main>
  )
}

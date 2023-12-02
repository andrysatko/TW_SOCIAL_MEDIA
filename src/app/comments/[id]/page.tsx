'use client'
import { useRouter } from 'next/navigation'
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import { gql } from "@apollo/client";


const query_CommentForpost = gql`query GetCOmmentsForPOst($postId:String!,$cursor:String){
  GetComments_ForPost(postId:$postId,cursor:$cursor){
    comments{id
    text
    Reply{
    text
    }
    User{
      id
      firstName
      lastName
      Avatar
    }
    createdAt
  }
  TotalCommentsCount
}
}`
type Props = {
  params: {
    id: string;
  };
};

const query_PostById = gql`query PostById($PostId: String!){
  GetPostById(_id:$PostId){
    id
    Likes
    Likes
    Dislikes
  }
}`

export default function Comments({ params: { id } }: Props) {
  const DisplayLoad = ()=> Array.from({ length: 6 }).map((_, index) => (<CommentLoader key={index} />))
  const [comments, setPosts] = useState<PostComment[]>([])
  const [isRefetching,setRefetching] = useState<boolean>(false)
  const { data, loading,error, refetch} = useQuery<{ GetComments_ForPost: { comments: PostComment[], TotalCommentsCount: number } }>(query_CommentForpost, { variables: { postId: id } });
  const totalCount = data?.GetComments_ForPost.TotalCommentsCount
  useEffect(() => { if (data) setPosts([...comments, ...data.GetComments_ForPost.comments]) }, [data])
  const Refetch = async () => {
    setRefetching(true);
    await refetch({ cursor: comments.at(-1)?.id });
    setRefetching(false);
  }
  if (data) console.log(data.GetComments_ForPost)
  if (error) return <p>Error: {error.message}</p>;
  if (error) { console.log(error) }
  return (
    <div className='w-full flex flex-col justify-center  items-center'>
      {data && (comments.map(comment => <Comment CommentProps={comment} key={comment.id}></Comment>))}
      {comments.length < totalCount! && <button onClick={Refetch}>load more</button>}
      {(loading ||isRefetching ) && DisplayLoad()}
    </div>);
}


// import { ReleasedTime } from "@/utils/ConvertDate"
import Link from "next/link"
import { ReleasedTime } from '@/utils/ConvertDate';
import { useEffect, useMemo, useState } from 'react';
import CommentLoader from '@/components/loaders/CommentLoader';

// export function DirectPost({ Comments }: DirectPostProps) {
//   return (
//     <div className="grid grid-cols-1 gap-4  min-h-screen pt-5">
//       <div className="">
//         <button>best</button>
//       </div>
//       <div>add comment</div>
//       <div className="flex flex-col">
//         {Comments.map((comment) => <Comment {...comment}></Comment>)}
//       </div>
//     </div>
//   )
// }

export function Comment({ CommentProps }: { CommentProps: PostComment }) {
  const Time: any = useMemo(() => ReleasedTime(CommentProps.createdAt), [CommentProps.createdAt])
  return (
    <div className="mt-3 h-auto  flex flex-col w-4/5 border-t-2 border-b-2  border-gray-300">
      <div className="mr-1 flex flex-row items-center">
        <Link className='box-content' href={`user/${CommentProps.User.id}`}>
          <img className='w-14 h-14 m-1  rounded-full' src={"http://localhost:3000/static/" + CommentProps.User?.Avatar[CommentProps.User?.Avatar.length - 1]} alt={CommentProps.User.firstName} />
        </Link>
        <h4 className='pl-4 font-semibold'>{CommentProps.User.firstName} {CommentProps.User.lastName}</h4>
        <h5 className='pl-2 text-xs pt-1'>•{Time}</h5>
      </div>
      <div className='self-center w-5/6'>
        <h5 className='text-lg'>{CommentProps.text}</h5>
      </div>
    </div>
  )
}
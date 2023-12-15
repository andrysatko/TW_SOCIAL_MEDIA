import Post from "./Post/Post";
import Link from "next/link";
export default function PostsList({ posts }: RealProps) {
    console.log(posts);
    return (
        <div className={"grid grid-cols-1 gap-4  min-h-screen"}>
            {posts.map((post) => post.Video==null ? <Link href={"post/id"}><Post post={post} key={post.id}></Post></Link> :<Post post={post} key={post.id}></Post> )}
        </div>
    )
}

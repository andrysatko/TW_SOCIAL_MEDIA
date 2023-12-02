import Post from "./Post/Post";

export default function PostsList({ posts }: RealProps) {
    console.log(posts);
    return (
        <div className={"grid grid-cols-1 gap-4  min-h-screen"}>
            {posts.map((post) => <Post post={post} key={post.id}></Post>)}
        </div>
    )
}

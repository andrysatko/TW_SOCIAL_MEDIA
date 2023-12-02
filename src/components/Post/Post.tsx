import Link from "next/link";
import Image from "next/image";
import Custom_Carousel from "../Carousel";
import { ReleasedTime } from "@/utils/ConvertDate";
import Comments from '../../../public/comments.svg'
import ReactionSection from "../buttons/ReactionSection";
type Props = {
    post: Post
}
export default function Post({post}:Props){
    return (
        <div>
        <Link href={"post/id"}>
            <div key={post.id} style={{ height: "500px" }} className={" bg-white rounded-lg border-solid border-2 border-black row-span-2 flex flex-col items-center p-3"}>
                <div className="w-full bg-red-600 h-auto flex flex-col">
                    <div className="flex flex-row  items-center">
                        <div className="p flex flex-row">
                            <Link className='box-content' href={`user/${post.author.id}`}>
                                <img className='w-10 h-10 rounded-full' src={"http://localhost:3000/static/" + post.author?.Avatar[post.author?.Avatar.length - 1]} alt="" />
                            </Link>
                            <h4 className='pl-3 font-semibold'>{post.author.firstName} {post.author.lastName}</h4>
                            <h5 className='pl-2 text-xs pt-1'>•{ReleasedTime(post.createdAt)}</h5>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-sans font-semibold'>{post.title}</h1>
                    </div>
                </div>
                <div className={`h-5/6 w-5/6 bg-black rounded-lg relative`}>
                    <Custom_Carousel Image={post.Image}></Custom_Carousel>
                </div>
                <div className="w-5/6 bg-red-600 flex flex-row mt-1">
                    <ReactionSection postId={post.id} initialCount={post.Likes - post.Dislikes}></ReactionSection>
                    <Link href={`comments/${post.id}`}>
                    <button className='ml-7  rounded-xl h-7 w-16 flex flex-row  items-center bg-gray-100 hover:bg-gray-200'>
                        <Image className='rounded-full' src={Comments} alt="comments" width={23} height={23}></Image>
                        {post.comments.length}
                    </button>
                    </Link>
                </div>
            </div>
        </Link>
    </div>
    )
}
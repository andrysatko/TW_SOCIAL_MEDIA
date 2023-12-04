import Link from "next/link";
import Image from "next/image";
import Custom_Carousel from "../Carousel";
import { ReleasedTime } from "@/utils/ConvertDate";
import Comments from '../../../public/comments.svg'
import ReactionSection from "../buttons/ReactionSection";
type Props = {
    post: Post
}
export default function FullPost({ post }: Props) {
    return (
        <div>
            <div key={post.id} className={"bg-white shadow-lg rounded-lg border-separate border-t border-b row-span-2 flex flex-col items-center p-3 h-auto"}>
                <div className="w-full  h-auto flex flex-col rounded-md border">
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
                <div style={{ height: "500px" }} className={`min-h-[400px] h-auto w-full object-contain overflow-hidden  bg-black rounded-lg relative`}>
                    <Custom_Carousel Image={post.Image}></Custom_Carousel>
                </div>
                <div className="h-auto w-full bg-red-300 text-ellipsis overflow-hidden ...">
                    <p >
                        {post.content.repeat(20)}
                    </p>
                </div>
                <div className="w-full  bg-white flex flex-row mt-1 rounded-md border">
                    <ReactionSection postId={post.id} initialCount={post.Likes - post.Dislikes}></ReactionSection>
                    <button className='ml-7  rounded-xl h-7 w-16 flex flex-row  items-center  hover:bg-gray-200'>
                        <Image className='rounded-full' src={Comments} alt="comments" width={23} height={23}></Image>
                        {post._count.comments}
                    </button>
                </div>
            </div>
        </div>
    )
}
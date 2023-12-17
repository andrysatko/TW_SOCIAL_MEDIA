import Link from "next/link";
import Image from "next/image";
import Custom_Carousel from "../Carousel";
import { ReleasedTime } from "@/utils/ConvertDate";
import Comments from '../../../public/comments.svg'
import ReactionSection from "../buttons/ReactionSection";
import CommentDescription from "./PostDescription";
type Props = {
    post: Post
}
export default function Post({post}:Props){
    return (
        <div>
            <div key={post.id} className={"bg-white shadow-lg rounded-lg border-separate border-t border-b hover:bg-gray-100 border-black row-span-2 flex flex-col items-center p-3"}>
                <div className="w-full  h-auto flex flex-col rounded-md border">
                    <div className="flex flex-row  items-center">
                        <div className="p flex flex-row">
                            <Link className='box-content' href={`user/${post.author.id}`}>
                                <img className='w-10 h-10 rounded-full' src={post.author?.Avatar[post.author?.Avatar.length - 1]} alt="" />
                            </Link>
                            <h4 className='pl-3 font-semibold'>{post.author.firstName} {post.author.lastName}</h4>
                            <h5 className='pl-2 text-xs pt-1'>•{ReleasedTime(post.createdAt)}</h5>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-sans font-semibold'>{post.title}</h1>
                    </div>
                </div>
                {(post.Image.length > 0 || post.Video) && <div style={{ height: "400px" }} className={`max-h-[100vw] w-full object-contain overflow-hidden  bg-transparent rounded-lg relative`}>
                   {  post.Video !==null && 
                        <video className="w-full h-full object-contain bg-black" autoPlay  muted controls>
                            <source src={post.Video} type="video/mp4" />
                        </video>}
                    
                    {post.Image.length>0 && <Custom_Carousel Image={post.Image}></Custom_Carousel>}
                </div>}
                <CommentDescription text={post.content.repeat(5)}></CommentDescription>
                <div className="w-5/6  bg-white flex flex-row mt-1 rounded-md border">
                    <ReactionSection postId={post.id} initialCount={post.Likes - post.Dislikes}></ReactionSection>
                    <Link href={`comments/${post.id}`}>
                    <button className='ml-7  rounded-xl h-7 w-16 flex flex-row  items-center  hover:bg-gray-200'>
                        <Image className='rounded-full' src={Comments} alt="comments" width={23} height={23}></Image>
                        {post._count.comments}
                    </button>
                    </Link>
                </div>
            </div>
    </div>
    )
}
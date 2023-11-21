import Image from 'next/image'
import styles from './styles.module.css';
import Vote from '../../public/vote.svg'
import Comments from '../../public/comments.svg'
import { Carousel } from "@material-tailwind/react";
import { use } from 'react';
import Link from 'next/link';
import { ReleasedTime } from '@/utils/ConvertDate';
type User = {
    id: string;
    firstName: string;
    lastName: string;
    Avatar:string[];
}
type Props = {
    posts: User[];
}

// const Users: User[] = [
//     {id:1,name:"test",username:"test",email:"test",Avatars:["https://pbs.twimg.com/profile_images/1631721849385263110/Ucj4sLGL_400x400.jpg","https://pbs.twimg.com/profile_images/1631721849385263110/Ucj4sLGL_400x400.jpg"]},
//     {id:1,name:"test",username:"test",email:"test",Avatars:["https://pbs.twimg.com/profile_images/1631721849385263110/Ucj4sLGL_400x400.jpg"]}
// ]
type Post = {
    id:string,
    title:string,
    content:string,
    author:User,
    Image:string[]
    Likes: number,
    Dislikes: number
    comments:string[]
    createdAt:string
}
type RealProps = {
    posts: Post[]
}
export default function PostsList({posts}:RealProps){
    console.log(posts);
return (
<div className={"grid grid-cols-1 gap-4  min-h-screen"}>
    {posts.map((post) =>
        <div key={post.id} style={{height:"500px"}} className={" bg-white rounded-lg border-solid border-2 border-black row-span-2 flex flex-col items-center p-3"}>
            <div className="w-full bg-red-600 h-auto flex flex-col">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row">
                        <div className='rounded-full w-10 h-10 '>
                            <Link href={`user/${post.author.id}`}>
                        <img src={"http://localhost:3000/static/"+post.author?.Avatar[post.author?.Avatar.length - 1]} className='w-10 h-10 rounded-full' alt="" />
                            </Link>
                        </div>
                        <h4 className='pl-3 font-semibold'>{post.author.firstName} {post.author.lastName}</h4>
                        <h5 className='pl-2 text-xs pt-1'>•{ReleasedTime(post.createdAt)}</h5>
                    </div>
                    <div className="flex flex-row">
                        <button className='rounded-xl bg-blue-600 text-white h-6 w-12 text-xs font-sans font-semibold'>join</button>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-sans font-semibold'>{post.title}</h1>
                </div>
            </div>
            <div className={` ${styles.blurBg} h-5/6 w-5/6 bg-black rounded-lg relative`}>
            <Carousel className="rounded-xl">
                {post.Image.map((link) => <img key={link} className='blur-none z-0 object-contain w-full h-full absolute'     src={"http://localhost:3000/static/"+link}  alt={post.title}></img>)}
    </Carousel>
            </div>
            <div className="w-5/6 bg-red-600 flex flex-row mt-1">
                <div className='rounded-xl h-7 w-16 flex flex-row justify-between items-center bg-white '>
                    <button className='rounded-full hover:bg-gray-200'>
                        <Image src={Vote} alt="vote" width={23} height={23}></Image>
                    </button>
                    {post.Likes-post.Dislikes}
                    <button className='rounded-full hover:bg-gray-200'>
                        <Image className='rotate-180' src={Vote} alt="vote" width={23} height={23}></Image>
                    </button>
                </div>
                <button className='ml-7  rounded-xl h-7 w-16 flex flex-row  items-center bg-gray-100 hover:bg-gray-200'>
                        <Image className='rounded-full' src={Comments} alt="comments" width={23} height={23}></Image>
                        {post.comments.length}
                    </button>
            </div>
        </div>
    )}
</div>
)
}

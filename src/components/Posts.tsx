import Image from 'next/image'
import styles from './styles.module.css';
import Vote from '../../public/vote.svg'
import Comments from '../../public/comments.svg'
import { Carousel } from "@material-tailwind/react";
import { use } from 'react';
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    Avatars:string[];
}
type Props = {
    posts: User[];
}
const Users: User[] = [
    {id:1,name:"test",username:"test",email:"test",Avatars:["https://pbs.twimg.com/profile_images/1631721849385263110/Ucj4sLGL_400x400.jpg","https://pbs.twimg.com/profile_images/1631721849385263110/Ucj4sLGL_400x400.jpg"]},
    {id:1,name:"test",username:"test",email:"test",Avatars:["https://pbs.twimg.com/profile_images/1631721849385263110/Ucj4sLGL_400x400.jpg"]}
]
export default function PostsList({posts}:Props){
return (
<div className={"grid grid-cols-1 gap-4  min-h-screen"}>
    {Users.map((user) =>
        <div style={{height:"500px"}} className={" bg-white rounded-lg border-solid border-2 border-black row-span-2 flex flex-col items-center p-3"} key={user.id}>
            <div className="w-full bg-red-600 h-auto flex flex-col">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row">
                        <div className='w-10 h-10 rounded-full bg-gray-800'></div>
                        <h4 className='pl-3'>name</h4>
                        <h5 className='pl-2'>last seen</h5>
                    </div>
                    <div className="flex flex-row">
                        <button className='rounded-xl bg-blue-600 text-white h-6 w-12 text-xs font-sans font-semibold'>join</button>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-sans font-semibold'>Title</h1>
                </div>
            </div>
            <div className={` ${styles.blurBg} h-5/6 w-5/6 bg-black rounded-lg relative`}>
            <Carousel className="rounded-xl">
                {user.Avatars.map((link) => <Image className='blur-none z-0' layout='fill' objectFit='contain'   src={link}  alt={user.email}></Image>)}
    </Carousel>
            </div>
            <div className="w-5/6 bg-red-600 flex flex-row mt-1">
                <div className='rounded-xl h-7 w-16 flex flex-row justify-between items-center bg-white '>
                    <button className='rounded-full hover:bg-gray-200'>
                        <Image src={Vote} alt="vote" width={23} height={23}></Image>
                    </button>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <button className='rounded-full hover:bg-gray-200'>
                        <Image className='rotate-180' src={Vote} alt="vote" width={23} height={23}></Image>
                    </button>
                </div>
                <button className='ml-7  rounded-xl h-7 w-16 flex flex-row  items-center bg-gray-100 hover:bg-gray-200'>
                        <Image className='rounded-full' src={Comments} alt="comments" width={23} height={23}></Image>
                        123
                    </button>
            </div>
        </div>
    )}
</div>
)
}

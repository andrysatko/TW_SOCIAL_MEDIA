import Image from 'next/image'
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
    {id:1,name:"test",username:"test",email:"test",Avatars:["https://pbs.twimg.com/profile_images/1631721849385263110/Ucj4sLGL_400x400.jpg"]},
    {id:1,name:"test",username:"test",email:"test",Avatars:["https://pbs.twimg.com/profile_images/1631721849385263110/Ucj4sLGL_400x400.jpg"]}
]
export default function PostsList({posts}:Props){
return (
<div className={"grid grid-cols-1 gap-4  min-h-screen"}>
    {Users.map((user) =>
        <div style={{height:"500px"}} className={" bg-white rounded-lg border-solid border-2 border-black row-span-2 flex flex-col items-center p-3"} key={user.id}>
            <div>top</div>
            <div className={"h-5/6 w-5/6 rounded-md bg-black relative"}>
                <Image layout='fill' objectFit='contain'   src={user.Avatars[0]}  alt={user.email}></Image>
            </div>
            <div>buttom</div>
        </div>
    )}
</div>
)
}
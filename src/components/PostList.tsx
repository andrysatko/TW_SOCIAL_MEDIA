'use client'
import { useEffect, useRef, useState } from "react";
import Post from "./Post/Post";
import Link from "next/link";
import { useLazyQuery } from "@apollo/client";
import { GetPost_Filter, Variables_GetPost_Filter, Return_GetPost_Filter, TFilterByEnum } from "../GQL/gql";


export default function PostsList({ posts }: RealProps) {
    const [s_posts, setPosts] = useState<Post[]>(posts)
    const [get_morePost,{loading, error, data}] = useLazyQuery<Return_GetPost_Filter,Variables_GetPost_Filter>(GetPost_Filter,{variables:{filterBy:TFilterByEnum.resent,cursor:s_posts.at(-1)?.id}});
    const loadmore = async()=>{
        console.log(data)
        console.log(s_posts.at(-1)?.id)
        await get_morePost({variables:{filterBy:TFilterByEnum.resent,cursor:s_posts.at(-1)?.id}});
    }
    useEffect(() => {
        if(data){
            console.log("😎")
            console.log(s_posts.at(-1)?.id)
            setPosts([...s_posts, ...(data ? data.GetPost_Filter.posts :[])])
            console.log(s_posts.at(-1)?.id)
            console.log("😎")
        }   
    }, [data])
    useEffect(() => {
        const handleScroll: () => void = () => {
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            console.log('Scrolled to the end of the page!');
            loadmore();
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
            <div className={"grid grid-cols-1 gap-4  min-h-screen"}>
                {s_posts.map((posts) => posts.Video == null ? <Link href={"post/id"}><Post post={posts} key={posts.id}></Post></Link> : <Post post={posts} key={posts.id}></Post>)}
            </div>
    )
}

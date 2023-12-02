"use client"
import Image from "next/image"
import Vote from '../../../public/vote.svg'
export default function DisLikeButton(){
    return (
        <button className='rounded-full hover:bg-gray-200' onClick={e=>{e.preventDefault();e.stopPropagation();console.log('click')}}>
        <Image className='rotate-180' src={Vote} alt="vote" width={23} height={23}></Image>
        </button>
    )
}
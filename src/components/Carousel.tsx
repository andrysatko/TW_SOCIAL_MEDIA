"use client"
import { ThemeProvider } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
export default function Custom_Carousel({Image}:{Image:string[]}){
  return (
    <ThemeProvider>
<Carousel transition={{delay:0.01}} className="rounded-xl" onClick={e=> {e.stopPropagation();e.preventDefault()}}>
    {Image.map((link) => <img onClick={e=>e.stopPropagation()} key={link} className='blur-none z-0 object-contain w-full h-full absolute'     src={"http://localhost:3000/static/"+link}  alt={link}></img>)}
</Carousel>
</ThemeProvider>
  )
}

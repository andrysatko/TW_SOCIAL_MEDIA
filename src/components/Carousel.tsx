"use client"
import { ThemeProvider, Carousel, IconButton } from "@material-tailwind/react";
import { useState } from "react";
export default function Custom_Carousel({ Image }: { Image: string[] }) {
  const [active, setActive] = useState({ left: false, right: true });
  const [currentI, setCurrentI] = useState(0);
  const PerforamActive = (index_swich: number) => {
    const newIndex = currentI + index_swich;
    if (0 <= newIndex && newIndex <= Image.length - 1) {
      setCurrentI(newIndex);
      if (newIndex === 0) { 
        setActive({ left: false, right: true }); 
      }
      if (newIndex === Image.length - 1) { 
        setActive({ left: true, right: false }); 
      }
    }
    console.log(newIndex);
  }
  return (
    <ThemeProvider>
      <Carousel
        prevArrow={({ handlePrev }) => (
          active.left &&
          <IconButton
            variant="text"
            color="gray"
            size="sm"
            onClick={() => { handlePrev(); PerforamActive(-1) }}
            className="!absolute top-2/4 left-0 -translate-y-2/4 bg-white/30 hover:bg-white/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          active.right &&
          <IconButton
            variant="text"
            color="gray"
            size="sm"
            onClick={() => { handleNext(); PerforamActive(1) }}
            className="!absolute top-2/4 !right-0 -translate-y-2/4 bg-white/30 hover:bg-white/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        transition={{ delay: 0.01 }} className="rounded-xl" onClick={e => { e.stopPropagation(); e.preventDefault() }}>
        {Image.map((link) => <img onClick={e => e.stopPropagation()} key={link} className='blur-none z-0 object-contain w-full h-full absolute' src={link} alt={link}></img>)}
      </Carousel>
    </ThemeProvider>
  )
}

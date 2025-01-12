'use client'
import { useEffect, useState } from "react";

export default function NewsCard({videoLink,title,className}) {
    const [embedUrl,setEmbedUrl] = useState('')
    useEffect(()=>{

        if(videoLink){
            const videoId = videoLink.includes('v=') 
            ? videoLink.split('v=')[1].split('&')[0]  // Extract video ID from regular videoLink
            : videoLink.split('/').pop()?.split('?')[0]; // Extract from shortened URL, ignore query params
          setEmbedUrl(`https://www.youtube.com/embed/${videoId}`)
        }
    },[videoLink])
    return (
    <div className={`cursor-pointer group w-full ${className && className}`} >
           <iframe
              width="100%"
              className="w-full object-cover aspect-[1.6/1] rounded-xl" 
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe> 
        <div className="group-hover:text-[#13399A]  whitespace-nowrap truncate text-base font-semibold leading-6 text-left mt-3 mb-1" dangerouslySetInnerHTML={{__html: title}} />
       
      
    </div>
    );
  }
  
'use client'
import ShareButton from '@/components/ui/share-button'
import WrapButton from '@/components/ui/wrap-button'
import { Banana, Camera, CameraIcon, Circle, Globe, Globe2, LandPlot, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import FlipLink from "@/components/ui/text-effect-flipper"


// function page() {
//   return (
//     <FlipLink href="https://x.com/guri_who">Behance</FlipLink>
//   )}

function page() {

  return (
   <div  className='flex flex-row items-center justify-evenly g m-10 p-10' >
   
   <WrapButton > 
    <span className='flex flex-row items-center justify-center  gap-1.5'>
      <Camera className='animate-spin'/>
      <p>click here</p>
    </span>
   </WrapButton>
   <span className=''>
      <ShareButton links={[{icon:Twitter},{icon:Circle},{icon:Youtube},{icon:LandPlot}]}>share</ShareButton>
   </span>
  <span className=' flex flex-col'>
      <FlipLink   href='https://gemini.google.com/app/d43ade308bac115c'>youtube</FlipLink>
      <FlipLink  href='https://gemini.google.com/app/d43ade308bac115c'>Gemini</FlipLink>
  </span>
    </div>
  )
}


export default page
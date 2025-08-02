'use client'
import ShareButton from '@/components/ui/share-button'
import WrapButton from '@/components/ui/wrap-button'
import { Banana, Camera, CameraIcon, Circle, Globe, Globe2, LandPlot, Twitter, Youtube } from 'lucide-react'
import React from 'react'


function page() {

  return (
   <div >
   <WrapButton className='mt-30 ml-40 '> 
    <span className='flex flex-row items-center justify-center p-7 gap-1.5'>
    <Camera className='animate-spin'/>
    <p>click here</p>
    </span>

   </WrapButton>
   <span className='mt-30 ml-40 '>
   <ShareButton links={[{icon:Twitter},{icon:Circle},{icon:Youtube},{icon:LandPlot}]}>share</ShareButton></span>
    </div>
  )
}


export default page
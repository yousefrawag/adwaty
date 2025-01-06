"use client"
import PressReleases from '@/components/pages/pressReleases/PressReleases.jsx'
import React from 'react'
import { AuthFetchpresesleas } from '@/utils/FetchSeries';
const page = () => {
    const { loadding, blogs } = AuthFetchpresesleas();
 if(loadding){
  return (
    <div className="fixed top-0 left-0 right-0 z-[999] bg-primary bottom-0 w-full h-full bg-red ">
              <div className='w-full h-full flex items-center justify-center flex-col bg-red'>
              <span className="loader mb-20"></span>

              </div>
    

        </div>
  )
 }   
  return (
    <>
      <PressReleases blogs={blogs}/>
    </>
  )
}

export default page

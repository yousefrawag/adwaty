"use client";

import React, { use } from 'react';
import Singelblogher from '@/components/ui/modernBlogs/Singelblogher';
import RelatedBlogs from '@/components/ui/modernBlogs/RelatedBlogs';
import { AuthFetchpresesleas } from '@/utils/FetchSeries';

const SinagelBlog = ({params}) => {
  const { id } = use(params);
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

  const currentBlog = blogs.find((item) => item.id === id);
  console.log(currentBlog);
  

  return (
    <div className="mt-5">
      <Singelblogher currentBlog ={currentBlog} loadding={loadding} />
      <RelatedBlogs  blogs={blogs}/>
    </div>
  );
};

export default SinagelBlog;

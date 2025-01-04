"use client";

import React, { use } from 'react';
import Singelblogher from '@/components/ui/modernBlogs/Singelblogher';
import RelatedBlogs from '@/components/ui/modernBlogs/RelatedBlogs';
import { AuthFetchpresesleas } from '@/utils/FetchSeries';

const SinagelBlog = ({params}) => {
  const { id } = use(params);
  const { loadding, blogs } = AuthFetchpresesleas();


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

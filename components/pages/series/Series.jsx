"use client"
import Header from '@/components/ui/header/Header.jsx'
import Story from '@/components/ui/story/Story.jsx'
import React from 'react'
import { AuthFetchBlog } from '@/utils/FetchSeries'
const Series = () => {
  const {data , loading} = AuthFetchBlog()
  return (
    <div>
      {/* header */}
      <Header data={data}/>
      {/* story section */}
      <Story/>
    </div>
  )
}

export default Series

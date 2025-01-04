"use client"
import PressReleases from '@/components/pages/pressReleases/PressReleases.jsx'
import React from 'react'
import { AuthFetchpresesleas } from '@/utils/FetchSeries';
const page = () => {
    const { loadding, blogs } = AuthFetchpresesleas();
  return (
    <>
      <PressReleases blogs={blogs}/>
    </>
  )
}

export default page

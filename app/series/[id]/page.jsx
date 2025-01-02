"use client"
import SeriesDetails from "@/components/ui/story/SeriesDetails.jsx"
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  return (
    <>
      <SeriesDetails selectedCategoryId={id}/>
    </>
  )
}

export default page

"use client"; // This must be the first line in the file

import SeriesDetails from "@/components/ui/story/SeriesDetails.jsx";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();

  return (
    <>
      <SeriesDetails selectedCategoryId={id} />
    </>
  );
};

export default Page;


"use client"
import HomePage from "@/components/pages/home/HomePage";
import { AuthFetchBlog } from "@/utils/FetchSeries";

export default function Home() {
  const {loading} = AuthFetchBlog()
  // if(loading) {
  //   return <div className="fixed top-0 left-0 right-0 z-[999] bg-[#06A580] bottom-0 w-full h-full bg-red ">
  //             <div className='w-full h-full flex items-center justify-center flex-col bg-red'>
  //             <span className="loader mb-20"></span>

  //             </div>
    

  //       </div>
  // }
  return (
    <>
    <HomePage/>
    </>
  );
}

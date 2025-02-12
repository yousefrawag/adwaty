"use client"
import AboutComponent  from "@/components/ui/about/About";

import Header from "@/components/ui/header/Header";
import Story from "@/components/ui/story/Story";
import TheBestEver from "@/components/ui/theBestEver/TheBestEver";
import VariousPrograms from "@/components/ui/various-programs/VariousPrograms";
import { AuthFetchBlog } from "@/utils/FetchSeries";
const HomePage = () => {
const {data , loading} = AuthFetchBlog()





  return (
    <div>
      {/* header section */}
      <Header data={data} />
         {/* about section */}
         <AboutComponent  />
      {/* Story Section */}
      <Story />
   
      {/* Various Programs */}
      <VariousPrograms  />
      {/* The Best Ever */}
      {/* <TheBestEver /> */}
    </div>
  );
};

export default HomePage;

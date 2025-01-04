"use client"
import About from "@/components/ui/about/About";

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
      {/* Story Section */}
      <Story />
      {/* about section */}
      <About />
      {/* Various Programs */}
      <VariousPrograms data={data} />
      {/* The Best Ever */}
      <TheBestEver />
    </div>
  );
};

export default HomePage;

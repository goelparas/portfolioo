"use client"
import About from "@/components/about";
import Contact from "@/components/contact";
import MyProjects from "@/components/projects/MyProjects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { ScreenSize } from "@/lib/types";

export default function Home() {
  const {width} = useWindowSize();
  if(!width)return null;

  return (
    <main className="flex flex-col items-center px-4 overflow-x-hidden relative">
      <Image src={'/left-hand.webp'} width={ width >ScreenSize.MOBILE ?   140: 60} height={width >ScreenSize.MOBILE ?140:60} alt="asdf" className="absolute left-0 top-0 "/>
      <About />
      <Experience />
      <MyProjects/>
      <Testimonials />
      <Contact />
    </main>
  );
}

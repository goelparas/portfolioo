import About from "@/components/about";
import Contact from "@/components/contact";
import MyProjects from "@/components/MyProjects";
import Intro from "@/components/intro";
import Experience from "@/components/Experience";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useScroll } from "@/lib/hooks/useScroll";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 overflow-x-hidden">
      <Intro />
      {/* <SectionDivider /> */}
      <About />
      <MyProjects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}

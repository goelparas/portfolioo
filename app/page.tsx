import About from "@/components/about";
import Contact from "@/components/contact";
import MyProjects from "@/components/MyProjects";
import Intro from "@/components/intro";
import Experience from "@/components/experience";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 overflow-x-hidden">
      <Intro />
      <About />
      <MyProjects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}

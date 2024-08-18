import About from "@/components/about";
import Contact from "@/components/contact";
import MyProjects from "@/components/projects/MyProjects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 overflow-x-hidden">
      <About />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

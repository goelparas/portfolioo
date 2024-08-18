import About from "@/components/about";
import Contact from "@/components/contact";
import MyProjects from "@/components/projects/MyProjects";
import Experience from "@/components/experience";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <About />
      <MyProjects />
      {/* <Experience /> */}
      <Testimonials />
      <Contact />
    </main>
  );
}

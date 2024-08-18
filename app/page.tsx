import About from "@/components/about";
import CommonHand from "@/components/common/commonhand";
import Contact from "@/components/contact";
import MyProjects from "@/components/projects/MyProjects";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 overflow-x-hidden relative">
      
      <About />
      <MyProjects />
      <Testimonials />
      <Contact />
    </main>
  );
}

"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import MyProjects from "@/components/projects/MyProjects";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import Experience from "@/components/experience";
import Header from "@/components/header";
import { useWindowSize } from "@/lib/hooks/useWindowSize";

export default function Home() {
  const windowSize = useWindowSize();
  if (!windowSize.width)
    return (
      <p className="fixed h-dvh w-dvw flex items-center justify-center font-extrabold text-3xl">
        Hi, There I am Paras{" "}
      </p>
    );
  return (
    <main className="flex flex-col items-center px-4 overflow-x-hidden relative">
      <Header />
      <About />
      <Experience />
      <MyProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

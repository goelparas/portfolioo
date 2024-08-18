"use client";

import About from "@/components/about";
import CommonHand from "@/components/common/commonhand";
import Contact from "@/components/contact";
import MyProjects from "@/components/projects/MyProjects";
import Testimonials from "@/components/testimonials";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { ScreenSize } from "@/lib/types";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import WordRotate from "@/components/magicui/word-rotate";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import alienLottie from "@/components/animation/alien.json";

const words = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "HTML/CSS",
  "Firebase",
  "React Query",
  "Redux",
  "Framer Motion",
];

export default function Home() {
  const { width } = useWindowSize();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, words.length * 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <main className="flex flex-col items-center px-4 overflow-x-hidden relative">
      <Header />
      <Image
        src={"/left-hand.webp"}
        width={width! > ScreenSize.MOBILE ? 140 : 60}
        height={width! > ScreenSize.MOBILE ? 140 : 60}
        alt="asdf"
        className="absolute left-0 top-0"
      />
      <About />
      <MyProjects />
      <Testimonials />
      <Contact />
    </main>
  );
}

const LoadingPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-6">
      <WordRotate
        words={words}
        className="text-4xl bg-gradient-to-r to-orange from-purple bg-clip-text text-transparent font-bold font-markpro"
        duration={1000}
      />
    </div>
  );
};

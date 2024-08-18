"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import coffeCat from "@/components/animation/cat-coffee.json";
import hello from "@/components/animation/hello.json";
import { useRouter } from "next/navigation";
import { useActiveSectionContext } from "@/context/active-section-context";
import Socials from "./socials";
export default function About() {
  const { ref } = useSectionInView("About");

  const router = useRouter();

  const handleProjects = () => {
    router.push("/#projects");
  };
  return (
    <motion.section
      ref={ref}
      className="mb-28  text-center leading-8 sm:mb-40 scroll-mt-28 px-4 lg:px-[20%]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <main className="h-screen flex flex-col items-left justify-between gap-8  py-6">
        <div />
        <div className="flex flex-col w-full gap-6 justify-center items-start h-full">
          <h1 className="text-[3.4rem] tracking-tighter text-white font-bold text-left leading-[48px] font-markpro lg:hidden">
            turning idea into real life{" "}
            <span className="animate-gradient-text bg-gradient-to-r to-orange from-purple bg-clip-text text-transparent">
              product{" "}
            </span>
            is my calling .
          </h1>
          <h1 className=" hidden lg:block text-[5.5rem] text-white font-bold text-left leading-[5rem] tracking-tighter  font-markpro">
            turning idea into real life{" "}
            <span className="animate-gradient-text bg-gradient-to-r to-orange from-purple bg-clip-text text-transparent">
              product{" "}
            </span>
            is my calling .
          </h1>
          <p
            className="font-condensed  text-left cursor-pointer   group  flex flex-col gap-0.5"
            onClick={handleProjects}
          >
            <span>
              <span className=" w-fit py-1 pr-0.5 text-left ">View</span>
              <span>Projects</span>
            </span>
            <span className="w-4  group-hover:w-full bg-white transition-all duration-300 h-[1px]"></span>
          </p>
        </div>
        <div className="flex flex-col  w-full gap-5">
          <div className="flex items-center justify-end">
            <div className="flex  justify-end items-end">
              <div className="flex items-end w-4/5 ">
                <Socials />
              </div>
              <Lottie
                animationData={coffeCat}
                play
                loop
                className="h-20 w-20"
              />
            </div>
          </div>
          <p className="font-condensed text-left lg:text-right text-xs w-full">
            Hello stranger! 👋, my name is Paras and I am a frontend engineer,
            passionate about digital products that help people experience
            everyday life, not endure it.
          </p>
        </div>
      </main>
    </motion.section>
  );
}

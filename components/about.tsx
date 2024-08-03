"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import coffeCat from "@/components/animation/cat-coffee.json";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28  "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <main className="min-h-screen flex flex-col items-left justify-between gap-8  py-6">
        <div />
        <div className="flex flex-col w-full gap-6 justify-center items-start h-full">
          <h1 className="text-5xl  text-white font-bold text-left leading-10 font-markpro">
            turning idea into real life{" "}
            <span className="animate-gradient-text bg-gradient-to-r to-orange from-purple bg-clip-text text-transparent">
              product
            </span> 
            is my calling .
          </h1>
          <p className="font-condensed text-left">
            <span className=" w-fit border-b border-white py-1 pr-0.5 text-left ">
              View
            </span>
            <span>Projects</span>
          </p>
        </div>
        <div className="flex flex-col  w-full gap-5">
          <div className="flex items-center justify-end">
            <Lottie
              animationData={coffeCat}
              play
              loop
              className="h-20 w-20"
            />
          </div>

          <p className="font-condensed text-left text-xs">
            Hello stranger! 👋, my name is Paras and I am a frontend engineer,
            passionate about digital products that help people experience
            everyday life, not endure it.
          </p>
        </div>
      </main>
    </motion.section>
  );
}

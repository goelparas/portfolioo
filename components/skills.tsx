"use client";

import React from "react";
import SectionHeading from "./common/section-heading";
import { skillsData } from "@/lib/constants/data";
import { useSectionInView } from "@/lib/hooks";
import { SkillCircle } from "./skills/SkillCircle";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="h-full lg:h-screen w-full flex flex-col justify-center items-center"
    >
     <SkillCircle/>
    </section>
  );
}

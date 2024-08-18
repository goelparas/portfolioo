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
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="h-full lg:h-screen lg:mb-3 mt-28 lg:mt-0 w-full flex flex-col justify-center items-center"
    >
      <SectionHeading className="mb-0"> Skills</SectionHeading>
      <SkillCircle />
    </section>
  );
}

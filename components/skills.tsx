"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/constants/data";
import { useSectionInView } from "@/lib/hooks";
import { SkillCircle } from "./SkillCircle";

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
      className="lg:h-[100dvh] mb-3 sm:mb-8 w-full"
    >
      <SkillCircle />
    </section>
  );
}

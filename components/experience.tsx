"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/constants/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="experience" className=" mb-28">
      <SectionHeading>Experience</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

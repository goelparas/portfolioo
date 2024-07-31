import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { motion } from "framer-motion";
import {
  CSSIcon,
  HTMLIcon,
  JSIcon,
  NextIcon,
  ReactIcon,
  ReactQueryIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
  WebpackIcon,
} from "../icons";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  {
    name: "innerCircle",
    skills: [
      { skillName: "HTML", skillIcon: <HTMLIcon /> },
      { skillName: "CSS", skillIcon: <CSSIcon /> },
      { skillName: "Javascript", skillIcon: <JSIcon /> },
    ],
  },
  {
    name: "outerCircle",
    skills: [
      {
        skillName: "React",
        skillIcon: <ReactIcon className="w-10 h-10 lg:w-12 lg:h-12" />,
      },
      {
        skillName: "Redux",
        skillIcon: <ReduxIcon className="w-10 h-10 lg:w-12 lg:h-12" />,
      },
      {
        skillName: "Next.js",
        skillIcon: <NextIcon className="w-10 h-10 lg:w-12 lg:h-12" />,
      },
    ],
  },
  {
    name: "outmostCircle",
    skills: [
      {
        skillName: "Typescipt",
        skillIcon: <TypeScriptIcon className="w-11 h-11 lg:w-16 lg:h-16" />,
      },
      {
        skillName: "Tailwind",
        skillIcon: <TailwindIcon className="w-16 h-16 lg:w-20 lg:h-20" />,
      },
      {
        skillName: "React Query",
        skillIcon: <ReactQueryIcon className="w-16 h-16 lg:w-20 lg:h-20" />,
      },
      {
        skillName: "Webpack",
        skillIcon: <WebpackIcon className="w-14 h-14 lg:w-20 lg:h-20" />,
      },
    ],
  },
] as const;

export const introData = (
  <motion.h1
    className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
    <span className="font-bold">full-stack developer</span> with{" "}
    <span className="font-bold">8 years</span> of experience. I enjoy building{" "}
    <span className="italic">sites & apps</span>. My focus is{" "}
    <span className="underline">React (Next.js)</span>.
  </motion.h1>
);

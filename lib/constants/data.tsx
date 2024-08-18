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
import Link from "next/link";

export const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Testimonials",
    hash: "#testimonials",
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

export const INFORMATION = {
  CONTACT: {
    MESSAGE: (
      <>
        Thanks for stopping by, I’m currently looking to join a new team of
        creative designers and developers. If you think we might be a good fit
        for one another, send me an{" "}
        <Link
          className="font-extrabold text-foreground"
          href={"mailto:goelparas.work@gmail.com"}
        >
          email
        </Link>{" "}
        &#128231;.
      </>
    ),
    SOCIALS: {
      github: "https://www.github.com/goelparas",
      twitter: "https://www.twitter.com/goelparas",
      linkedin: "https://www.linkedin.com/in/goelparas",
      leetcode: "https://www.leetcode.com/goelparas",
    },
  },
};



export const projects = [
  {
    title: "Clothing E-Commerce Website",
    imageKey: "clothing_ecommerce",
    imageUrl: "https://raw.githubusercontent.com/goelparas/Crown-Clothing/master/Screenshot%20(54).png",
    liveLink: "https://lustrous-travesseiro-6d2745.netlify.app/",
    description: "An early-stage project for a clothing e-commerce site with basic signup and essential features.",
    longDescription: "This clothing e-commerce website project was an initial foray into the world of online retail. Developed while I was learning web development, the site features basic functionalities such as user signup, product listings, and a simple checkout process. Although it's in the early stages of development, the project lays the groundwork for a full-fledged e-commerce platform, with the potential for adding more advanced features like payment integration, inventory management, and personalized user experiences."
  },
  {
    title: "Solar System AR",
    imageKey: "solar_system_ar",
    imageUrl: "https://user-images.githubusercontent.com/86115703/142908644-4bcfac8a-acd4-4464-9355-be0055c15b63.jpeg",
    liveLink: "https://drive.usercontent.google.com/download?id=1-AHnzRc0hX3yAkVdwu8q8Rd7iUR4ti1g&export=download&authuser=0",
    description: "An AR project of the solar system, built with Unity during my learning phase.",
    longDescription: "The Solar System AR project is an educational tool that offers an interactive exploration of our solar system. Developed with Unity, this project was created as part of my learning journey in augmented reality. It allows users to visualize planets and other celestial bodies in 3D, providing an immersive experience that enhances the understanding of space and astronomy. The project showcases the potential of AR in education, making complex topics more accessible and engaging."
  },
  {
    title: "Case Cobra",
    imageKey: "case_cobra",
    imageUrl: "https://raw.githubusercontent.com/goelparas/imFWEA/master/casecobrajpg.jpg",
    liveLink: "https://case-cobra-beta.vercel.app",
    description: "A hobby project for customizing and purchasing mobile cases, integrated with Stripe for test payments.",
    longDescription: "Case Cobra is a passion project that combines creativity with e-commerce. This platform allows users to upload custom images and design their own mobile cases, which can then be purchased directly through the site. Built with Next.js, Prisma, and PostgreSQL, the project also features Stripe integration for test payments, making it a fully functional e-commerce solution. While it started as a hobby, Case Cobra demonstrates the potential for niche markets in the online retail space."
  },
  {
    title: "Web Builder Prototype",
    imageKey: "web_builder",
    imageUrl: "https://raw.githubusercontent.com/goelparas/imFWEA/1ed1d158be8ce3c9bef6b7ded925227147e17245/webbuilder.svg",
    liveLink: "https://web-builder-fawn.vercel.app/",
    description: "A prototype for a drag-and-drop web builder, allowing users to create websites by dragging elements.",
    longDescription: "The Web Builder Prototype is an early-stage project designed to demonstrate the concept of a drag-and-drop website builder. It enables users to visually design websites by dragging elements onto a canvas. Although it's a prototype, it showcases the potential for creating flexible and customizable websites without the need for coding. This project is still in its developmental stages and serves as a foundation for future advancements in website building tools."
  },
  
  {
    title: "YTcash",
    imageKey: "ytcash",
    imageUrl: "https://raw.githubusercontent.com/goelparas/imFWEA/master/ytcash.jpg",
    liveLink: "https://openinapp.com/ytcash",
    description: "Analyzes YouTube video links to generate affiliate links, allowing users to create shops with ease.",
    longDescription: "YTcash is an innovative project developed under a company where I am currently employed. The platform takes YouTube video links and analyzes them to generate affiliate links that users can easily integrate into their video descriptions. Additionally, YTcash allows users to create their own shops, where they can promote and sell products related to their videos. This project simplifies the process of monetizing YouTube content and offers a unique way for creators to enhance their revenue streams."
  },
  {
    title: "Top Secret Links",
    imageKey: "top_secret_links",
    imageUrl: "https://raw.githubusercontent.com/goelparas/imFWEA/master/top-secret-whatsapp.avif",
    liveLink: "https://openinapp.com/topsecrets",
    description: "A media-sharing platform that enables content creators to monetize resources, generating over $50k in revenue.",
    longDescription: "Top Secret Links is a robust media-sharing platform built with Next.js, specifically designed to empower content creators by enabling them to share valuable resources and monetize their work through microtransactions. The platform has successfully generated over $50k in revenue, highlighting its effectiveness in supporting creators' financial growth. The project integrates secure payment gateways and provides a seamless experience for both creators and consumers, making it a significant player in the digital content economy."
  },
];


export const AVATAR = "https://raw.githubusercontent.com/goelparas/imFWEA/master/avatar.jpg"
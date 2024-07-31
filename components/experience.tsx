"use client";

import React from "react";
import SectionHeading from "./section-heading";
import TinderCard from "react-tinder-card";
import { useSectionInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  const onSwipe = (direction: any) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier: any) => {
    console.log(myIdentifier + " left the screen");
  };

  const tinderCards = [
    {
      title: "Backend-End Developer",
      location: "Orlando, FL",
      description: "Worked on the Google Search Engine",
      color: "bg-green-500",
    },
    {
      title: "Software Engineer",
      location: "Google",
      description: "Worked on the Google Search Engine",
      color: "bg-red-500",
    },
    {
      title: "Front-End Developer",
      location: "Orlando, FL",
      description: "Worked on the Google Search Engine",
      color: "bg-blue-500",
    },
  ];

  return (
    <section id="experience" ref={ref} className="w-full sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <div className="w-full flex flex-col justify-center items-center h-[100vh]">
        <div className="w-[300px] h-[450px] lg:w-[400px] lg:h-[550px] relative">
          {tinderCards.map((card, index) => (
            <TinderCard
              key={index}
              onSwipe={onSwipe}
              onCardLeftScreen={() => onCardLeftScreen("fooBar")}
              preventSwipe={["up", "down"]}
              className="absolute"
            >
              <div
                className={cn(
                  "w-[300px] h-[450px] lg:w-[400px] lg:h-[550px] shadow-lg text-black select-none bg-cover bg-center rounded-3xl hover:-translate-y-12 transition-transform duration-300 ease-in-out",
                  card.color,
                  {
                    "rotate-[-4deg]": index === 0,
                    "rotate-[4deg]": index === 1,
                  }
                )}
                style={{
                  transformOrigin: "center 200%",
                }}
              >
                <div className="p-4">
                  <h3 className="font-semibold capitalize">{card.title}</h3>
                  <p className="font-normal !mt-0">{card.location}</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {card.description}
                  </p>
                </div>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </section>
  );
}

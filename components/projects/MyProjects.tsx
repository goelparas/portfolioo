"use client";

import React, { use, useEffect } from "react";
import SectionHeading from "../common/section-heading";
import TinderCard from "react-tinder-card";
import { useSectionInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card-effect";
import { Drawer, DrawerContent } from "../common/Drawer";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import loadingLottie from "@/components/animation/loading-lottie.json";

const tinderCards = [
  {
    title: "Backend-End Developer",
    location: "Orlando, FL",
    description: "Worked on the Google Search Engine",
  },
  {
    title: "Software Engineer",
    location: "Google",
    description: "Worked on the Google Search Engine",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description: "Worked on the Google Search Engine",
  },
];

export default function MyProjects() {
  const { ref } = useSectionInView("Projects");
  const [detailModal, setDetailModal] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<number>(0);
  const [swipedCards, setSwipedCards] = React.useState(new Set());
  const [restore, setRestore] = React.useState(false);
  const [cards, setCards] = React.useState(tinderCards);

  const onSwipe = (direction: string, identifier: number) => {
    console.log("You swiped: " + direction);
    setSwipedCards((prev) => new Set(prev).add(identifier));
  };

  const onCardLeftScreen = (identifier: number) => {
    console.log(identifier + " left the screen");
    // Optional: Remove the card from the list
    setCards((prev) => prev.filter((_, index) => index !== identifier));
  };

  const restoreCards = () => {
    setCards(tinderCards);
    setSwipedCards(new Set());
    setRestore(false);
  };

  useEffect(() => {
    if (swipedCards.size === tinderCards.length) {
      setRestore(true);
    }
  }, [swipedCards]);

  useEffect(() => {
    if (restore) {
      setTimeout(() => {
        restoreCards();
      }, 3000);
    }
  }, [restore]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 1.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 7,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="h-[80dvh] w-full px-4 lg:px-10">
      <SectionHeading text="My Projects"/>

      <div className="relative flex items-center justify-center h-full w-full">
        {cards.map((card, index) => (
          <TinderCard
            key={index}
            preventSwipe={["up", "down"]}
            swipeThreshold={0.5}
            className="absolute top-16  w-fit"

            onSwipe={(dir) => onSwipe(dir, index)}
            onCardLeftScreen={() => onCardLeftScreen(index)}
          >
            <div
              className={cn(
                "w-full px-4 shadow-lg text-black select-none bg-cover bg-center rounded-3xl hover:-translate-y-12 transition-transform duration-300 ease-in-out",
                {
                  "rotate-[-4deg]": index === 0,
                  "rotate-[4deg]": index === 1,
                }
              )}
              style={{
                transformOrigin: "center 200%",
              }}
            >
              <CardContainer className="inter-var w-full h-full">
                <CardBody className="relative group/card hover:shadow-2xl shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-full h-[24rem] sm:h-[22rem] lg:h-auto rounded-xl p-4 sm:p-6 border-2">
                  <CardItem
                    translateZ="50"
                    className="text-lg sm:text-xl font-bold  text-white"
                  >
                    {card.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className=" text-xs sm:text-sm max-w-sm mt-2 text-neutral-300"
                  >
                    {card.description}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className=" text-xs sm:text-sm max-w-sm mt-2 text-neutral-300"
                  >
                    {card.location}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    className="w-full mt-4 overflow-hidden"
                    onClick={() => {
                      setSelectedCard(index);
                      setDetailModal(true);
                    }}
                    onTouchStart={() => {
                      setSelectedCard(index);
                      setDetailModal(true);
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="h-[16rem] sm:h-[14rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                      onTouchStart={() => {
                        setSelectedCard(index);
                        setDetailModal(true);
                      }}
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </TinderCard>
        ))}
        {restore && (
          <Lottie
            animationData={loadingLottie}
            play
            loop
            className="absolute h-28 w-28 bg-transparent"
          />
        )}
      </div>

      <GlassMorphedDrawer open={detailModal} onOpenChange={setDetailModal}>
        <motion.div
          className="text-white flex flex-col justify-center items-center gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-3xl font-bold mb-2"
            variants={childVariants}
          >
            {tinderCards[selectedCard].title}
          </motion.p>
          <motion.img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="thumbnail"
            className="rounded-xl w-full h-full lg:w-[500px]"
          />
          <motion.p
            className="text-sm mb-2 text-justify rounded-xl text-white p-4"
            variants={childVariants}
          >
            {/* {tinderCards[selectedCard].description} */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            aliquet, nisl nec aliquam tempus, purus purus tempor libero, non
            laoreet nulla nunc sed odio. Nulla facilisi. Proin nec nulla
            fringilla, interdum odio eget, euismod elit. Nulla facilisi. Proin
            nec nulla fringilla, interdum odio eget, euism Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nulla aliquet, nisl nec aliquam
            tempus, purus purus tempor libero, non laoreet nulla nunc sed odio.
            Nulla facilisi. Proin nec nulla fringilla, interdum odio eget,
            euismod elit. Nulla facilisi. Proin nec nulla fringilla, interdum
            odio eget, euism
          </motion.p>
        </motion.div>
      </GlassMorphedDrawer>
    </section>
  );
}

type GlassMorphedDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children?: React.ReactNode;
};

const GlassMorphedDrawer = ({
  open,
  onOpenChange,
  ...props
}: GlassMorphedDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent
        className="h-full w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none px-6 py-8"
        showPill={false}
        onClick={() => onOpenChange(false)}
      >
        {props.children}
      </DrawerContent>
    </Drawer>
  );
};

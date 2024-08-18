"use client";

import React, { useEffect } from "react";
import SectionHeading from "../common/section-heading";
import TinderCard from "react-tinder-card";
import { useSectionInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card-effect";
import { Drawer, DrawerContent } from "../common/Drawer";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import loadingLottie from "@/components/animation/loading-lottie.json";
import { projects } from "@/lib/constants/data";

export default function MyProjects() {
  const { ref } = useSectionInView("Projects");
  const [detailModal, setDetailModal] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<number>(0);
  const [swipedCards, setSwipedCards] = React.useState(new Set());
  const [restore, setRestore] = React.useState(false);
  const [cards, setCards] = React.useState(projects);

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
    setCards(projects);
    setSwipedCards(new Set());
    setRestore(false);
  };

  useEffect(() => {
    if (swipedCards.size === projects.length) {
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
    <>
      <SectionHeading text="My Projects" />
      <section
        id="projects"
        ref={ref}
        className=" w-full px-10 lg:px-10 h-[60vh]"
      >
        <div className="relative flex items-center justify-center h-full w-full antialiased">
          {cards.map((card, index) => (
            <TinderCard
              key={index}
              preventSwipe={["up", "down"]}
              swipeThreshold={0.5}
              className="absolute top-16  w-fit "
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
                <CardContainer className="w-full h-full">
                  <CardBody className="relative group/card hover:shadow-2xl shadow-emerald-500/[0.1] bg-black border-white/[0.2] max-[460px]:w-[15rem]   w-[20rem] h-[22rem] md:h-[24rem]  rounded-xl p-4 sm:p-6 border-2 overflow-hidden">
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
                      translateZ="100"
                      className="w-full mt-4 overflow-hidden rounded-2xl relative"
                    >
                      <div className="overflow-hidden relative h-40 flex items-center justify-center">
                        <div className="absolute inset-0 blur-[10px] -z-1 rounded-lg scale-110 overflow-hidden">
                          <img
                            src={card.imageUrl}
                            alt="Image"
                            className="w-full h-full rounded-lg"
                          />
                        </div>
                        <img
                          src={card.imageUrl}
                          className="w-full object-contain z-10 relative rounded-2xl group-hover/card:shadow-xl aspect-square"
                          alt="thumbnail"
                        />
                      </div>
                    </CardItem>
                    <CardItem as="button" translateZ="60" className="mt-4">
                      <button
                        className="bg-black text-white  text-xs rounded-lg font-semibold hover:bg-black/[0.8] hover:shadow-lg"
                        onTouchStart={() => {
                          setSelectedCard(index);
                          setDetailModal(true);
                        }}
                        onClick={() => {
                          setSelectedCard(index);
                          setDetailModal(true);
                        }}
                      >
                        View Project
                      </button>
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
            className="text-white flex flex-col justify-start items-start gap-2 overflow-y-scroll scrollbar-hide pl-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-3xl font-bold " variants={childVariants}>
              <SectionHeading
                text={projects[selectedCard].title}
                right={false}
              />
            </motion.div>
    
              <motion.img 
                src={projects[selectedCard].imageUrl}
                alt="thumbnail"
                className="rounded-2xl  w-[90%] h-4/5  overflow-x-hidden"
              />
 

            <motion.p
              className="text-sm mb-2 text-justify rounded-xl text-white py-4 pr-4"
              variants={childVariants}
            >
              {projects[selectedCard].longDescription}
            </motion.p>
            <motion.div className="text-3xl font-bold" variants={childVariants}>
              <SectionHeading text="Live link" left right={false} />
            </motion.div>
          </motion.div>
        </GlassMorphedDrawer>
      </section>
    </>
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
        className="h-full w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none   py-8"
        showPill={false}
      >
        {props.children}
      </DrawerContent>
    </Drawer>
  );
};

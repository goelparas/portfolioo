"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import { cn } from "@/lib/utils";
import { FaCircleXmark } from "react-icons/fa6";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    false
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="relative  overflow-hidden w-full md:px-[20%]">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-transparent  h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid  place-items-center z-[100] h-dvh">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-1 z-50 right-0 lg:hidden items-center justify-center bg-black  rounded-full h-12 w-12"
              onClick={() => setActive(null)}
            >
              <FaCircleXmark size={40} stroke="#000" />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-dvh md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="p-3 h-2/5"
              >
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className={cn(
                    "w-full h-[180px] lg:h-80 !rounded-3xl object-contain object-center",
                    active.imageStyle
                  )}
                />
              </motion.div>
              <div className="h-4/5">
                <div className="flex justify-between items-start p-4 h-[20%]">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}{" "}
                      <span className="text-[10px] sm:text-xs font-condensed ">
                        {active.time}
                      </span>
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-8 py-2 text-md !rounded-xl font-condensed font-bold bg-white shrink-0 text-black"
                  >
                    Link
                  </motion.a>
                </div>
                <div className="relative px-4 h-[90%] scrollbar-hide overflow-y-scroll">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-400   overflow-y-scroll pb-32 sm:p-0 h-full md:h-[450px] scrollbar-hide"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="flex flex-col  w-full gap-12">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between  w-full items-start sm:items-center min-w-fit hover:bg-neutral-700  rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row w-full ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={150}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className={cn(
                    `h-44 w-full md:h-16 md:w-24 !rounded-2xl object-contain object-center `,
                    card.imageStyle
                  )}
                />
              </motion.div>
              <div className="flex justify-between items-center rounded-xl p-1 sm:w-full">
                <div>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-start md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-start md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="py-3 px-2 text-sm    w-fit  sm:w-28 md:w-fit font-condensed  !rounded-[8px] sm:!rounded-xl font-semibold sm:font-semibold bg-white hover:bg-purple   text-black mt-4 md:mt-0"
                >
                  {card.ctaText}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="#000"
      stroke="#000"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Frontend Developer",
    title: "OpeninApp.",
    src: "https://raw.githubusercontent.com/goelparas/imFWEA/946b4a6de51a7816fe7f19d912d0a8e4dbcff5b8/openinap.svg",
    imageStyle: "bg-white opacity-90",
    ctaText: "Read More",
    ctaLink: "https://www.Openinapp.com",
    time: "April-2024 - Present",
    content: () => {
      return (
        <p className="!text-lg">
          As a Frontend Developer at OpenInApp, Bangalore, I have played a
          pivotal role in leading the development of innovative solutions that
          have made a significant impact on content creators.
          <p>
            One of the standout projects I have worked on is TopSecret Links, a
            Next.js-based media-sharing platform that has been a game-changer
            for content creators. This platform was designed to enable creators
            to securely share private content with their audience, ensuring that
            their work remains protected while still being accessible to those
            who have the right permissions. The emphasis on security was a core
            aspect of the development process, as it was crucial to build a
            system that creators could trust with their valuable content.
          </p>
          <p>
            The results speak for themselves. TopSecret Links has seen over
            20,000 uploads, with creators from various fields using the platform
            to share their work with a select audience. The platform's success
            is further underscored by the significant revenue it has
            generated—over $50,000. This revenue growth is a testament to the
            platform's effectiveness in meeting the needs of content creators
            and providing them with a secure, reliable space to share their
            work.
          </p>
          
          <p>
            In addition to focusing on security and user experience, I also
            placed a strong emphasis on scalability. As the platform grew in
            popularity, it was essential to ensure that it could handle
            increased traffic and content uploads without any degradation in
            performance. I optimized the platform's architecture and implemented
            best practices in frontend development to ensure that it could scale
            efficiently. This included optimizing image loading, implementing
            lazy loading for media content, and using efficient caching
            strategies to reduce server load.
          </p>
        </p>
      );
    },
  },
  {
    description: "Junior Frontend Dev",
    title: "OpeninApp",
    imageStyle: "bg-white opacity-90",
    src: "https://raw.githubusercontent.com/goelparas/imFWEA/946b4a6de51a7816fe7f19d912d0a8e4dbcff5b8/openinap.svg",
    ctaText: "Read More",
    ctaLink: "https://www.Openinapp.com",
    time: "Oct-2023 - April-2024",
    content: () => {
      return (
        <p className="!text-lg">
          <p>
            Additionally, during my internship at OpenInApp, I took on the
            challenge of building an AI-driven tool called YTCash, specifically
            designed for YouTube creators. This tool was developed with the goal
            of helping creators monetize their content more effectively by
            generating affiliated links for products featured in their videos.
            The idea was to create a seamless way for creators to earn
            additional revenue by simply linking products they were already
            promoting in their content.
          </p>
          <p>
            The development of YTCash involved integrating AI algorithms that
            could automatically analyze video content, identify featured
            products, and generate corresponding affiliate links. This not only
            simplified the process for creators but also ensured that the links
            were highly relevant, maximizing the potential for conversions. The
            AI component was particularly challenging, as it required precise
            tuning to ensure accuracy in product identification and relevance in
            link generation.
          </p>
          <p>
            The results have been highly impactful. YTCash has empowered
            thousands of YouTube creators, many of whom have over 1 million
            subscribers, to significantly increase their earnings. On average,
            creators using YTCash have generated over $15,000 in additional
            revenue, which has been a substantial boost to their income streams.
            The tool's success is a testament to the importance of innovation in
            meeting the needs of modern content creators.
          </p>
         
        </p>
      );
    },
  },

  {
    description: "SDE Intern",
    title: "Integra Connect",
    imageStyle: "bg-transparent",
    src: "https://raw.githubusercontent.com/goelparas/imFWEA/7949837eef3bf1ac9d8e0a35db9a6af1569089ed/integra.svg",
    ctaText: "Read More",
    ctaLink: "https://www.integraconnect.com",
    time: "June-2023 - Sept-2023",
    content: () => {
      return (
        <p className="overflow-scroll h-full !text-lg">
          Before transitioning into my full-time role, I accumulated invaluable
          experience as an SDE Intern at Integra Connect in Bangalore. During
          this period, I was entrusted with the development of user interfaces
          for a highly complex and critical Electronic Health Record (EHR)
          system using React.js. This project required me to work closely with a
          cross-functional team, where I was responsible for implementing
          advanced UI features that significantly improved the user experience
          for healthcare professionals. My contributions weren't limited to just
          front-end development; I also took on the challenge of designing and
          implementing a robust ETL console application using C# and .NET. This
          application played a crucial role in facilitating the efficient
          transfer of vast amounts of sensitive data from Snowflake to the
          company’s secure database. The data migration process was complex and
          required meticulous attention to detail to ensure the integrity and
          reliability of over 200,000 patient records. This successful migration
          not only optimized the database performance but also laid a solid
          foundation for future scalability and data management within the
          organization.
        </p>
      );
    },
  },
];

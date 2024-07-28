"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion/";
import { links } from "@/lib/constants/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { ScreenSize } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useScroll } from "@/lib/hooks/useScroll";
export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const windowSize = useWindowSize();
  const { isScrolling } = useScroll();

  return (
    <AnimatePresence>
      {!isScrolling && (
        <motion.header
          className={cn(
            `z-50 w-full  h-fit fixed  items-center justify-center flex flex-col py-8 px-8`
          )}
        >
          <motion.div
            className=" relative w-[90%]  py-2   border border-white mx-auto border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]    sm:w-[36rem] rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <nav className="flex h-12 items-center justify-center  relative  py-0 w-full px-8 overflow-hidden">
              {windowSize.width &&
                (windowSize.width < ScreenSize.MOBILE ? (
                  <div className=" flex justify-between items-center w-full">
                    <p>Paras Goel</p>
                    <div> Drop Down</div>
                  </div>
                ) : (
                  <ul className="flex  flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                      <motion.li
                        className="h-3/4 flex items-center justify-center relative w-1/6"
                        key={link.hash}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        <Link
                          className={cn(
                            "flex w-full items-center justify-center px-4 py-3  transition duration-150  text-orange ",
                            {
                              "text-black": activeSection === link.name,
                            }
                          )}
                          href={link.hash}
                          onClick={() => {
                            setActiveSection(link.name);
                            setTimeOfLastClick(Date.now());
                          }}
                        >
                          {link.name}

                          {link.name === activeSection && (
                            <motion.span
                              className="rounded-full absolute inset -0 -z-10 bg-purple w-full h-full"
                              layoutId="activeSection"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                              }}
                            />
                          )}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                ))}
            </nav>
          </motion.div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

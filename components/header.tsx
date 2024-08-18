"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/lib/constants/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { ScreenSize } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useScroll } from "@/lib/hooks/useScroll";
import { Hamburger } from "./icons/common";
import Image from "next/image";

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
            `z-50 w-full  h-fit fixed  top-8  left-0  flex items-center justify-center`
          )}
        >
          <motion.div
            className="relative h-16 py-1 lg:w-fit shadow-lg shadow-black/[0.06] backdrop-blur-[0.5rem] w-4/5 sm:w-[36rem] rounded-xl bg-slate-800 border-black/30 bg-opacity-50"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <nav className="flex h-full items-center justify-center relative py-0 px-4 overflow-hidden">
              {windowSize.width &&
                (windowSize.width < ScreenSize.MOBILE ? (
                  <div className="flex justify-between items-center w-full">
                    <Image
                      src={
                        "https://readyplayer.me/gallery/66a630a5553871e7cab1284e-JSYznGjpeg"
                      }
                      alt="icon-avatar"
                      width={30}
                      height={30}
                    />
                    <Hamburger />
                  </div>
                ) : (
                  <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
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
                              className="rounded-xl absolute border border-white inset -0 -z-10 bg-purple w-full h-full"
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

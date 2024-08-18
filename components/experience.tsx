"use client";
import React, { useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./common/section-heading";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    id: "1",
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: "2",
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: "3",
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: "4",
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export default function Experience() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selectedId, setSelectedId] = useState({
    id: "",
    title: "",
    description: "",
  });

  return (
    <section
      id="experience"
      className="mb-28 flex flex-col items-center w-full h-screen"
    >
      <SectionHeading text="My Experience"/>
      <LayoutGroup>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item) => (
            <BentoGridItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
              layoutId={item.id}
              onClick={() => setSelectedId(item)}
            />
          ))}
        </BentoGrid>

        <AnimatePresence>
          {selectedId && selectedId.id && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                key="overlay"
                className="opacity-20 absolute top-0 left-0 right-0 bottom-0"
                onClick={() =>
                  setSelectedId({ id: "", title: "", description: "" })
                }
              />
              <SingleCard
                selectedId={selectedId}
                key="card"
                setSelectedId={setSelectedId}
              />
            </>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}

export const SingleCard = ({ selectedId, setSelectedId }: any) => {
  return (
    <div
      className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 pointer-events-all"
      onClick={() => setSelectedId({ id: "", title: "", description: "" })}
    >
      <motion.div
        className="w-full max-w-lg p-6 bg-black border border-white/[0.2] rounded-xl shadow-input"
        layoutId={selectedId.id}
      >
        <motion.h2 className="text-xl font-bold">{selectedId?.title}</motion.h2>
        <motion.p className="mt-2 text-gray-300">
          {selectedId?.description}
        </motion.p>
      </motion.div>
    </div>
  );
};

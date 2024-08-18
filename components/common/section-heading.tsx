import { cn } from "@/lib/utils";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
};

export default function SectionHeading({
  children,
  className,
  icon,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "w-full font-markpro justify-start items-center gap-2 inline-flex mb-8 px-8 text-2xl lg:text-4xl",
        className
      )}
    >
      <h2 className="font-semibold capitalize animate-gradient-text bg-gradient-to-r to-[#ffcfdf] from-[#b0f3f1] bg-clip-text text-transparent">
        {children}
      </h2>
      <span className="mt-1">{icon}</span>
    </div>
  );
}

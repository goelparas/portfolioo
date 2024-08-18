import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
type SectionHeadingProps = {
  className?: string;
  text: string;
};

export default function SectionHeading({
  text,
  className,
}: SectionHeadingProps) {

  
  return (
    <div className={cn(`flex items-center justify-center w-full gap-2 `)}>
      <Image src="/left-line.svg" width={180} height={3} alt="left stroke" />
      <div className="flex items-center justify-between gap-1 w-fit">
        <p
          className={cn(`label-md text-text-secondary text-center text-2xl lg:text-4xl`, className)}
        >
          {text}
        </p>
      </div>

      <Image src="/right-line.svg" width={180} height={3} alt="left stroke" />
    </div>
  );
}

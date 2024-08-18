import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
type SectionHeadingProps = {
  className?: string;
  text: string;
  left?:boolean
  right?:boolean
  icon?: React.ReactNode;
};

export default function SectionHeading({
  text,
  className,
  left=false,
  right=true,
  icon,
}: SectionHeadingProps) {

  
  return (
    <div className={cn(`flex items-center justify-center w-full gap-2 `)}>
    {left  &&  <Image src="/left-line.svg" width={180} height={3} alt="left stroke" />}
      <div className="flex items-center justify-between gap-1 w-fit">
        <p
          className={cn(`label-md text-text-secondary shrink-0 text-center text-2xl lg:text-4xl`, className)}
        >
          {text}
        </p>
      </div>

      { right &&<Image src="/right-line.svg" width={180} height={3} alt="left stroke" />}

      <span className="mt-1">{icon}</span>
    </div>
  );
}

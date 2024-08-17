import React from "react";
import Link from "next/link";
import { INFORMATION } from "@/lib/constants/data";
import { cn } from "@/lib/utils";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { ScreenSize } from "@/lib/types";

type Props = {
  className?: string;
};

const SOCIALS = [
  {
    href: INFORMATION.CONTACT.SOCIALS.github,
    label: "👾 GITHUB",
    labelSm: "👾 GB",
  },
  {
    href: INFORMATION.CONTACT.SOCIALS.twitter,
    label: "🐦 TWITTER",
    labelSm: "🐦 TWTR",
  },
  {
    href: INFORMATION.CONTACT.SOCIALS.linkedin,
    label: "💼 LINKEDIN",
    labelSm: "💼 LDN",
  },
  {
    href: INFORMATION.CONTACT.SOCIALS.leetcode,
    label: "👾 LEETCODE",
    labelSm: "👾 LTC",
  },
];

const Socials = (props: Props) => {
  const windowSize = useWindowSize();
  const { width } = windowSize;
  if (!width) return null;
  return (
    <div
      className={cn(
        "w-full flex items-center justify-start gap-2 text-foreground",
        props.className
      )}
    >
      {SOCIALS.map((social, index) => (
        <Link key={index} className="font-condensed text-xs" href={social.href}>
          {width >= ScreenSize.MOBILE ? social.label : social.labelSm}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

"use client";
import React, { useState, useEffect } from "react";
import OrbitingCircles from "@/components/ui/orbiting-circle";
import { skillsData } from "@/lib/constants/data";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { motion } from "framer-motion";
export function SkillCircle() {
  const windowSize = useWindowSize();
  const [isClient, setisClient] = useState(false);
  const [circleConfigs, setCircleConfigs] = useState(
    getCircleConfigs(isClient ? window.innerWidth : 0)
  );

  useEffect(() => {
    if (window) {
      setisClient(true);
    }
    const circleConfigs = getCircleConfigs(windowSize?.width!);
    setCircleConfigs(circleConfigs);
  }, [windowSize]);

  function getCircleConfigs(width: number | undefined) {
    if (!width) return;
    if (width < 640) {
      return {
        innerCircle: { radius: 45, size: 50, duration: 20, reverse: false },
        outerCircle: { radius: 100, size: 50, duration: 40, reverse: true },
        outmostCircle: { radius: 160, size: 50, duration: 60, reverse: false },
      };
    } else if (width < 1024) {
      return {
        innerCircle: { radius: 60, size: 75, duration: 20, reverse: false },
        outerCircle: { radius: 140, size: 75, duration: 40, reverse: true },
        outmostCircle: { radius: 225, size: 75, duration: 60, reverse: false },
      };
    } else {
      return {
        innerCircle: { radius: 80, size: 100, duration: 20, reverse: false },
        outerCircle: { radius: 190, size: 100, duration: 40, reverse: true },
        outmostCircle: { radius: 300, size: 100, duration: 60, reverse: false },
      };
    }
  }

  return (
    <motion.div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg" 
      
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-orange to-gray-300 bg-clip-text text-center lg:text-8xl text-[50px] font-semibold leading-none text-transparent dark:from-white dark:to-orange">
        Skills
      </span>

      {skillsData.map(({ name, skills }) => {
        const config = (circleConfigs && circleConfigs[name]) || undefined;
        if (!config) return null;
        return skills.map((skill, index) => (
          <OrbitingCircles
            key={skill.skillName}
            className={`!w-[${config.size}px] !h-[${config.size}px] border-none bg-transparent`}
            duration={config.duration}
            delay={(index * config.duration) / skills.length}
            radius={config.radius}
            reverse={config.reverse}
          >
            {skill.skillIcon}
          </OrbitingCircles>
        ));
      })}
    </motion.div>
  );
}

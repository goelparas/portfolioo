import OrbitingCircles from "@/components/ui/orbiting-circle";
import { skillsData } from "@/lib/constants/data";

export function SkillCircle() {
  // Define circle configurations based on the skill circle levels
  const circleConfigs = {
    innerCircle: { radius: 80, size: 100, duration: 20, reverse: false },
    outerCircle: { radius: 190, size: 100, duration: 40, reverse: true },
    outmostCircle: { radius: 300, size: 100, duration: 60, reverse: false },
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-orange to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-orange">
        Skills
      </span>

      {skillsData.map(({ name, skills }) => {
        const config = circleConfigs[name];
        return skills.map((skill, index) => (
          <OrbitingCircles
            key={skill.skillName}
            className={`w-[${config.size}px] h-[${config.size}px] border-none bg-transparent`}
            duration={config.duration}
            delay={(index * config.duration) / skills.length}
            radius={config.radius}
            reverse={config.reverse}
          >
            {skill.skillIcon}
          </OrbitingCircles>
        ));
      })}
    </div>
  );
}

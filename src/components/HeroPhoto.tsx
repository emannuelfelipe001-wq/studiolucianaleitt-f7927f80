import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import type { RefObject } from "react";
import { clinic } from "@/config/clinic";

export function HeroPhoto({ target }: { target: RefObject<HTMLElement | null> }) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 300, damping: 45, mass: 0.3 });
  const rotateX = useTransform(progress, [0, 0.55], [10, 0]);
  const rotateY = useTransform(progress, [0, 0.55], [-16, 0]);
  const scale = useTransform(progress, [0, 0.55], [0.94, 1]);
  const shadowOpacity = useTransform(progress, [0, 0.55], [0.23, 0.04]);
  const shadowDistance = useTransform(progress, [0, 0.55], [24, 2]);

  return (
    <div className="hero-photo-stage absolute inset-0 -z-20 md:left-auto md:w-[60%]">
      <motion.div
        className="hero-photo-surface h-full w-full"
        style={{
          "--hero-rotate-x": reducedMotion ? 0 : rotateX,
          "--hero-rotate-y": reducedMotion ? 0 : rotateY,
          "--hero-scale": reducedMotion ? 1 : scale,
          "--hero-shadow-opacity": reducedMotion ? 0 : shadowOpacity,
          "--hero-shadow-distance": reducedMotion ? 0 : shadowDistance,
        }}
      >
        <img
          src={clinic.images.hero}
          alt="Luciana Leitte, fundadora do Studio Luciana Leitte"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="hero-photo h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
}
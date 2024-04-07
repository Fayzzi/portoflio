import React, { useRef } from "react";
import moutains from "./../../assets/mountains.png";
import stars from "./../../assets/stars.png";
import sun from "./../../assets/sun.png";
import planets from "./../../assets/planets.png";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textStars = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
      className="w-full z-[50] !overflow-hidden min-h-screen relative bg-green-200"
    >
      <motion.div
        className="bg-cover z-[2] absolute bg-bottom w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url(${moutains})`,
        }}
      />
      <motion.div
        className="bg-cover z-[1] absolute bg-bottom w-full h-full bg-no-repeat"
        style={{
          x: ybg,
          backgroundImage: `url(${stars})`,
        }}
      />
      <motion.div
        className="bg-cover z-[1] absolute bg-bottom w-full h-full bg-no-repeat"
        style={{
          y: textStars,
          backgroundImage: `url(${type === "services" ? sun : planets})`,
        }}
      />
      <motion.h1
        style={{
          y: textStars,
        }}
        className="text-[60px] w-full h-[50vh] flex flex-col items-center justify-end font-bold"
      >
        {type === "services" ? " What I Do!!" : " What I Did!!"}
      </motion.h1>
    </div>
  );
}

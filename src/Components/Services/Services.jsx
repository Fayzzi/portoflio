import React, { useEffect, useRef } from "react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";
export default function Services() {
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
  });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return (
    <motion.div
      style={{
        background: "linear-gradient(180deg,#0c0c1d,#111132)",
      }}
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          x: -550,
          y: 200,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
        },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
      className="w-full min-h-screen items-center !flex !flex-col justify-between overflow-hidden"
    >
      {/*Header text */}
      <motion.p
        variants={{
          hidden: {
            opacity: 0,
            x: -550,
            y: 200,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
        className="self-end text-sm pt-6 font-[200] flex items-center text-[20px]"
      >
        I focus on helping your brand grow
        <br /> and move forward
        <div className="md:w-[400px] w-[200px] border border-[gray]" />
      </motion.p>
      {/*Header text */}
      {/*Middle body */}

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -550,
            y: 200,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-2">
          <img
            className="w-[130px] object-cover rounded-full h-10"
            src={"/src/assets/people.webp"}
            alt=""
          />
          <span className="text-[40px]">
            <motion.b
              whileHover={{ color: "orange" }}
              className=" transition duration-200 cursor-pointer"
            >
              Unique{" "}
            </motion.b>
            Ideas
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[40px]">
            <motion.b
              whileHover={{ color: "orange" }}
              className=" transition duration-200 cursor-pointer"
            >
              For Your{" "}
            </motion.b>
            Bussiness
          </span>
          <button className="w-[120px] h-[45px] rounded-full bg-yellow-500 text-white">
            What I Do?
          </button>
        </div>
      </motion.div>
      {/*Middle body */}
      {/*Boxes */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -550,
            y: 200,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
        className="flex  w-fit p-2"
      >
        <div className="flex flex-col h-[50vh] w-10/12 mx-auto  items-center ">
          <span className="text-[23px] font-bold mt-2">Who am I</span>
          <p className="p-2 mt-4">
            As a MERN stack developer with two years of rich experience, I
            orchestrate digital symphonies through lines of code, weaving
            together the intricate elements of MongoDB, Express.js, React.js,
            and Node.js into seamless and captivating web applications. Every
            keystroke is a brushstroke, crafting user experiences that transcend
            mere functionality to evoke awe and delight. With a keen eye for
            design and a passion for innovation, I sculpt dynamic front-end
            interfaces that dance gracefully atop robust back-end structures. I
            am a conductor of technology, harmonizing the complexities of
            databases, servers, and client-side interactions into a melodious
            ensemble of digital craftsmanship. Each project is a canvas where I
            paint with pixels, breathing life into ideas and bringing visions to
            fruition. With each challenge, I embrace the opportunity to learn
            and grow, constantly refining my skills to stay at the forefront of
            this ever-evolving landscape. Through my work, I endeavor not only
            to solve problems but to inspire, leaving a trail of elegant
            solutions and unforgettable experiences in my wake.
          </p>
        </div>{" "}
      </motion.div>
    </motion.div>
  );
}

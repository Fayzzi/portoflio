import React from "react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="w-full relative bg-gradient-to-b overflow-hidden from-[#0c0c1d] to-[#111132]">
      <div className="h-[calc(100vh-100px)]  w-11/12 mx-auto  relative  ">
        <motion.div
          initial={{
            x: -500,
            y: -60, // Set initial y to a higher value (above the screen)
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            y: 0, // Animate y to 0 to bring it down
            transition: { duration: 1 },
          }}
          className="flex flex-col  z-[2] gap-2 w-[50vw] h-full items-start justify-center"
        >
          <motion.h2
            initial={{
              x: -100,
              y: -60, // Set initial y to a higher value (above the screen)
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              y: 0, // Animate y to 0 to bring it down
              transition: { duration: 1 },
            }}
            className="text-[30px]  text-[rebeccapurple] tracking-widest"
          >
            Faizan Ali
          </motion.h2>
          <motion.h1
            initial={{
              x: -500,
              y: -60, // Set initial y to a higher value (above the screen)
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              y: 0, // Animate y to 0 to bring it down
              transition: { duration: 1 },
            }}
            className="text-[70px]"
          >
            Web developer and UI designer
          </motion.h1>
          <motion.div className="flex  gap-[20px]">
            <motion.button
              initial={{
                x: -500,
                y: -60, // Set initial y to a higher value (above the screen)
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                y: 0, // Animate y to 0 to bring it down
                transition: { duration: 1 },
              }}
              className="p-[20px] z-[2] border border-white hover:bg-white transition duration-500 hover:text-black rounded"
            >
              See the Latest Works
            </motion.button>
            <motion.button
              initial={{
                x: -500,
                y: -60, // Set initial y to a higher value (above the screen)
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                y: 0, // Animate y to 0 to bring it down
                transition: { duration: 1 },
              }}
              className="p-[20px] z-[2] border border-white hover:bg-white transition duration-500 hover:text-black rounded"
            >
              Contact me
            </motion.button>
          </motion.div>
          <motion.img
            animate={{
              opacity: 0,
              y: -10,
              transition: {
                duration: 1,
                repeat: Infinity,
              },
            }}
            className="w-10 m-4"
            src={"/src/assets/scroll.png"}
            alt=""
          />
        </motion.div>
        {/*Slidding text conatiner */}
        <motion.div
          initial={{
            x: 0,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            x: "-220vw",
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="absolute font-bold z-[1] text-[#f5f4f452] bottom-[-120px] text-nowrap text-[50vh]"
        >
          Expertise in MERN and FlutterFire
        </motion.div>
        {/*Slidding text conatiner */}
      </div>
    </div>
  );
}

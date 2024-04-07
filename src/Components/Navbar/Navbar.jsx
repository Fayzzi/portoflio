import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
export default function Navbar() {
  return (
    <div className=" h-[100px] ">
      {/*Sidebar */}

      <div className=" max-w-[1336px] h-[100%] m-auto flex items-center justify-between">
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          className="font-bold "
        >
          Faizan Ali
        </motion.span>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          className="flex gap-[20px]"
        >
          <img className="h-6 w-6" src={"/src/assets/facebook.png"} alt="" />
          <img className="h-6 w-6" src={"/src/assets/dribbble.png"} alt="" />
          <img className="h-6 w-6" src={"/src/assets/instagram.png"} alt="" />
          <img className="h-6 w-6" src={"/src/assets/youtube.png"} alt="" />
        </motion.div>
      </div>
    </div>
  );
}

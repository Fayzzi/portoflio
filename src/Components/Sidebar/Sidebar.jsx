import React, { useState } from "react";
import { motion } from "framer-motion";
export default function Sidebar() {
  const [open, setOPen] = useState(false);

  return (
    <motion.div className=" " animate={open ? "open" : "closed"}>
      <motion.div
        variants={{
          ope: {},
          closed: {
            clipPath: "circle",
          },
        }}
      >
        Links
      </motion.div>
      <button onClick={(e) => setOPen(true)}>Button</button>
    </motion.div>
  );
}

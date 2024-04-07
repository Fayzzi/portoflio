import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const [message, setmessage] = useState("");

  const ref = useRef();
  const formref = useRef();
  //sending mails
  const sendMails = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dol1z7e", "template_r0wurjk", formref.current, {
        publicKey: "Ab_N4GWIQS2ZJNqQP",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setmessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const controls = useAnimation();

  const inView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
      controls.start("full");
    }
  }, [inView, controls]);

  const variants = {
    initial: {
      opacity: 0,
      y: 500,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={controls}
      className="w-full  h-screen"
    >
      <div className="w-11/12 mx-auto md:items-center md:justify-center flex flex-col md:grid md:grid-cols-2 h-full">
        <div>
          <h1 className="md:text-[60px] text-[30px] text-white font-bold">
            Let's Work<br></br> together
          </h1>
          <div className="flex flex-col md:gap-2 md:my-6 mt-2">
            <h1 className="font-semibold">Mail:</h1>
            <h2>faizancuiwah@gmail.com</h2>
          </div>
          <div className="flex flex-col md:gap-2 md:my-6 mt-2">
            <h1 className="font-semibold">Address:</h1>
            <h2>House 3 Street 9 shadman Town wah cantt,Taxila Pakistan</h2>
          </div>
          <div className="flex flex-col md:gap-2 md:my-6 mt-2 mb-2">
            <h1 className="font-semibold">Phone:</h1>
            <h2>+923444624139</h2>
            <h2>+923007059135</h2>
          </div>
        </div>
        <motion.div className="relative">
          <motion.div
            className="z-[-2]"
            initial={
              inView && {
                opacity: 1,
              }
            }
            animate={
              inView && {
                opacity: 0,
              }
            }
            transition={{
              delay: 3,
              duration: 1,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="stroke-[orange] z-[-2] h-full top-0 right-0 left-0 w-full mx-auto absolute"
            >
              <motion.path
                variants={{
                  zero: {
                    pathLength: -1,
                  },
                  full: {
                    pathLength: 1,
                  },
                }}
                initial="zero"
                animate={controls}
                transition={{
                  duration: 3,
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />{" "}
            </svg>
          </motion.div>
          <motion.form
            onSubmit={sendMails}
            ref={formref}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 4,
              duration: 1,
            }}
            aria-required
            className="flex flex-col z-[2]  gap-2"
            action=""
          >
            <input
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-[90%] mx-auto z-[2] p-2 rounded border bg-transparent placeholder:text-gray-600 border-white "
              type="text"
            />
            <input
              required
              value={Email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-[90%] mx-auto z-[2] p-2 rounded border bg-transparent placeholder:text-gray-600 border-white "
              type="email"
            />
            <textarea
              required
              name="message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              className="w-[90%] mx-auto z-[2] p-2 resize-none rounded border bg-transparent placeholder:text-gray-600 border-white "
              placeholder="Message"
              rows="10"
            />
            <input
              onSubmit={sendMails}
              type="submit"
              value={"Send"}
              className="w-[90%] cursor-pointer z-[2] bg-[orange] text-black mx-auto p-2 rounded border hover:bg-yellow-600 transition duration-500 placeholder:text-gray-600 border-white "
            />
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
}

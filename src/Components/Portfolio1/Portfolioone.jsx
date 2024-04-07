import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
export default function Portfolioone() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"], //1=end 0=start
  });
  const scaleX = useSpring(scrollYProgress);
  const items = [
    {
      id: 1,
      title: "React Ecommerce",
      description:
        "Welcome to our cutting-edge ecommerce platform, where convenience meets quality. Dive into a virtual marketplace filled with an extensive array of products, ranging from trendy fashion pieces to state-of-the-art gadgets. Our website boasts a seamless browsing experience, intuitive navigation, and secure payment gateways, ensuring a hassle-free shopping journey from start to finish. With a commitment to customer satisfaction, we prioritize authenticity and reliability, offering a curated selection of premium items. Join us in exploring a world of endless possibilities and elevate your shopping experience today.",
      image:
        "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
    },
    {
      id: 2,
      title: "React Chatt website",
      description:
        "Welcome to our chat website powered by Socket.io, where real-time communication meets seamless connectivity. Engage in lively conversations with friends, colleagues, or strangers across the globe with our intuitive platform. Experience instant message delivery and receive updates as soon as they're sent, creating a dynamic and immersive chatting environment. Our website ensures smooth interactions and effortless communication, making it easy to stay connected with others from anywhere, at any time. Join our vibrant community and start chatting today!",
      image:
        "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/livechatsoftware66.jpg",
    },
    {
      id: 3,
      title: "React Music website",
      description:
        "Welcome to our music website, your ultimate destination for all things music-related! Immerse yourself in a world of melodies, beats, and rhythms as you explore our vast collection of songs, albums, and playlists. Whether you're a casual listener or a die-hard music enthusiast, our platform offers something for everyone, spanning across genres and eras. Discover new artists, rediscover old favorites, and stay updated with the latest trends in the music industry. With features like personalized recommendations, curated playlists, and seamless streaming, we strive to provide you with an unparalleled music listening experience.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4f032795410765.5e96eabd77caa.jpg",
    },
    {
      id: 4,
      title: "AirBnb Clone",
      description:
        "Welcome to our hotel reservation website, your gateway to hassle-free travel planning and unforgettable accommodations! Explore a diverse selection of hotels, resorts, and vacation rentals in destinations around the world. Whether you're seeking a luxurious retreat, a budget-friendly stay, or a cozy bed and breakfast, we have options to suit every taste and budget. Our user-friendly interface allows you to easily search, compare, and book accommodations with just a few clicks. From sleek city hotels to serene beachfront resorts, our platform offers a comprehensive range of options to cater to your travel preferences. With secure booking processes, real-time availability updates, and dedicated customer support, we ensure a seamless and enjoyable booking experience from start to finish. Reserve your dream stay with us today and embark on your next adventure with confidence!",
      image:
        "https://themeforest.img.customer.envatousercontent.com/files/470346856/motela-previews/02-theme-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=2d985a639e9b8b49936b8ffb10f25d05",
    },
  ];

  return (
    <div ref={ref} className="">
      <div className="text-center z-[2] sticky  top-24">
        <span className="text-[25px] p-6 text-yellow-500">
          Featured Projects
        </span>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}
          style={{
            scaleX,
          }}
          className="z-[2] border-yellow-500 mb-4 border-[6px] w-[screen]"
        />
      </div>
      {items.map((m, i) => (
        <Single key={i} item={m} />
      ))}
    </div>
  );
}
const Single = ({ item }) => {
  const tref = useRef();
  const { scrollYProgress: tScroll } = useScroll({
    target: tref,
    // offset: ["start start", " end start"],
  });
  const tsCrollY = useTransform(tScroll, [0, 1], [-200, 200]);
  return (
    <motion.section className="snap-center overflow-hidden  z-[-50] w-full h-screen">
      <motion.div className="flex items-center  justify-center  mt-7 p-3">
        <motion.img
          ref={tref}
          className="w-[40vw] z-[-1] object-cover h-[40vh]"
          src={item.image}
          alt=""
          style={{
            y: tsCrollY,
          }}
          initial={{ opacity: 0, y: 100 }} // Initial properties
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 1 },
          }} // Animated properties with delay
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Initial properties
          animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 1 } }} // Animated properties with delay
          className="flex flex-col  items-center justify-center h-screen gap-4"
        >
          <h1 className=" text-[30px] pl-6 font-bold">{item.title}</h1>
          <p className="max-w-[40vw]  p-2">{item.description.slice(0, 200)}</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

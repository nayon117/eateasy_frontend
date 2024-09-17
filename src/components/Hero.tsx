import { motion } from "framer-motion";
import { FastForward } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      className="relative h-screen flex items-center justify-center overflow-hidden "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 z-0 px-5 sm:px-10 py-10">
        <div className="relative w-full h-full rounded-md overflow-hidden">
          <video
            className="object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://assets.mixkit.co/videos/29050/29050-720.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4"
          variants={textVariants}
        >
          Welcome to EatEasy
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl mb-8"
          variants={textVariants}
        >
          Delicious food, delivered with ease
        </motion.p>
        <motion.button
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 ease-in-out"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Explore Now
          <FastForward className="ml-2" />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;

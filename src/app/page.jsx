"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row  sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image
            src="/hero.png"
            alt="author-img"
            fill
            className="object-contain"
          />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Scalable Digital Products with Code, Design & Intelligence.
          </h1>
          {/* Desc */}
          <p className="md:text-xl">
            I design and build modern web applications that combine clean UI,
            strong engineering, and intelligent automation. From
            high-performance frontends to AI-powered workflows, my work focuses
            on delivering smooth, reliable, and meaningful digital experiences.
          </p>
          
          <div className="w-full flex gap-4">
            {/* Buttons */}
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Explore My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Let’s Connect
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          {/* MOBILE IMAGE */}
          <Image
            src="/hero.png"
            alt="author-img"
            width={380}
            height={380}
            className="object-contain sm:hidden mt-6"
            priority
          />

          {/* TABLET + DESKTOP IMAGE */}
          <div className="hidden sm:flex h-[450px] md:h-[550px] lg:h-full w-full relative">
            <Image
              src="/hero.png"
              alt="author-img"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>

        {/* Text Container */}
        <div className="h-auto lg:h-full lg:w-1/2 flex flex-col gap-6 items-start justify-center py-6">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Crafting Scalable Digital Products with Code, Design &amp;
            Intelligence.
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl">
            I design and build modern web applications that combine clean UI,
            strong engineering, and intelligent automation. From
            high-performance frontends to AI-powered workflows, my work focuses
            on delivering smooth, reliable, and meaningful digital experiences.
          </p>

          {/* Buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/portfolio">
              <button className="w-full sm:w-auto p-4 rounded-lg ring-1 ring-black bg-black text-white text-center">
                Explore My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full sm:w-auto p-4 rounded-lg ring-1 ring-black bg-black text-white text-center">
                Let’s Connect
              </button>
            </Link>
            <a
              href="/Ankit_FullStack_9years_Resume.docx"
              download
              className="p-4 rounded-lg ring-1 ring-black bg-white text-black text-center hover:bg-black hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  const companies = [
    "HCLTech",
    "TCS",
    "BVP",
    "Deutsche Bank",
    "SCB",
    "British Telecom",
  ];

  const stats = [
    {
      value: "9+",
      label: "Years Experience",
    },
    {
      value: "10+",
      label: "Enterprise Projects",
    },
    {
      value: "AI",
      label: "Workflow Systems",
    },
    /* {
      value: "Global",
      label: "Client Domains",
    }, */
  ];

  return (
    <motion.div
      className="min-h-screen overflow-hidden relative"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* BACKGROUND GRADIENTS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
            w-[420px]
            h-[420px]
            bg-pink-200/30
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            w-[420px]
            h-[420px]
            bg-blue-200/20
            rounded-full
            blur-3xl
          "
        />
      </div>

      <div
        className="
          min-h-screen
          flex flex-col lg:flex-row
          items-center
          justify-between
          gap-16 lg:gap-24
          px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32
          py-10 lg:py-16
        "
      >
        {/* LEFT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="
            w-full lg:w-1/2
            flex justify-center items-center
            relative
          "
        >
          {/* IMAGE GLOW */}
          <div
            className="
              absolute
              w-[320px]
              h-[320px]
              sm:w-[450px]
              sm:h-[450px]
              bg-gradient-to-br
              from-pink-300/40
              to-blue-200/30
              rounded-full
              blur-3xl
            "
          />

          {/* IMAGE CONTAINER */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              w-full
              flex justify-center
            "
          >
            <Image
              src="/hero.png"
              alt="Ankit Kumar"
              width={620}
              height={620}
              priority
              className="
                object-contain
                drop-shadow-2xl
                scale-105
                hover:scale-110
                transition-all duration-700
              "
            />
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="
            w-full lg:w-1/2
            flex flex-col
            gap-8
            items-start
            justify-center
          "
        >
          {/* LABEL */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="
              px-5 py-3
              rounded-full
              bg-black
              text-white
              text-sm
              font-medium
              tracking-wide
              shadow-xl
            "
          >
            Enterprise AI Engineering • Full Stack Development
          </motion.div>

          {/* MAIN HEADING */}
          <div className="max-w-[720px]">
            <h1
              className="
                text-4xl
                sm:text-3xl
                md:text-4xl
                xl:text-5xl
                font-black
                leading-[0.92]
                tracking-tight
                text-black
              "
            >
              Building Intelligent Enterprise Products & AI Systems
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              text-lg
              sm:text-xl
              text-gray-600
              leading-9
              max-w-2xl
            "
          >
            Specialized in enterprise AI platforms, workflow automation,
            intelligent document systems, and scalable full stack applications
            across banking, healthcare, telecom, and venture capital domains. I
            design modern digital products that combine clean user experience,
            high-performance engineering, and intelligent automation.
          </p>

          {/* DOMAIN LABELS */}
          <div className="flex flex-wrap gap-3">
            {[
              "BANKING",
              "HEALTHCARE",
              "TELECOM",
              "VENTURE CAPITAL",
              "AI AUTOMATION",
            ].map((domain, index) => (
              <div
                key={index}
                className="
                  text-xs
                  tracking-[0.2rem]
                  uppercase
                  text-gray-500
                  font-semibold
                "
              >
                {domain}
              </div>
            ))}
          </div>

          {/* TRUST CHIPS */}
          <div className="flex flex-wrap gap-4 pt-2">
            {companies.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                className="
                  px-5 py-3
                  rounded-2xl
                  bg-white/70
                  backdrop-blur-xl
                  border border-white/40
                  shadow-lg
                  text-sm
                  font-medium
                  hover:bg-black
                  hover:text-white
                  transition-all duration-300
                  cursor-default
                "
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* STATS */}
          {/* STATS */}
          <div
            className="
    grid
    grid-cols-2
    xl:grid-cols-4
    gap-5
    w-full
    pt-4
  "
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
        min-w-0
        bg-white/60
        backdrop-blur-xl
        border border-white/40
        rounded-3xl
        p-6
        shadow-xl
        transition-all duration-300
      "
              >
                <h3 className="text-4xl font-black text-black">{item.value}</h3>

                <p
                  className="
          text-sm
          text-gray-600
          mt-2
          leading-6
          break-words
        "
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div
            className="
              flex flex-col sm:flex-row
              gap-5
              pt-6
              w-full sm:w-auto
            "
          >
            <Link href="/portfolio">
              <button
                className="
                  w-full sm:w-auto
                  px-9 py-5
                  rounded-2xl
                  bg-black
                  text-white
                  font-semibold
                  shadow-2xl
                  hover:scale-105
                  hover:bg-gray-900
                  transition-all duration-300
                "
              >
                Explore My Work
              </button>
            </Link>

            <Link href="/contact">
              <button
                className="
                  w-full sm:w-auto
                  px-9 py-5
                  rounded-2xl
                  border border-black
                  bg-white/70
                  backdrop-blur-xl
                  text-black
                  font-semibold
                  hover:bg-black
                  hover:text-white
                  hover:scale-105
                  transition-all duration-300
                  shadow-lg
                "
              >
                Let’s Connect
              </button>
            </Link>

            <a
              href="/Ankit_Kumar_Freelance_Resume.pdf"
              download
              className="
                w-full sm:w-auto
                px-9 py-5
                rounded-2xl
                border border-black
                bg-transparent
                text-black
                font-semibold
                text-center
                hover:bg-black
                hover:text-white
                hover:scale-105
                transition-all duration-300
              "
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Homepage;

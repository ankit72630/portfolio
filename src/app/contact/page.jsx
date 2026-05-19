"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Let’s Build Intelligent Products Together";

  return (
    <motion.div
      className="min-h-screen w-full overflow-x-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="
          min-h-[calc(100vh-6rem)]
          w-full
          px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32
          py-10 lg:py-16
        "
      >
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            gap-14 lg:gap-24
            items-center
            max-w-7xl mx-auto
          "
        >
          {/* LEFT SECTION */}
          <div className="flex flex-col gap-10">
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                w-fit
                flex items-center gap-2
                px-5 py-3
                rounded-full
                bg-black text-white
                text-sm font-medium
                shadow-lg
              "
            >
              ✨ Available for Freelance & Consulting
            </motion.div>

            {/* HEADING */}
            <div className="flex flex-col gap-6">
              <h1
                className="
                  text-5xl sm:text-6xl xl:text-7xl
                  font-extrabold
                  leading-[0.95]
                  tracking-tight
                  text-black
                "
              >
                {text}
              </h1>

              <p
                className="
                  text-lg sm:text-xl
                  text-gray-600
                  leading-9
                  max-w-2xl
                "
              >
                I help startups and enterprises build scalable AI-powered
                products, enterprise dashboards, workflow automation systems,
                and high-performance digital platforms using modern full stack
                technologies.
              </p>
            </div>

            {/* SERVICES */}
            <div className="flex flex-wrap gap-4">
              {[
                "Full Stack AI Engineering",
                "Enterprise Frontend Systems",
                "Workflow Automation",
                "AI Dashboards",
                "Consulting",
                "Product Engineering",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    px-5 py-3
                    rounded-2xl
                    bg-white/70
                    backdrop-blur-xl
                    border border-white/40
                    shadow-md
                    text-sm font-medium
                    hover:-translate-y-1
                    hover:shadow-xl
                    transition-all duration-300
                  "
                >
                  {item}
                </div>
              ))}
            </div>

            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-5">
              {/* EMAIL */}
              <div
                className="
                  bg-white/60
                  backdrop-blur-xl
                  border border-white/40
                  rounded-3xl
                  p-6
                  shadow-xl
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-black
                      flex items-center justify-center
                    "
                  >
                    ✉️
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Email</p>

                    <p className="font-semibold text-black break-all">
                      ak1603292@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* LOCATION */}
              <div
                className="
                  bg-white/60
                  backdrop-blur-xl
                  border border-white/40
                  rounded-3xl
                  p-6
                  shadow-xl
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-black
                      flex items-center justify-center
                    "
                  >
                    📍
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Location</p>

                    <p className="font-semibold text-black">
                      India • Remote Worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE */}
              <div
                className="
                  bg-white/60
                  backdrop-blur-xl
                  border border-white/40
                  rounded-3xl
                  p-6
                  shadow-xl
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-black
                      flex items-center justify-center
                    "
                  >
                    💼
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Experience</p>

                    <p className="font-semibold text-black">9+ Years</p>
                  </div>
                </div>
              </div>

              {/* RESPONSE */}
              <div
                className="
                  bg-white/60
                  backdrop-blur-xl
                  border border-white/40
                  rounded-3xl
                  p-6
                  shadow-xl
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-black
                      flex items-center justify-center
                    "
                  >
                    ⚡
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Response Time
                    </p>

                    <p className="font-semibold text-black">
                      Usually within 24 hrs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>

          {/* RIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="
              relative
              bg-white/60
              backdrop-blur-2xl
              border border-white/40
              rounded-[40px]
              shadow-2xl
              p-8 sm:p-10 lg:p-14
            "
          >
            {/* GLOW */}
            <div
              className="
                absolute
                inset-0
                rounded-[40px]
                bg-gradient-to-br
                from-white/20
                to-transparent
                pointer-events-none
              "
            />

            {/* FORM */}
            <form className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-sm uppercase tracking-[0.3rem] text-gray-500">
                  Start A Conversation
                </span>

                <h2 className="text-4xl font-bold leading-tight text-black">
                  Let’s discuss your next AI product or enterprise platform.
                </h2>
              </div>

              {/* NAME */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-gray-500">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="
                    bg-white/70
                    border border-gray-200
                    rounded-2xl
                    px-5 py-4
                    outline-none
                    focus:ring-2 focus:ring-black
                    transition-all
                  "
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-gray-500">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="
                    bg-white/70
                    border border-gray-200
                    rounded-2xl
                    px-5 py-4
                    outline-none
                    focus:ring-2 focus:ring-black
                    transition-all
                  "
                />
              </div>

              {/* PROJECT TYPE */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-gray-500">
                  Project Type
                </label>

                <select
                  className="
                    bg-white/70
                    border border-gray-200
                    rounded-2xl
                    px-5 py-4
                    outline-none
                    focus:ring-2 focus:ring-black
                    transition-all
                  "
                >
                  <option>AI Product Development</option>
                  <option>Enterprise Frontend</option>
                  <option>Workflow Automation</option>
                  <option>Consulting</option>
                  <option>Freelance Collaboration</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-gray-500">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project, requirements, goals, or collaboration opportunity..."
                  className="
                    bg-white/70
                    border border-gray-200
                    rounded-2xl
                    px-5 py-4
                    outline-none
                    resize-none
                    focus:ring-2 focus:ring-black
                    transition-all
                  "
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  group
                  bg-black
                  text-white
                  rounded-2xl
                  py-5
                  font-semibold
                  text-lg
                  flex items-center justify-center gap-3
                  hover:bg-gray-900
                  hover:scale-[1.02]
                  transition-all duration-300
                  shadow-xl
                "
              >
                Start a Conversation

                <span className="text-xl group-hover:translate-x-1 transition-all">
                  →
                </span>
              </button>

              {/* SUCCESS */}
              {success && (
                <div
                  className="
                    bg-green-100
                    text-green-700
                    border border-green-200
                    rounded-2xl
                    px-5 py-4
                    font-medium
                  "
                >
                  Your message has been sent successfully.
                </div>
              )}

              {/* ERROR */}
              {error && (
                <div
                  className="
                    bg-red-100
                    text-red-700
                    border border-red-200
                    rounded-2xl
                    px-5 py-4
                    font-medium
                  "
                >
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
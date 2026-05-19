"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {
    margin: "-100px",
  });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {
    margin: "-100px",
  });

  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux",
    "Tailwind CSS",
    "FastAPI",
    "Node.js",
    "LangChain",
    "LangGraph",
    "OpenAI APIs",
    "Claude AI APIs",
    "PostgreSQL",
    "JWT / RBAC",
    "Databricks",
    "Docker",
    "Azure",
    "CI/CD",
    "REST APIs",
    "MUI Pro",
    "Enterprise Dashboards",
    "AI Workflows",
    "RAG Pipelines",
    "System Design",
  ];

  return (
    <motion.div
      className="h-full overflow-x-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* MAIN CONTAINER */}
      <div
        className="h-[calc(100vh-6rem)] overflow-y-scroll lg:flex"
        ref={containerRef}
      >
        {/* LEFT CONTENT */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col gap-24 lg:w-2/3 xl:w-1/2">
          {/* ABOUT SECTION */}
          <div className="flex flex-col gap-12 justify-center">
            {/* IMAGE */}
            <Image
              src="/profile-pic.jpg"
              alt="Ankit Kumar"
              width={140}
              height={140}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
            />

            {/* HEADING */}
            <div className="flex flex-col gap-4">
              <span className="uppercase tracking-[0.3rem] text-sm text-gray-500">
                Technical Lead • Full Stack AI Engineer
              </span>

              <h1 className="font-bold text-4xl md:text-5xl leading-tight">
                Building Enterprise AI Platforms & Scalable Digital Products
              </h1>
            </div>

            {/* DESCRIPTION */}
            <div className="flex flex-col gap-6 text-lg leading-8 text-gray-700">
              <p>
                I'm <b>Ankit Kumar</b>, a{" "}
                <b>Technical Lead & Full Stack AI Engineer</b> with{" "}
                <b>9+ years of experience</b> building enterprise-grade
                platforms, scalable frontend architectures, and AI-powered
                workflow systems across{" "}
                <b>
                  Banking, Venture Capital, Telecom, Engineering, and Healthcare
                </b>{" "}
                domains.
              </p>

              <p>
                I specialize in combining{" "}
                <b>enterprise frontend engineering with modern AI systems</b>,
                building intelligent applications using{" "}
                <b>
                  React, Next.js, FastAPI, LangChain, OpenAI APIs, Claude AI,
                  PostgreSQL, and scalable backend architectures.
                </b>
              </p>

              <p>
                Over the years, I’ve contributed to enterprise systems for
                organizations including{" "}
                <b>
                  Standard Chartered Bank, Deutsche Bank, British Telecom,
                  McDermott, and Bessemer Venture Partners (BVP)
                </b>
                , delivering secure dashboards, workflow automation platforms,
                AI-powered applications, and high-performance digital products
                used globally.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
                <h2 className="text-3xl font-bold">9+</h2>
                <p className="text-sm text-gray-500 mt-2">
                  Years Experience
                </p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
                <h2 className="text-3xl font-bold">40+</h2>
                <p className="text-sm text-gray-500 mt-2">
                  Countries Deployed
                </p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
                <h2 className="text-3xl font-bold">60%</h2>
                <p className="text-sm text-gray-500 mt-2">
                  AI Automation
                </p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
                <h2 className="text-3xl font-bold">$20B+</h2>
                <p className="text-sm text-gray-500 mt-2">
                  BVP Client Scale
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/Ankit_Kumar_Resume.pdf"
                target="_blank"
                className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all"
              >
                Download Resume
              </a>

              <a
                href="/contact"
                className="px-6 py-3 border border-black rounded-xl hover:bg-black hover:text-white transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* QUOTE */}
            <span className="italic text-gray-500 text-lg">
              "I enjoy transforming complex enterprise workflows into scalable,
              intelligent, and user-friendly digital experiences."
            </span>

            {/* SCROLL ICON */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>

              <path
                d="M12 6V14"
                stroke="#000000"
                strokeWidth="1"
              ></path>

              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={skillRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-4xl"
            >
              Technical Expertise
            </motion.h1>

            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-xl px-4 py-2 text-sm font-medium cursor-pointer bg-black text-white hover:bg-white hover:text-black border border-black transition-all"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>

          {/* EXPERIENCE */}
          <div
            className="flex flex-col gap-16 justify-center pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-4xl"
            >
              Professional Experience
            </motion.h1>

            {/* FREELANCE */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="flex flex-col gap-8"
            >
              <div>
                <h2 className="text-3xl font-bold">
                  Freelance Experience
                </h2>

                <p className="text-gray-500 mt-2">
                  Independent Full Stack AI Engineering Projects
                </p>
              </div>

              {/* BVP */}
              <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">
                      Bessemer Venture Partners (BVP)
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Freelance Full Stack AI Engineer
                    </p>
                  </div>

                  <div className="text-sm font-semibold text-red-400">
                    Dec 2025 - May 2026
                  </div>
                </div>

                <p className="text-gray-700 leading-8">
                  Built an AI-powered Activity Reporting & Portfolio
                  Management platform for a leading Silicon Valley VC firm
                  managing $20B+ AUM. Developed enterprise workflows,
                  portfolio dashboards, AI KPI extraction systems, and
                  partner reporting modules using React, Node.js,
                  PostgreSQL, Databricks, and Claude AI APIs.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "Redux",
                    "MUI Pro",
                    "Node.js",
                    "Databricks",
                    "Claude AI",
                    "PostgreSQL",
                    "Okta Auth",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-black text-white px-4 py-2 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* HCL */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="flex flex-col gap-8"
            >
              <div>
                <h2 className="text-3xl font-bold">
                  HCL Technologies
                </h2>

                <p className="text-gray-500 mt-2">
                  Technical Lead • Feb 2022 - Present
                </p>
              </div>

              {/* IRP */}
              <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">
                      Intelligent Regulatory Platform (IRP)
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Frontend React Lead
                    </p>
                  </div>

                  <div className="text-sm font-semibold text-red-400">
                    Current Project
                  </div>
                </div>

                <p className="text-gray-700 leading-8">
                  Leading frontend development for a Life Sciences &
                  Healthcare regulatory platform. Building reusable
                  component libraries, scalable React architectures, and
                  enterprise regulatory workflow systems handling
                  large-scale document processing and reporting.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "Redux",
                    "MUI",
                    "Enterprise Dashboards",
                    "Workflow Systems",
                    "Reusable Components",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-black text-white px-4 py-2 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GENAI */}
              <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">
                      AI Claims Processing Platform
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Full Stack AI Engineer • GenAI POC
                    </p>
                  </div>

                  <div className="text-sm font-semibold text-red-400">
                    Mar 2025 - Sep 2025
                  </div>
                </div>

                <p className="text-gray-700 leading-8">
                  Built an AI-powered claims processing platform using
                  React, FastAPI, LangChain, OpenAI APIs, and PostgreSQL,
                  reducing manual verification effort by 60% and
                  processing time from 4 hours to 45 minutes through
                  intelligent workflow automation.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "FastAPI",
                    "LangChain",
                    "OpenAI APIs",
                    "React.js",
                    "JWT / RBAC",
                    "PostgreSQL",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-black text-white px-4 py-2 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* SCB */}
              <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">
                      Standard Chartered Bank (RTOB)
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Technical Lead
                    </p>
                  </div>

                  <div className="text-sm font-semibold text-red-400">
                    2022 - 2025
                  </div>
                </div>

                <p className="text-gray-700 leading-8">
                  Led frontend architecture for a global banking platform
                  deployed across 40+ countries. Built multilingual
                  enterprise dashboards, optimized application
                  performance, and developed reusable UI systems used
                  across multiple enterprise products.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "Redux",
                    "Performance Optimization",
                    "Enterprise Banking",
                    "Reusable UI",
                    "Multi-language",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-black text-white px-4 py-2 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* TCS */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="flex flex-col gap-8"
            >
              <div>
                <h2 className="text-3xl font-bold">
                  Tata Consultancy Services (TCS)
                </h2>

                <p className="text-gray-500 mt-2">
                  Software Developer • Jul 2016 - Feb 2022
                </p>
              </div>

              {/* DEUTSCHE */}
              <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">
                      Deutsche Bank
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Investment Banking Portal
                    </p>
                  </div>

                  <div className="text-sm font-semibold text-red-400">
                    2019 - 2022
                  </div>
                </div>

                <p className="text-gray-700 leading-8">
                  Built enterprise trading dashboards in React & Redux
                  handling large-scale financial data processing.
                  Improved rendering performance and optimized API
                  handling for investment banking workflows.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "Redux",
                    "Investment Banking",
                    "Performance Optimization",
                    "REST APIs",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-black text-white px-4 py-2 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BT */}
              <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">
                      British Telecom
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Customer Self-Service Portal
                    </p>
                  </div>

                  <div className="text-sm font-semibold text-red-400">
                    2017 - 2019
                  </div>
                </div>

                <p className="text-gray-700 leading-8">
                  Developed React/Redux customer self-service portal used
                  by millions of global users. Integrated Node.js APIs,
                  improved accessibility compliance, and optimized user
                  experience across multiple devices.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "Redux",
                    "Node.js",
                    "Accessibility",
                    "Responsive UI",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-black text-white px-4 py-2 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* MCDERMOTT */}
              <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">
                      McDermott
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Engineering Project Management Portal
                    </p>
                  </div>

                  <div className="text-sm font-semibold text-red-400">
                    2016 - 2017
                  </div>
                </div>

                <p className="text-gray-700 leading-8">
                  Built enterprise dashboards and engineering management
                  systems for global engineering teams across multiple
                  countries with focus on performance and usability.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "Enterprise Dashboards",
                    "Engineering Systems",
                    "Responsive Design",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-black text-white px-4 py-2 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
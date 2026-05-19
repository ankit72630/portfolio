"use client";

import React from "react";
import { motion } from "framer-motion";

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7h6m0 0v6m0-6L10 16m-7 4h4a2 2 0 002-2v-4"
    />
  </svg>
);

const portfolioSections = [
  {
    section: "Enterprise AI Platforms",
    description:
      "Production-grade AI systems, workflow automation platforms, and enterprise AI engineering projects.",
    projects: [
      {
        title:
          "BVP Activity Reporting & Portfolio Management Platform",
        subtitle:
          "Freelance Full Stack AI Engineer • Bessemer Venture Partners",
        description:
          "Built an enterprise AI-powered portfolio management and reporting platform for Bessemer Venture Partners (BVP), enabling venture teams to manage portfolio KPIs, financing rounds, activity reporting workflows, and AI-assisted insights through a unified React interface.",
        impact:
          "$20B+ VC operations workflow automation with AI-assisted KPI extraction.",
        tech: [
          "React.js",
          "Redux",
          "Node.js",
          "Databricks",
          "Claude AI",
          "PostgreSQL",
          "Okta",
          "MUI Pro",
        ],
        image: "/work/BVP.png",
      },

      {
        title: "AI-Powered Claims Automation Platform",
        subtitle:
          "Full Stack AI Engineer • HCL Technologies",
        description:
          "Designed and built an AI-powered claims processing system using React, FastAPI, LangChain, and OpenAI APIs to automate document parsing, fraud analysis, workflow orchestration, AI-based decisioning, and email automation.",
        impact:
          "Reduced claims processing time from 4 hours to 45 minutes through intelligent automation.",
        tech: [
          "React.js",
          "FastAPI",
          "LangChain",
          "OpenAI APIs",
          "PostgreSQL",
          "JWT / RBAC",
        ],
        image: "/work/claims-ai.png",
      },

      {
        title: "Intelligent Regulatory Platform (IRP)",
        subtitle:
          "Frontend React Lead • HCL Technologies",
        description:
          "Leading frontend engineering for a large-scale regulatory workflow platform in the Life Sciences & Healthcare domain, focused on scalable React architecture, reusable UI systems, and enterprise workflow automation.",
        impact:
          "Reusable enterprise component system adopted across multiple product modules.",
        tech: [
          "React.js",
          "Redux",
          "MUI",
          "Enterprise Workflows",
          "Reusable Components",
        ],
        image: "/work/IRP.png",
      },
    ],
  },

  {
    section: "Enterprise Product Engineering",
    description:
      "Large-scale enterprise dashboarding, banking systems, and high-performance frontend architectures.",
    projects: [
      {
        title:
          "Global Banking Platform (Standard Chartered Bank)",
        subtitle:
          "Technical Lead • HCL Technologies",
        description:
          "Led frontend architecture for a multilingual banking platform deployed across 40+ countries, building scalable enterprise dashboards, reusable component systems, and optimized React workflows.",
        impact:
          "40+ country deployment with significant frontend performance improvements.",
        tech: [
          "React.js",
          "Redux",
          "Enterprise Banking",
          "Performance Optimization",
          "Reusable UI",
        ],
        image: "/work/SCB.png",
      },

      {
        title: "Investment Banking Trading Dashboard",
        subtitle:
          "Software Developer • Deutsche Bank",
        description:
          "Built enterprise trading dashboards handling large-scale financial data visualization and optimized rendering performance for investment banking workflows.",
        impact:
          "Improved rendering performance and optimized trade data workflows.",
        tech: [
          "React.js",
          "Redux",
          "Investment Banking",
          "REST APIs",
          "Performance Optimization",
        ],
        image: "/work/DB.png",
      },

      {
        title: "British Telecom Self-Service Portal",
        subtitle:
          "Software Developer • British Telecom",
        description:
          "Developed customer self-service platforms used by millions of global users with focus on accessibility, performance, responsive UI systems, and API integration.",
        impact:
          "Enterprise-grade customer experience platform for global telecom operations.",
        tech: [
          "React.js",
          "Redux",
          "Node.js",
          "Accessibility",
          "Responsive UI",
        ],
        image: "/work/BT.png",
      },

      {
        title: "Engineering Project Management Portal",
        subtitle:
          "Software Developer • McDermott",
        description:
          "Built enterprise engineering dashboards and workflow systems for global project management operations with focus on scalability and usability.",
        impact:
          "Improved enterprise engineering workflow visibility and reporting.",
        tech: [
          "React.js",
          "Enterprise Dashboards",
          "Workflow Systems",
          "Responsive Design",
        ],
        image: "/work/Mcdermott.png",
      },
    ],
  },

  {
    section: "AI Innovation & Concept Systems",
    description:
      "Experimental AI products, advanced UI concepts, and next-generation workflow systems.",
    projects: [
      {
        title: "Smart PMO Copilot (AI Dashboard)",
        subtitle:
          "AI Product Concept",
        description:
          "An AI-assisted PMO dashboard that analyzes project tasks, generates summaries, visualizes KPIs, predicts risks, and provides executive insights using modern dashboarding techniques.",
        impact:
          "Conceptual AI PMO workflow assistant for project intelligence.",
        tech: [
          "React.js",
          "OpenAI",
          "Analytics UI",
          "Tailwind CSS",
        ],
        image: "/work/PMO.png",
      },

      {
        title: "AI Job Marketplace Platform",
        subtitle:
          "UI/UX Product Concept",
        description:
          "Modern job marketplace concept featuring intelligent job recommendations, advanced filtering systems, responsive UI architecture, and AI-ready workflows.",
        impact:
          "Demonstrates scalable frontend architecture and modern UI engineering.",
        tech: [
          "React.js",
          "Tailwind CSS",
          "Responsive UI",
          "UI/UX",
        ],
        image: "/work/JobPortal.png",
      },
    ],
  },
];

const PortfolioPage = () => {
  return (
    <motion.div
      className="min-h-screen w-full overflow-x-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-full">
        <div className="p-6 sm:p-10 md:p-12 lg:p-20 max-w-7xl mx-auto flex flex-col gap-28 pb-48">
          {/* HERO */}
          <div className="text-center flex flex-col gap-6">
            <span className="uppercase tracking-[0.3rem] text-sm text-gray-500">
              Enterprise AI Engineering • Full Stack Development
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              AI Products & Enterprise Case Studies
            </h1>

            <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-8">
              A curated portfolio of enterprise AI platforms, banking systems,
              workflow automation products, scalable dashboard architectures,
              and intelligent digital experiences built across Banking,
              Venture Capital, Telecom, Engineering, and Healthcare domains.
            </p>
          </div>

          {/* PORTFOLIO SECTIONS */}
          {portfolioSections.map((section, sectionIndex) => (
            <section
              key={section.section}
              className="flex flex-col gap-12"
            >
              {/* SECTION HEADER */}
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">
                  {section.section}
                </h2>

                <p className="text-lg text-gray-600 max-w-3xl">
                  {section.description}
                </p>
              </div>

              {/* PROJECT GRID */}
              <div className="grid gap-10 md:grid-cols-2">
                {section.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {/* IMAGE */}
                    <div className="relative w-full h-72 bg-gradient-to-br from-[#f7f7f7] to-white overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-8 flex flex-col gap-5">
                      {/* TITLE */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-sm font-medium text-gray-500">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-gray-700 leading-8">
                        {project.description}
                      </p>

                      {/* IMPACT */}
                      <div className="bg-black text-white rounded-2xl p-5">
                        <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">
                          Business Impact
                        </p>

                        <p className="leading-7">
                          {project.impact}
                        </p>
                      </div>

                      {/* TECH STACK */}
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-black text-white text-xs rounded-xl"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-3 inline-flex items-center gap-2 text-sm font-medium underline cursor-pointer">
                        View Case Study
                        <ExternalLinkIcon />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}

          {/* CTA SECTION */}
          <section className="text-center mt-12 bg-black text-white rounded-[40px] p-14 flex flex-col gap-6">
            <h3 className="text-4xl font-bold">
              Let’s Build Something Intelligent Together
            </h3>

            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-8">
              Open to freelance, contract, consulting, and full-time
              opportunities focused on Full Stack AI Engineering,
              Enterprise Frontend Systems, and AI Workflow Automation.
            </p>

            <div className="flex flex-wrap gap-5 justify-center pt-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-[1.03] transition-all"
              >
                Contact Me
              </a>

              <a
                href="/Ankit_Kumar_Freelance_Resume.pdf"
                target="_blank"
                className="px-8 py-4 border border-white rounded-2xl font-semibold hover:bg-white hover:text-black transition-all"
              >
                Download Resume
              </a>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
"use client";
import React from "react";
import { motion } from "framer-motion";

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M13 7h6m0 0v6m0-6L10 16m-7 4h4a2 2 0 002-2v-4"/>
  </svg>
);

const projects = [
  {
    title: "AI Claims Processing System",
    description:
      "A personal concept project showcasing an AI-powered claims automation workflow with PDF parsing, claim insights, AI decisions, override workflow, and email draft preview.",
    tech: ["React", "FastAPI", "AI Automation", "LangChain"],
    image: "/work/Claim.png",
  },
  {
    title: "Smart PMO Copilot (AI Dashboard)",
    description:
      "A conceptual AI-assisted PMO dashboard that analyzes tasks, generates project summaries, visualizes KPIs, and provides insights using clean UI and smooth animations.",
    tech: ["React", "OpenAI", "Analytics UI", "Tailwind CSS"],
    image: "/work/PMO.png",
  },
  {
    title: "Job Portal (UI/UX Concept)",
    description:
      "A job marketplace concept designed to highlight UI/UX skills—featuring job cards, filters, recommended roles, and modern gradient-based layouts.",
    tech: ["React", "Tailwind", "Responsive UI"],
    image: "/work/JobPortal.png",
  },
];

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full overflow-x-hidden bg-hero-gradient"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTENT CONTAINER (same as ABOUT) */}
      <div className="h-full overflow-scroll">
        
        {/* PAGE CONTENT */}
        <div className="p-6 sm:p-10 md:p-12 lg:p-20 max-w-7xl mx-auto flex flex-col gap-24 pb-48">
          
          {/* HEADER */}
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand.ink tracking-tight">
              Personal Projects & Case Studies
            </h1>

            <p className="max-w-2xl mx-auto text-brand.muted text-lg">
              A curated collection of self-designed concept projects demonstrating my
              ability to build intelligent, scalable, and beautiful digital experiences.
            </p>
          </div>

          {/* PROJECT CARDS */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="bg-white/90 backdrop-blur-xl shadow-lg rounded-2xl overflow-hidden 
                           border border-black/10 hover:shadow-xl transition-all"
              >
                
                {/* IMAGE (no crop) */}
                <div className="relative w-full h-64 bg-gradient-to-br from-[#f0f0f0] to-white rounded-t-xl overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-brand.ink">{p.title}</h3>

                  <p className="text-sm text-brand.muted">{p.description}</p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-black text-white text-xs rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm underline">
                    View Case Study
                    <ExternalLinkIcon />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <section className="text-center mt-12">
            <h3 className="text-3xl font-bold text-brand.ink">Want to collaborate?</h3>
            <p className="mt-3 text-brand.muted">
              I’m open to freelance, contract, and full-time opportunities.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-xl shadow-md hover:scale-[1.04] transition"
            >
              Contact Me
            </a>
          </section>

        </div>

      </div>
    </motion.div>
  );
}
export default PortfolioPage;
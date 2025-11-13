"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-full min-h-screen bg-gradient-to-b from-blue-100 to-red-100 overflow-x-hidden"
      >
        {/* TOP BLACK SLIDE */}
        <motion.div
          className="h-screen w-full fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* TITLE ANIMATION */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 right-0 left-0 
                     text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>

        {/* BOTTOM BLACK SLIDE */}
        <motion.div
          className="h-screen w-full fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        {/* NAVBAR */}
        <div className="h-24 w-full overflow-x-hidden">
          <Navbar />
        </div>

        {/* PAGE CONTENT */}
        <div className="min-h-[calc(100dvh-6rem)] w-full overflow-x-hidden">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;

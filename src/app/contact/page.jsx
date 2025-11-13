"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  return (
    <motion.div
      className="min-h-screen w-full overflow-x-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="
        min-h-[calc(100vh-6rem)]
        w-full 
        flex flex-col lg:flex-row 
        px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32
        gap-8 lg:gap-16
      ">
        
        {/* LEFT TEXT SECTION */}
        <div className="
          flex items-center justify-center 
          w-full lg:w-1/2 
          text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800
          leading-tight
        ">
          <div className="flex items-center gap-2 flex-wrap text-center lg:text-left">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <form
          className="
            w-full lg:w-1/2
            bg-red-50 rounded-xl 
            text-base sm:text-lg md:text-xl
            flex flex-col gap-5 sm:gap-6 md:gap-8
            p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16
            max-w-[700px] mx-auto
          "
        >
          <span>Dear Ankit,</span>

          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-black outline-none resize-none w-full"
          />

          <span>My mail address is:</span>

          <input
            type="text"
            className="bg-transparent border-b-2 border-black outline-none w-full"
          />

          <span>Regards</span>

          <button
            type="submit"
            className="
              bg-purple-200 rounded 
              font-semibold text-gray-700 
              p-3 hover:bg-purple-300 transition
            "
          >
            Send
          </button>

          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}

          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>

      </div>
    </motion.div>
  );
};

export default ContactPage;

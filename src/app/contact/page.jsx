"use client"
import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center 
                        text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <div>
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

        {/* Form Container */}
        <form className="
            h-1/2 lg:h-full lg:w-1/2
            bg-red-50 rounded-xl text-base sm:text-lg md:text-xl
            flex flex-col gap-4 sm:gap-6 md:gap-8
            p-6 sm:p-10 md:p-16 lg:p-20 xl:p-24
        ">
          <span>Dear Ankit,</span>

          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none w-full"
          />

          <span>My mail address is:</span>

          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none w-full"
          />

          <span>Regards</span>

          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-3">
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

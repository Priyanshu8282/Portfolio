import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { styles } from "../style";
import { resume1 } from "../assets";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open(`${resume1}`, "_blank");
  };

  return (
    <section className="relative w-full mx-auto bg-transparent h-screen">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Priyanshu</span>
          </h1>
          
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop responsive web applications
          </p>
          <br />
          <div className="flex mt-4 space-x-4 w-full gap-2">
            <motion.a
              href="https://www.linkedin.com/in/priyanshu-sharma-642337245"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="text-white text-2xl hover:text-[#915eff]" />
            </motion.a>
            <motion.a
              href="https://github.com/Priyanshu8282"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-white text-2xl hover:text-[#915eff]" />
            </motion.a>
            <motion.a
              href="mailto:priyanshus8282@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope className="text-white text-2xl hover:text-[#915eff]" />
            </motion.a>
            <motion.a
              href="tel:+918209745951"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPhone className="text-white text-2xl hover:text-[#915eff]" />
            </motion.a>
          </div>
          <br />
          <div className="mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#915eff] text-white py-2 px-4 rounded-lg hover:bg-[#7a4edc]"
              onClick={handleDownloadResume}
            >
              Download CV
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

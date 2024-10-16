import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../style";

const Tech = () => {
  const isMobile = window.innerWidth <= 1020;  // Mobile detection

  return (
    <>
      <motion.div variants={textVariant()} className='text-center'>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-16 h-16 sm:w-28 sm:h-28' key={technology.name}>
            {isMobile ? (
              <img src={technology.icon} alt={technology.name} className="w-full h-13" />
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
            <h3 className='text-white text-[12px] sm:text-[16px] font-semibold text-center mt-2'>
              {technology.name}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(Tech, "skills");
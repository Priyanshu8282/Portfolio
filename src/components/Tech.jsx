import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../style";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='text-center'>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <h3 className='text-white text-[16px] font-semibold text-center mt-2'>
              {technology.name}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
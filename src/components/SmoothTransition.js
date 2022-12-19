import React from 'react';

import { motion } from 'framer-motion';

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const SmoothTransition = ({ children }) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothTransition;

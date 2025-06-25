'use client'

import {motion} from 'motion/react'

export default function GlowingText() {
  return (
    <motion.h1
      className="text-5xl font-bold text-transparent bg-clip-text"
      initial={{
        backgroundImage: "none",
      }}
      animate={{
        backgroundImage:
          "linear-gradient(to right,white 0% , white 100% , black 200%)",
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      Welcome to DEZERV
    </motion.h1>
  );
}

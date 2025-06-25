"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function MobileAnimation() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="w-[340px] h-[650px] rounded-[60px] mt-10 m-auto border-4 border-solid border-zinc-900">
      <div className="body relative rounded-[50px] w-[310px] h-[620px] m-auto mt-[11px] bg-gray-900 overflow-hidden">
        <div className="absolute z-3 top-4 left-[50%] translate-x-[-50%] w-[120px] h-7 rounded-2xl bg-black"></div>
        <button
          onClick={() => setShowDialog(!showDialog)}
          className="mt-20 m-auto p-2 border rounded-xl cursor-pointer"
        >
          show animation
        </button>

        <AnimatePresence>
          {showDialog && (
            <>
              <motion.div
                variants={cornerCircleVarients}
                className="absolute top-0 left-0 w-[10vw] h-[10vw] rounded-full blur-[20px]"
                initial="initial"
                animate="animate"
                exit="exit"
              ></motion.div>
              <motion.div
                variants={mainModalVarient}
                className="absolute bottom-8 left-[8vw] w-[5vw] h-[5vw] rounded-full blur-[5px] backdrop-blur-sm"
                initial="initial"
                animate="animate"
                exit="initial"
              ></motion.div>
              <motion.div
                variants={cornerCircleVarients}
                className="absolute bottom-0 right-0 w-[10vw] h-[10vw] rounded-full blur-[20px] "
                initial="initial"
                animate="animate"
                exit="exit"
              ></motion.div>
              <motion.div
                variants={contentVarient}
                onClick={() => setShowDialog(false)}
                className="absolute bottom-0 left-0 h-full w-full flex flex-col items-center justify-center text-center"
                initial="initial"
                animate="animate"
                exit="initial"
              >
                <h3 className="text-xl font-bold">Item 1</h3>
                <p> Are you sure you want to delete the selected item? </p>
                <button className="bg-white text-black p-2 px-6 rounded-full w-fit mt-4">
                  Delete
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const contentVarient = {
  initial: {
    rotateZ: 4,
    skewY: -5,
    scaleY: 2.5,
    scaleX: 0,
    y: "100%",
    transition: {
      duration: 0.4,
    },
  },

  animate: {
    rotateZ: 0,
    skewY: 0,
    scaleY: 1,
    scaleX: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cornerCircleVarients = {
  initial: {
    scale: 0,
    opacity: 0,
    y: "100%",
    backgroundColor: "rgb(233, 167, 160)",
  },
  animate: {
    scale: 2.8,
    opacity: 0.8,
    y: 0,
    backgroundColor: "rgb(246, 63, 42)",
    transition: { duration: 0.45, delay: 0.45,ease:'easeOut'  },
  },

  exit: {
    scale: 0,
    opacity: 0,
    y: "100%",
    backgroundColor: "none",
    transition: { delay: 0, duration: 0 },
  },
};

const mainModalVarient = {
  initial: {
    scale: 0,
    opacity: 0.3,
    y: "100%",
    backgroundColor: "rgb(233, 167, 160)",
    transition:{duration:0.35}
  },
  animate: {
    scale: 20,
    y: 0,
    backgroundColor: "rgb(246, 63, 42)",
    transition: { duration: 0.5 },
  },
};

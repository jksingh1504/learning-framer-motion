'use client'

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Notification() {
  const [notification, setNotification] = useState([1, 2, 3]);
  return (
    <>
      <div className="flex gap-6">
        <button
          className="cursor-pointer border border-solid p-2 rounded-sm"
          onClick={() =>
            setNotification((prev) => [Math.random().toFixed(3), ...prev])
          }
        >
          Add
        </button>
        <button
          className="cursor-pointer border border solid p-2 rounded-sm"
          onClick={() =>
            setNotification((prev) => {
              prev.shift();
              return [...prev];
            })
          }
        >
          Remove
        </button>
      </div>
      <motion.div className="flex flex-col gap-6 w-[300px] m-auto mt-10 ">
        <AnimatePresence mode="popLayout">
          {notification.map((e, i) => (
            <motion.div
              key={e}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ transform: "translateX(100%)", opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                setNotification((prev) => prev.filter((x) => x != e))
              }
              className="flex gap-4 px-2 py-6 border-solid border border-red-50 rounded-lg bg-black-900 h-[100px]"
            >
              <div className="p-2 h-fit rounded-full bg-[red]">{e}</div>
              <div className="h-2 bg-[grey] w-full rounded-sm"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

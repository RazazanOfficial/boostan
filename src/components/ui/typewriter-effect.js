"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          transform: "translateY(0)",
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.15),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline rtl:text-right">
        {words.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block mx-1">
            <motion.span
              initial={{ opacity: 0, transform: "translateY(10px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className={cn(
                `dark:text-[var(--c2)] text-[var(--c2)]`,
                word.className
              )}
            >
              {word.text}
            </motion.span>
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-base font-bold text-center rtl:text-right",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[2px] h-4 bg-[var(--c2)]",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

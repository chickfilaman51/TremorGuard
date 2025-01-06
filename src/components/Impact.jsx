import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { bill, happy } from "../assets";
import styles, { layout } from "../style";

const Impact = () => {
  const [isSticky, setIsSticky] = useState(false);
  const leftSectionRef = useRef(null);
  const rightControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // The sticky element becomes centered when the left section scrolls
        // out of view and is fully in the center of the viewport.
        setIsSticky(entry.intersectionRatio < 1);
      },
      { threshold: [0, 1] } // This ensures it triggers when the element moves out of view
    );

    if (leftSectionRef.current) {
      observer.observe(leftSectionRef.current);
    }

    return () => {
      if (leftSectionRef.current) {
        observer.unobserve(leftSectionRef.current);
      }
    };
  }, []);

  return (
    <section id="product" className="flex flex-col md:flex-row">
      {/* Left side */}
      <div
        ref={leftSectionRef}
        className="md:w-[60%] relative"
        style={{ scrollMarginTop: "0px" }}
      >
        {/* Scrollable content */}
        <div className="">
          <img src={happy} alt="billing" className="w-full h-auto relative z-[5]" />
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Tremorguard will help patients by providing the first affordable and reliable hand stabilizers for Parkinson's patients. Unlike other gyro-stabilizer products, which fail to provide a long enough battery life and fool-proof stabilization, TremorGuard uses a novel combination of gyrosensors, gyroscopes, and electrodes to detect when a patient is about to have a tremor and stabilize their hand before it happens.
          </p>
          <img src={happy} alt="billing" className="w-full h-auto relative z-[5]" />
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Tremorguard will help patients by providing the first affordable and reliable hand stabilizers for Parkinson's patients. Unlike other gyro-stabilizer products, which fail to provide a long enough battery life and fool-proof stabilization, TremorGuard uses a novel combination of gyrosensors, gyroscopes, and electrodes to detect when a patient is about to have a tremor and stabilize their hand before it happens.
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-[40%] mt-20 flex justify-center items-start relative">
        {/* Sticky container */}
        <div
          className={`sticky transition-all duration-300 ${
            isSticky
              ? "top-1/2 transform -translate-y-1/2"  // Move to the center of the screen
              : "top-0"  // Stay at the top when it starts
          }`}
        >
          <motion.div
            animate={rightControls}
            className={`p-10 shadow-md top-0 rounded-md transition-colors duration-300 ${
              isSticky ? "bg-transparent" : "bg-white"
            }`}
          >
            <h2 className={styles.heading2}>Our Impact</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Through our product, Parkinson's patients will be able to regain control of their lives.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;

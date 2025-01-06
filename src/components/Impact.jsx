import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { bill, happy, cost, hands } from "../assets";
import styles, { layout } from "../style";

const Impact = () => {
  const [isSticky, setIsSticky] = useState(false);
  const leftSectionRef = useRef(null);
  const rightControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.intersectionRatio < 1);
      },
      { threshold: [0, 1] }
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
    <section
      id="product"
      className="flex flex-col md:flex-row relative"
    >
      {/* Left side */}
      <div
        ref={leftSectionRef}
        className="md:w-[60%] relative"
        style={{ scrollMarginTop: "0px" }}
      >
        {/* Burst gradients */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full blue__gradient" />

        {/* Scrollable content */}
        <div className="flex flex-col items-center p-6 relative z-[5]">
          <img
            src={happy}
            alt="happy"
            className="w-4/5 md:w-[400px] relative rounded-3xl"
          />
          <p className={`${styles.paragraph} max-w-[470px] text-center mt-6`}>
            Tremorguard will help patients by providing the first affordable
            and reliable hand stabilizers for Parkinson's patients. Unlike other
            gyro-stabilizer products, which fail to provide a long enough battery
            life and fool-proof stabilization, TremorGuard uses a novel combination
            of gyrosensors, gyroscopes, and electrodes to detect when a patient is
            about to have a tremor and stabilize their hand before it happens.
          </p>
          <img
            src={cost}
            alt="cost"
            className="w-4/5 md:w-[400px] rounded-3xl mt-20"
          />
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}>
            Not only is it reliable, but Tremorguard will be the most affordable
            hand stabilizer on the market. This is because it uses 3D-printed filaments
            (PLA) in order to provide the same level of stabilization with a fraction
            of the cost. This difference is massive, as other stabilizers can cost
            upwards of $6000, while ours is less than $100.
          </p>
          <img
            src={hands}
            alt="hands"
            className="w-4/5 md:w-[400px] rounded-3xl mt-20"
          />
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}>
            Therefore, Tremorguard will revolutionize the market by providing the only affordable 
            and reliable stabilizer. By buying our product, patients will be able to regain control
            of their lives by making tremors a thing of the past.
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-[40%] mt-20 flex justify-center items-start relative">
        {/* Sticky container */}
        <div
          className={`sticky transition-all duration-300 ${
            isSticky
              ? "top-1/2 transform -translate-y-1/2"
              : "top-0"
          }`}
        >
          <motion.div
            animate={rightControls}
            className={`p-10 shadow-md rounded-md transition-colors duration-300 ${
              isSticky ? "bg-transparent" : "bg-white"
            }`}
          >
            <h2 className={styles.heading2}>Our Impact</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Through our product, Parkinson's patients will be able to regain control
              of their lives and finally be able to perform daily tasks without the fear of unsteady hands.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;

import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import React from 'react';
const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    

    <div className="w-full flex justify-center items-center">
      <h2 className={`${styles.heading2} text-center`}>
        Meet the Team
      </h2>
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1] gap-8">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;

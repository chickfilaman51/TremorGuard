import { card,prototype } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import React from 'react';
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The Model
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
        This isn't just imagination - its reality. A prototype was recently developed and used to demonstrate the capabilities of TremorGuard.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={prototype} alt="prototype" className="w-[70%] h-[80%] mb-20 rounded-xl" />
    </div>
  </section>
);

export default CardDeal;



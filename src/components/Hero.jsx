import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Home from "./Home";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        <div className="flex flex-row justify-between items-center w-full">
          {/* Adjusted h1 with negative margin-top */}
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] -mt-40">
            <span className="text-gradient">Tremor</span>Guard
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/*<GetStarted />*/}
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A novel approach to Parkinson's Tremor Stabilization using polycarbonate based gyrotechnology and algorithmically controlled electrodes. 
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Home/>
        
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;

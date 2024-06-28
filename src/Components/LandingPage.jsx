import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Landingpage = () => {
  
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-[12rem] px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-baseline">
                {index === 1 && (<motion.div initial={{width:0 }} animate={{width:"8vw"}} transition={{ease: [0.45, 0, 0.55, 1], duration: 1}} className="w-[8vw] h-[4.5vw] rounded-md relative top-[0.1rem] bg-green-500"></motion.div>)}
                <h1 className='flex items-baseline uppercase text-[7vw] leading-[6vw] font-["Founders_Grotesk"] font-medium'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light  tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full ">
            Start the project
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-500 rounded-full flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;

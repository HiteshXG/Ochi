import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]">
          <h1 className='w-32 text-4xl text-[#CDEA68] font-["Founders_Grotesk"]'>
            LOGO
          </h1>
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
            &copy;1904-2914
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#2c3837]">
          <h1 className='w-32 text-4xl text-[#CDEA68] font-["Founders_Grotesk"]'>
            LOGO
          </h1>
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
            &copy;1904-2914
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#2c3837]">
          <h1 className='w-32 text-4xl text-[#CDEA68] font-["Founders_Grotesk"]'>
            LOGO
          </h1>
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
            &copy;1904-2914
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

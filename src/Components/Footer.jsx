import React from "react";

const Footer = () => {
  return (
    <div className='flex gap-5 w-full h-screen bg-zinc-900 p-20 font-["Founders_Grotesk"]'>
      <div className='w-1/2 h-full flex flex-col justify-between'>
        <div className="heading ">
          <h1 className="text-[6vw] font-semibold uppercase leading-none -mb-5">
            EYE-
          </h1>
          <h1 className="text-[6vw] font-semibold uppercase leading-none -mb-5">
            OPENING
          </h1>
        </div>
        <h3 className="text-[2vw] font-semibold uppercase">LOGO</h3>
      </div>
      <div className="w-1/2">
        <h1 className="text-[6vw] font-semibold uppercase leading-none -mb-5">
          Presentations
        </h1>
        <div className="dets font-['Neue_Montreal'] mt-10">
            <a className="block text-xl font-light" href="#">Facebook</a>
            <a className="block text-xl font-light" href="#">Instagram</a>
            <a className="block text-xl font-light" href="#">LinkedIn</a>
          </div>
      </div>
    </div>
  );
};

export default Footer;

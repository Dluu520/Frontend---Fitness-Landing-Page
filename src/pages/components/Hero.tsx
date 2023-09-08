import React from "react";

type HeroProps = {
  title: String;
  message: String;
};
const Hero = (props: HeroProps) => {
  return (
    <div className="relative hero h-screen  w-full flex justify-center">
      <div className="flex  items-center justify-center  z-[10] rounded-lg ">
        <div className="text-white flex items-center justify-center flex-col gap-10 w-[60%]">
          <h1 className="text-5xl">{props.title}</h1>
          <p className="text-xl ">{props.message}</p>
          <div className=" p-2 flex gap-5">
            <button className="border p-5 rounded-lg w-[10rem]  h-[rem] bg-orange-200 text-black text-xl hover:bg-orange-300">
              Trial
            </button>
            <button className="border p-5 rounded-lg w-[10rem]  h-[rem] bg-orange-200 text-black text-xl hover:bg-orange-300">
              Start Today
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};

export default Hero;

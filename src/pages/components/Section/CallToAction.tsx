import React from "react";

const CallToAction = () => {
  return (
    <div className="relative c2a-image w-full h-[50dvh] flex ">
      {/* content */}
      <div className="text-white z-[10] flex flex-col border border-white p-5  m-10 justify-center  sm:items-start gap-5 ">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Ready to ignite your fitness revolution?
        </h1>
        <h2 className="text-xl">
          There has never been a better time than right now. Dive into your
          fitness journey with StartFit today.
        </h2>
        <button className="border bg-yellow-500 rounded-full px-[2rem] py-[1rem] text-black font-bold hover:bg-yellow-300">
          Get Started
        </button>
      </div>
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};

export default CallToAction;

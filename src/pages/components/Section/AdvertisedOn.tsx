import React from "react";

const AdvertisedOn = () => {
  return (
    <div className="bg-black w-full text-white flex flex-col justify-center items-center p-10">
      <h4 className="text-center text-gray-400 font-bold p-5 font-mono">
        AS SEEN ON
      </h4>
      <div className="flex  flex-col sm:flex-wrap sm:flex-row  justify-center items-center text-2xl ">
        <h1 className="p-3 sm:p-5 font-serif ">WellnessWorld</h1>
        <h1 className="p-3 sm:p-5 font-light font-serif text-gray-400">
          elixer
        </h1>
        <h1 className="p-3 sm:p-5 font-mono text-white font-bold">
          MINDFULL LIVING
        </h1>
        <h1 className="p-3 sm:p-5 font-medium">revitalize</h1>
        <h1 className="p-3 sm:p-5 font-thin font-sans text-md">
          the health hive
        </h1>
      </div>
      {/* <div className="flex justify-center items-center text-2xl font-light"></div> */}
    </div>
  );
};

export default AdvertisedOn;

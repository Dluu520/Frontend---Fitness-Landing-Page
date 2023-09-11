import Image from "next/image";
import React from "react";

const ReviewList = [
  {
    firstName: "Susan",
    lastName: "Belle",
    address: { city: "Boca Raton", state: "Florida" },
    review:
      "East Star didn't just change my workout routine, it revolutionised my entire lifestyle. I've never felt stronger, healthier or happier!",
    picture:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtaWxlfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
  },
];
const CustomerReview = () => {
  return (
    <div className=" flex flex-col sm:flex-row gap-10 sm:mx-52  p-10 bg-yellow-300 w-full justify-center items-center">
      <h3 className="text-xl sm:text-2xl font-sans font-bold sm:mx-52 ">
        What People Say
      </h3>
      {ReviewList.map((eachReview, index) => {
        return (
          <div className="flex flex-col gap-4 sm:gap-10  sm:m-10" key={index}>
            <h1 className="text-xl sm:text-3xl">{eachReview.review}</h1>
            <div className="flex sm:flex-row gap-2 sm:gap-5 rounded-full">
              {/* {eachReview.picture} */}
              <Image
                alt="/"
                src={eachReview.picture}
                width="100"
                height="100"
                className={`rounded-full object-none `}
              />
              <div className="flex flex-col justify-center items-center ">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  {eachReview.firstName} {eachReview.lastName}
                </h4>
                <h5>in {eachReview.address.state}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerReview;

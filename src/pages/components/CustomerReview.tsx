import Image from "next/image";
import React from "react";

const ReviewList = [
  {
    firstName: "Susan",
    lastName: "Baron",
    address: { city: "Boca Raton", state: "Florida" },
    review:
      "StartFit didn`t just change my workout routine, it revolutionised my entire lifestyle. I`ve never felt stronger, healthier or happier!",
    picture:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtaWxlfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
  },
];
const CustomerReview = () => {
  return (
    <div className="m-10 flex flex-col sm:flex-row gap-10 p-10 bg-yellow-300 w-full">
      <h3 className="text-2xl font-sans font-semibold">What People Say</h3>{" "}
      {ReviewList.map((eachReview, index) => {
        return (
          <div className="flex flex-col gap-3" key={index}>
            <h1>"{eachReview.review}"</h1>
            <div className="flex ">
              <div className="relative flex  rounded-full m-10 text-center justify-center items-center ">
                {/* {eachReview.picture} */}
                <Image
                  alt="/"
                  src={eachReview.picture}
                  width="100"
                  height="100"
                  objectFit="cover"
                  className={`rounded-full object-none   bg-white `}
                />
              </div>
              <h4>
                {eachReview.firstName} {eachReview.lastName}
              </h4>
              <h5>{eachReview.address.state}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerReview;

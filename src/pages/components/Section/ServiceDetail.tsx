import React from "react";

const PricingSheet = [
  {
    title: "Starter Plan",
    desription:
      "Perfect for fitness newcomers, this plan eases you into the fitness world with personalised workouts, simple nutrition guidance, and a supportive community. Choose this for a gentle introduction to your fitness journey.",
    pricing: "$160",
    subscription: "month",
    benefits: [
      "2 training sessions per week",
      "Basic nutrition guidance",
      "Access to all group classes",
    ],
  },
  {
    title: "Performance Plan",
    desription:
      "Ideal for those with some fitness background, this plan elevates your routine with personalised training, advanced nutrition advice, and progress tracking. Choose this to take your fitness to the next level.",
    pricing: "$300",
    subscription: "month",
    benefits: [
      "3 training sessions per week",
      "Tailored nutrition advice",
      "Access to all group classes",
      "Monthly body composition scans",
    ],
  },
  {
    title: "Elite Plan",
    desription:
      "Tailored for serious fitness enthusiasts or athletes, this comprehensive plan optimises your performance with an intense training regimen, highly personalised nutrition strategies, and precise progress tracking.",
    pricing: "$680",
    subscription: "month",
    benefits: [
      "5 training sessions per week",
      "Personalised nutrition plans",
      "Priority booking for all group classes",
      "Bi-weekly body composition scans",
      "Ongoing performance assessment",
    ],
  },
];

const ServiceDetail = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 m-10">
      <div className="text-center flex flex-col gap-4 ">
        <h3 className="font-bold text-gray-500 ">SIMPLE PRICING</h3>
        <h1 className="text-4xl sm:text-5xl font-bold">
          Mininmal investment, Maximum results
        </h1>
      </div>
      <p className="text-2xl font-light text-center">
        At StartFit, we believe in making fitness affordable. Enjoy high-value
        training experiences at incredibly competitive prices.
      </p>
      <div className="flex flex-col sm:flex-row gap-5">
        {PricingSheet.map((eachItem, index) => {
          return (
            <div>
              <div className="flex flex-col gap-4 border rounded-lg border-black p-5">
                <h2 className="text-2xl font-bold">{eachItem.title}</h2>
                <p className="text-start font-light">{eachItem.desription}</p>
                <div className="flex justify-start items-center gap-2">
                  <h1 className="text-3xl font-bold">{eachItem.pricing}</h1>
                  <p className="">per {eachItem.subscription}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-5">
                {eachItem.benefits.map((item, index) => (
                  <div>+{item}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-center font-light">
        Not convinced? We offer a 100% money-back guarantee for all purchases.
        Try our product confidently; if you don’t like it, we’ll make it right.
      </p>
    </div>
  );
};

export default ServiceDetail;

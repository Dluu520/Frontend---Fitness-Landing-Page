import Link from "next/link";
import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsTiktok } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="h-[50%] w-full bg-black text-white flex flex-col sm:flex-row justify-center items-start m-0">
      <div className="flex flex-col flex-grow  p-10 gap-5 m-2 sm:m-10">
        <div>
          <h1 className="text-2xl font-bold">Start Now</h1>
          <p>Personal fitness training Service</p>
        </div>
        <p>
          Unlock your potential and redefine your limits with us. Our trainers
          tailor workouts to your ability, ensuring you're fit today and
          undeniably stronger tomorrow. It's our commitment to your health. We
          deliver effective, efficient workouts paired with nutritional guidance
          to help you reach your fitness peak.
        </p>
        <Link className="hover:no-underline underline" href="/">
          East Star Blog
        </Link>
      </div>
      <div className="flex flex-col p-10 gap-5 m-2 sm:m-10">
        <h1 className="text-2xl font-bold">Get Updated</h1>
        <p>
          Stay ahead in your fitness journey with our exclusive tips and offers.
        </p>
        <div className="flex gap-5">
          <div className="rounded-full bg-white/10 w-fit hover:cursor-pointer hover:scale-110  p-1 ">
            <BsFacebook />
          </div>
          <div className="rounded-full bg-white/10 w-fit hover:cursor-pointer hover:scale-110  p-1 ">
            <BsTwitter />
          </div>
          <div className="rounded-full bg-white/10 w-fit hover:cursor-pointer hover:scale-110  p-1 ">
            <BsInstagram />
          </div>
          <div className="rounded-full bg-white/10 w-fit hover:cursor-pointer hover:scale-110  p-1 ">
            <BsTiktok />
          </div>
        </div>
        <div className="flex items-start justify-start m-0 p-0">
          <input
            className="rounded-tl-full rounded-bl-full  p-2 text-black "
            placeholder="Type your email..."
          ></input>
          <button className=" rounded-tr-full rounded-br-full p-2  bg-yellow-500 text-black font-light">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

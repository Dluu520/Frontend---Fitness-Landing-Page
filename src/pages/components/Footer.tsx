import Link from "next/link";
import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsTiktok } from "react-icons/bs";
const Footer = () => {
  return (
    <div
      id="footer"
      className="h-[50%] bg-black text-white flex flex-col md:flex-row justify-center items-start m-0"
    >
      <div className="flex flex-col  p-10 gap-5 m-2 sm:m-10">
        <div>
          <h1 className="text-2xl font-bold">Start Now</h1>
          <p>Personal fitness training Service</p>
        </div>
        <p>
          Unlock your potential and redefine your limits with us. Our trainers
          tailor workouts to your ability, ensuring you&rsquo;re fit today and
          undeniably stronger tomorrow. It&rsquo;s our commitment to your
          health. We deliver effective, efficient workouts paired with
          nutritional guidance to help you reach your fitness peak.
        </p>
        <Link className="hover:no-underline underline" href="/">
          East Star Blog
        </Link>
        <div className="flex gap-2">
          <p>Contact us:</p>
          <p className="hover:no-underline underline hover:cursor-pointer">
            (123)-456-7890
          </p>
        </div>
      </div>
      <div className="flex flex-col p-10 gap-5 sm:m-10">
        <h1 className="text-2xl font-bold">Get Updated</h1>
        <p>
          Stay ahead in your fitness journey with our exclusive tips and offers.
        </p>
        <div className="flex gap-5">
          <div className="rounded-full bg-white/10 w-fit hover:cursor-pointer hover:scale-150  p-1 ">
            <BsFacebook />
          </div>
          <div className="rounded-full bg-white/10 w-fit hover:cursor-pointer hover:scale-150   p-1 ">
            <BsTwitter />
          </div>
          <div className="rounded-full bg-white/10 w-fit hover:cursor-pointer hover:scale-150   p-1 ">
            <BsInstagram />
          </div>
          <div className="rounded-full bg-white/10 w-fit hover:cursor-pointer hover:scale-150   p-1 ">
            <BsTiktok />
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-[2em] gap-2 ">
          <input
            className="rounded-full sm:rounded-tl-full sm:rounded-bl-full ps-2 text-black "
            placeholder="Type your email..."
          ></input>
          <button className="rounded-full sm:rounded-tr-full sm:rounded-br-full px-2 bg-yellow-500 text-black font-light">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

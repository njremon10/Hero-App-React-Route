import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa6";
import heroImg from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="text-center mx-auto mt-10">
        <h1 className="text-5xl font-bold">
          We Build <br />
          <span className="text-purple-600">Productive</span> Apps
        </h1>
        <p className="text-gray-600 mt-2">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />  Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <div className="mt-5">
          <button className="btn rounded-lg mr-5">
            <IoLogoGooglePlaystore />
            Google Play
          </button>
          <button className="btn rounded-lg">
            <FaAppStoreIos />
            App Store
          </button>
        </div>
        <img className="mx-auto mt-5" src={heroImg} alt="" />

        <div className="text-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-20">
          <h1 className="mb-8 text-center text-4xl font-bold">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex justify-around ">
            <div>
              <p>Total Downloads</p>
              <h1 className="font-extrabold text-[64px]">29.6M</h1>
              <p>21% more than last month</p>
            </div>
            <div>
              <p>Total Reviews</p>
              <h1 className="font-extrabold text-[64px]">906K</h1>
              <p>46% more than last month</p>
            </div>
            <div>
              <p>Active Apps</p>
              <h1 className="font-extrabold text-[64px]">132+</h1>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

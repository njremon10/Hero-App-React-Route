import React from "react";
import Banner from "../Fixed/Banner";
import { Link, useLoaderData } from "react-router";
import App8 from "./App8";

const Home = () => {
  const data = useLoaderData();
  // console.log(data)
  return (
    <div>
      <title>Hero App-Home</title>
      <Banner></Banner>
      <div className="text-center mt-10 mb-10">
        <h1 className="font-bold text-4xl mb-2">Trending Apps</h1>
        <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {data.map((app) => (
          <App8 key={app.id} app={app}></App8>
        ))}
      </div>
      <Link to="/apps">
        <div className="flex mt-6 mb-10">
          <button className="btn mx-auto px-10 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
            Show All
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Home;

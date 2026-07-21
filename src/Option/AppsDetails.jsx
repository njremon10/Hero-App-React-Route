import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import Swal from "sweetalert2";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AppsDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data)
  const app = data.find((item) => item.id === parseInt(id));

  const {
    image,
    title,
    downloads,
    companyName,
    ratingAvg,
    reviews,
    ratings,
    description,
  } = app;

  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    console.log("Before:", installedApps);

    const exists = installedApps.find((item) => item.id === app.id);
    console.log("Exists:", exists);

    if (exists) {
      Swal.fire({
        title: "Already Installed!",
        text: "This app is already installed.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    installedApps.push(app);
    console.log("After:", installedApps);

    localStorage.setItem("installedApps", JSON.stringify(installedApps));

    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Installing This App.",
  showConfirmButton: false,
  timer: 1500
});
  };

  return (
    <div className="mt-10 mb-10 p-10 ">
      <div className="flex gap-10  mb-7">
        <div className="border-2 border-gray-300 p-5 bg-gray-50">
          <img src={image} alt="" />
        </div>
        <div className="w-4/4 px-5">
          <h1 className="font-semibold text-4xl mb-0">Title : {title}</h1>
          <p className="mt-1 border-b-1 border-gray-400 py-5">
            Company by <span className="text-purple-600">{companyName}</span>
          </p>

          <div className="flex mt-5 gap-15 ">
            <div>
              <span className="text-2xl">
                <FaDownload />
              </span>
              <p className="text-gray-600">DownLoads</p>
              <h1 className="text-3xl font-bold">{downloads}</h1>
            </div>
            <div>
              <span className="text-2xl">
                <FaStar />
              </span>
              <p className="text-gray-600">Average Ratings</p>
              <h1 className="text-3xl font-bold">{ratingAvg}</h1>
            </div>
            <div>
              <span className="text-2xl">
                <BiSolidLike />
              </span>
              <p className="text-gray-600">Total Reviews</p>
              <h1 className="text-3xl font-bold">{reviews}</h1>
            </div>
          </div>
          <div>
            <button
              onClick={handleInstall}
              className="btn bg-green-600 text-white px-10 mt-5"
            >
              Install Now
            </button>
          </div>
        </div>
      </div>

      {/* Rating Chart */}
      <div className="border-t-1 border-gray-400 mt-5 mb-1.5">
        <h1 className="text-4xl font-semibold text-center mb-5 mt-5">
          Ratings
        </h1>
        <BarChart
          width={1200}
          height={350}
          data={ratings}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>

      <div className="border-t-1 border-gray-400 mt-5">
        <h1 className="mt-5 font-semibold text-2xl mb-5">Description</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="flex">
        <button
          onClick={() => navigate(-1)}
          className="btn mt-10 mx-auto text-white bg-green-600 px-10 font-bold"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AppsDetails;

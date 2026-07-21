import React from "react";
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router";

const AppsMore = ({ apps }) => {
  console.log(apps);
  const {id, image, title, downloads, ratingAvg } = apps;
  return (
    <Link to={`/moreapp/${id}`}>
      <div className="border-2 border-gray-200 p-5">
        <img className="mx-auto w-[300px] h-[300px]" src={image} alt="" />
        <h1 className="font-bold mt-4">Title: {title}</h1>
        <div className="flex justify-between mt-2">
          <p className="flex items-center gap-2">
            <FaDownload /> {downloads}
          </p>
          <p className="flex items-center gap-2">
            <FaStar />
            {ratingAvg}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AppsMore;

import React from "react";
import errorImg from "../assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img className="mx-auto" src={errorImg} alt="" />
      <div className="text-center mt-10">
        <h1 className="font-bold text-4xl ">Oops, page not found!</h1>
        <p className="text-gray-500 mt-3">
          The page you are looking for is not available.
        </p>
      </div>
      <div className="flex">
        <button
          onClick={() => navigate(-1)}
          className="btn mt-5 mx-auto bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-10 font-bold"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

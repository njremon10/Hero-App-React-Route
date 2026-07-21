import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import AppsMore from "./AppsMore";

const Apps = () => {
  const data = useLoaderData();

  const navigate = useNavigate();

  // Search state
  const [search, setSearch] = useState("");

  // Filter apps by title
  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mb-10">
      <div className="text-center">
        <h1 className="font-bold text-4xl mt-5 mb-3">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center mb-5">
        <h1 className="font-bold">({filteredApps.length}) Apps Found</h1>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            type="search"
            placeholder="Search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {filteredApps.length > 0 ? (
          filteredApps.map((apps) => <AppsMore key={apps.id} apps={apps} />)
        ) : (
          <div className="col-span-4 text-center mt-10">
            <h1 className="text-3xl font-bold text-red-500">No App Found!</h1>
          </div>
        )}
      </div>
      <div className="flex mt-5">
        <button
          onClick={() => navigate(-1)}
          className="btn mx-auto px-10 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Apps;

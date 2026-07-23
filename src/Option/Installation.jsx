import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useSearchParams } from "react-router";
import Swal from "sweetalert2";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState(
    JSON.parse(localStorage.getItem("installedApps")) || [],
  );

  const handleUninstall = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, uninstall it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const remainingApps = installedApps.filter((app) => app.id !== id);

        setInstalledApps(remainingApps);

        localStorage.setItem("installedApps", JSON.stringify(remainingApps));

        Swal.fire({
          title: "Uninstalled!",
          text: "The app has been removed successfully.",
          icon: "success",
        });
      }
    });
  };
  
  const handleSortedAsc = () => {
    const sorted = [...installedApps].sort((a, b) => a.size - b.size);
    setInstalledApps(sorted);
  };

  const handleSortedDesc = () => {
    const sorted = [...installedApps].sort((a, b) => b.size - a.size);
    setInstalledApps(sorted);
  };

  return (
    <div>
      <title>Hero App-Installation</title>
      <div className="text-center mt-10 mb-10">
        <h1 className="text-3xl font-bold mb-5">Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex justify-between items-center mb-7">
        <p className="font-bold text-xl">{installedApps.length} Apps Found</p>
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Sorted by Size
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={handleSortedAsc}>Small → Large</button>
              </li>

              <li>
                <button onClick={handleSortedDesc}>Large → Small</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {installedApps.map((app) => (
        <div key={app.id} className="border p-5 mb-5 drop-shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex gap-10">
              <img className="w-40" src={app.image} alt="" />
              <div className="mt-7">
                <h2>Title: {app.title}</h2>

                <div className="flex gap-10 mt-5">
                  <p className="flex items-center gap-1">
                    <FaDownload />
                    {app.downloads}
                  </p>
                  <p className="flex items-center gap-1">
                    <FaStar />
                    {app.ratingAvg}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleUninstall(app.id)}
                className="btn bg-green-600 text-white"
              >
                Uninstall
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Installation;

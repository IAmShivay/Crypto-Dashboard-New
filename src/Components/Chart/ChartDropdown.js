import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import DownArrow from "../../assets/DownArrow.png";

const ChartDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="flex flex-col space-y-6 items-start">
      <button
        className="dark:bg-gray-400 dark:text-gray-50 flex justify-center items-center bg-[#F9FAFB] text-black font-medium px-3 py-[0.395rem] rounded-md border-[1.2px] border-slate-400 shadow-sm shadow-slate-400"
        onClick={handleDropDown}
      >
        <span>Chart type</span>
        <img src={DownArrow} alt="" className="w-5 ml-2" />
      </button>

      {isOpen && (
        <div className="flex flex-col dark:bg-gray-400 bg-[#F9FAFB] space-y-2 text-[0.95rem] w-40 lg:w-[10.5rem] rounded-md drop-shadow-lg absolute top-32 xs2:top-[5.3rem] xl:top-12">
          <Link to="/">
            <div
              className="text-gray-500 dark:text-gray-50 dark:hover:text-black font-medium rounded-t-md hover:bg-red-100 hover:text-black py-2 px-3"
              onClick={handleDropDown}
            >
              Veritcal Chart
            </div>
          </Link>
          <Link to="/line">
            <div
              className="text-gray-500 dark:text-gray-50 dark:hover:text-black font-medium hover:bg-red-100 hover:text-black py-2 px-3"
              onClick={handleDropDown}
            >
              Line Chart
            </div>
          </Link>
          <Link to="/horizontalChart">
            <div
              className="text-gray-500 dark:text-gray-50 dark:hover:text-black font-medium rounded-b-md hover:bg-red-100 hover:text-black py-2 px-3"
              onClick={handleDropDown}
            >
              Horizontal Chart
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ChartDropdown;

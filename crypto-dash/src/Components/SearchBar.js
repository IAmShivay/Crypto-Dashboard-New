import React from "react";
import searchIcon from "../assets/search.png";
import { useDispatch } from "react-redux";
import { actionCreators } from "../Redux/index";
import { bindActionCreators } from "redux";

export default function SearchBar({ handleSearchValue }) {
  const dispatch = useDispatch();
  const {  searchFilter } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="flex items-center justify-start px-6 space-x-3 bg-white dark:bg-gray-700 drop-shadow rounded-md  border border-neutral-200">
      <img
        src={searchIcon}
        alt="sdfd"
        className="w-4 xs:w-5 opacity-50 dark:invert"
      />

      <form className="w-full">
        <input
          type="text"
          onChange={ searchFilter}
          placeholder="Search by coin"
          className="dark:bg-gray-700 dark:text-gray-50 w-full h-10 outline-none font-medium text-sm xs2:text-lg rounded-md"
        />
      </form>
    </div>
  );
}

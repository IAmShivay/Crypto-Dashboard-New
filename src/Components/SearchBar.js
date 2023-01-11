import React from "react";
import searchIcon from "../assets/search.png";
import { useDispatch } from "react-redux";
import { actionCreators } from "../Redux/index";
import { bindActionCreators } from "redux";
// The SearchBar component takes in a prop "handleSearchValue"

export default function SearchBar({ handleSearchValue }) {
  // useDispatch hook is used to dispatch actions to the store

  const dispatch = useDispatch();
  // The bindActionCreators function is used to bind the action creators from the imported "actionCreators" object
  // to the dispatch function, so that they can be called directly as functions rather than dispatching manually
  const { searchFilter } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="flex items-center justify-start px-6 space-x-3 bg-white dark:bg-gray-700 drop-shadow rounded-md  border border-neutral-200">
      <img
        src={searchIcon}
        alt="sdfd"
        className="w-4 xs:w-5 opacity-50 dark:invert"
      />

      <form className="w-full">
        {/* form element with class "w-full" to make it fill the available width */}

        <input
          type="text"
          onChange={searchFilter}
          // onChange event is added here, when the input value changes, it will call this function
          placeholder="Search by coin"
          className="dark:bg-gray-700 dark:text-gray-50 w-full h-10 outline-none font-medium text-sm xs2:text-lg rounded-md"
        />
        {/* Input field with class "dark:bg-gray-700 dark:text-gray-50 w-full h-10 outline-none font-medium text-sm xs2:text-lg rounded-md" */}
      </form>
    </div>
  );
}

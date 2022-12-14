import React from "react";
import Logo from "../../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../Redux/index";
import { bindActionCreators } from "redux";
import { BsFillCloudMoonFill } from "react-icons/bs";

// importing required modules for the component

// Navbar component

const Navbar = () => {
  //using the useDispatch and useSelector hooks from react-redux to connect the component with the store

  const dispatch = useDispatch();
  // dispatching an action from the action creator

  const { updateDarkMode } = bindActionCreators(actionCreators, dispatch);
  // getting the darkmode status from the store

  const darkMode = useSelector((state) => state.darkMode);
  return (
    // returning the JSX

    <div className={darkMode ? "dark" : ""}>
      <div className="sticky top-0 z-50 first-line:">
        <ul
          className="relative py-2 bg-gray-100 shadow-lg dark:shadow-gray-600 dark:shadow-lg flex justify-between items-center dark:bg-gray-900"
          style={{ listStyle: "none" }}
        >
          <li className="dark:text-black">
            <hr />
            <img
              src={Logo}
              alt="Almabetter"
              style={{ padding: "5px", height: "3rem" }}
            />
          </li>
          <li
            className="my-3 mx-18 dark:text-white border-0 border-black dark:border-white h-9 w-10 flex justify-center items-center rounded-lg shadow-inner shadow-slate-900 dark:shadow-white cursor-pointer"
            onClick={() => updateDarkMode(!darkMode)}
          >
            <BsFillCloudMoonFill className="text-xl animate-pulse dark:animate-bounce" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
// Exporting the component for other parts of the application to use it.

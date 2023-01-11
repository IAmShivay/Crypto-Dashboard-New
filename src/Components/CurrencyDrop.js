import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../Redux/index";

//FiatDropdown component uses useDispatch and bindActionCreators hooks from react-redux library to
//dispatch updateCurrencyValue action from actionCreators

export default function FiatDropdown() {
  const dispatch = useDispatch();
  const { updateCurrencyValue } = bindActionCreators(actionCreators, dispatch);

  //Render a select dropdown with options for USD, EUR and INR.
  //onChange of the select dropdown updateCurrencyValue action is dispatched

  return (
    <select
      className="dark:bg-gray-700 dark:text-gray-50 w-full h-full text-base xs:text-[1.2rem] px-2 mr-1 cursor-pointer rounded-md font-semibold font-mono focus:text-blue-500 focus:outline-none"
      onChange={updateCurrencyValue}
    >
      <option value="usd" className="text-black dark:text-gray-50">
        USD
      </option>
      <option value="eur" className="text-black dark:text-gray-50">
        EUR
      </option>
      <option value="inr" className="text-black dark:text-gray-50">
        INR
      </option>
    </select>
  );
}

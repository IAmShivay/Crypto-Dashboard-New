import React from "react";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
function ExchangeCoins() {
  //State to hold data from API

  const [info, setInfo] = useState([]);
  //State for input value

  const [input, setInput] = useState("");
  //State for selected currency to convert from

  const [from, setFrom] = useState("usd");
  //State for selected currency to convert to

  const [to, setTo] = useState("inr");
  //State to hold options for "to" currency dropdown

  const [options, setOptions] = useState([]);
  //State to hold output of conversion

  const [output, setOutput] = useState(0);
  //Regex for checking if input is a string

  const regMatch = /[a-zA-Z]+/;
  //State for error checking

  const [isError, setError] = useState(false);
  //State hook to check if the input is string

  const [isString, setisString] = useState(false);
  //State hook to check if the input is empty

  const [isEmpty, setisEmpty] = useState(false);

  //function to handle the button click, check if the input is empty, then call convert() function

  const handleButton = (e) => {
    if (!input) {
      setisEmpty(true);
      return null;
    }
    convert();
  };
  //function to handle the input change, sets the error state to false and check for negative or string input

  const handleInput = (e) => {
    setisEmpty(false);
    setError(false);
    setisString(false);
    setInput(e.target.value);
    if (e.target.value === 0) {
      setOutput(0);
    }
    if (e.target.value < 0) {
      setError(true);
    }
    if (regMatch.test(e.target.value)) {
      setisString(true);
    }
  };
  //useEffect Hook to make API call, it takes two arguments - callback function and dependency array
  //it calls the API to fetch the exchange rates for the selected 'from' currency

  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);
  //Set options for "to" currency dropdown and calculate conversion

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);
  function convert() {
    var rate = info[to];
    if (input >= 0) setOutput(input * rate);
  }
  return (
    //Function to calculate conversion

    <div className="w-full px-4 xl:px-3 dark:bg-gray-700 dark:text-white">
         {/* outermost container with full width and padding */}

      <div className="font-bold font-mono pt-2 text-zinc-700 text-lg xl:text-2xl xl:pb-2 xl:pt-4 dark:text-white">
              {/* header container with bold monospace font and text color zinc-700 */}

        <h1>Exchange Coins</h1>
      </div>
      <div className="flex space-x-1 xs:space-x-8 xs2:space-x-14 xs3:space-x-28 sm:space-x-52 sm2:space-x-60 md:space-x-5 lg:space-x-2 lg2:space-x-4 2xl:space-x-12 xxs:space-x-8 xl:place-content-stretch dark:bg-gray-700">
        <div className="flex dark:bg-gray-700">
        {/* form container that creates horizontal alignment and spacing depending on screen size */}
        <div className="space-y-6 xl:space-y-[30px] mt-[25px] pr-4 xl:text-lg dark:bg-gray-700">
            {/* container for "Sell" and "Buy" labels*/}

            <h1 className="text-rose-500 font-medium">Sell</h1>
            <h1 className="text-teal-500 font-medium">Buy</h1>
          </div>
          <div className="--Div 3-for-dropdown mt-4 xl:space-y-4 xl:mt-[20px] dark:bg-gray-700">
            {/* Dropdown component for choosing from coin */}

            <Dropdown
              className="uppercase xl:w-40 h-12 font dark:bg-gray-700"
              menuClassName="h-28"
              options={options}
              onChange={(e) => {
                setFrom(e.value);
              }}
              value={from}
              placeholder="From"
            />
                        {/* dropdown menu for "From" value */}

            <Dropdown
              className="w-24 uppercase xl:w-40 dark:bg-gray-700 dark:text-white"
              menuClassName="h-[5.5rem]"
              options={options}
              onChange={(e) => {
                setTo(e.value);
              }}
              value={to}
              placeholder="To"
            />
          </div>
        </div>
        <div className="mt-4 xl:mt-5 space-y-1 xl:space-y-3 xl:pl-6 flex flex-col dark:bg-gray-700 2xl:ml-10">
          <div className="flex">
            <div className="order-last px-1 py-2 2xl:ml-4 ">
              <p className="dark:bg-gray-700 text-sm">
                {isError ? (
                  <Popup
                    trigger={
                      <button className=" bg-rose-500 rounded-full text-xs font-bold text-white px-1.5 py-0.2">
                        i
                      </button>
                    }
                    position="bottom right"
                    on="hover"
                    repositionOnResize="true"
                  >
                    <div className=" text-xs text-black ">
                      Negative number is not valid input!
                    </div>
                  </Popup>
                ) : null || isString ? (
                  <Popup
                    trigger={
                      <button className=" bg-rose-500 rounded-full text-xs font-bold text-white px-1.5 py-0.2">
                        i
                      </button>
                    }
                    position="bottom right"
                    on="hover"
                    repositionOnResize="true"
                  >
                    <div className="text-xs text-black ">
                      The string is not a valid input
                    </div>
                  </Popup>
                ) : null || isEmpty ? (
                  <Popup
                    trigger={
                      <button className=" bg-rose-500 rounded-full text-xs font-bold text-white px-1.5 py-0.2">
                        i
                      </button>
                    }
                    position="bottom right"
                    on="hover"
                    repositionOnResize="true"
                  >
                    <div className="text-xs text--black ">
                      Enter input value
                    </div>
                  </Popup>
                ) : null}
              </p>
            </div>
            <input
              type="text"
              className={`border ${
                (isError || isString) &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"
              } rounded-md h-10 lg:w-[100px] text-slate-400 mb-4 w-20 xxs:w-28 xl:w-28 focus:outline-none px-2 py-2 xxs:text-sm text-xs dark:text-slate-400`}
              placeholder="Enter Value"
              value={input}
              onChange={handleInput}
            />
          </div>
          <div className="text-sm">
            <span className="px-[12px] py-0.8 xl:pt-4 text-sm xl:w-36 text-teal-500 font-medium">
              {output.toFixed(3) + " " + to.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
      <div className=" flex justify-center xl:mt-3 dark:text-white">
        <button
          type="button"
          className="bg-blue-400 text-sm px-1 py-1 sm:px-4 h-8 text-white font-bold rounded-md xl:px-6 xl:py-1 mt-2 transition duration-300 hover:bg-blue-500 focus:outline-none focus:shadow-outline dark:bg-blue-400"
          onClick={(e) => {
            handleButton();
          }}
        >
          Exchange
        </button>
      </div>
    </div>
  );
}
export default ExchangeCoins;

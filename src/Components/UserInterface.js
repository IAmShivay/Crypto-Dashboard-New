import React from "react";
import CurrencyDrop from "./CurrencyDrop";
import MainChart from "./Chart/MainChart";
import MarketCap from "./Coin/MarketCap";
import ExchangeCoins from "./ExchangeCoin";
import Portfolio from "./Portfolio";
import SearchBar from "./SearchBar";
import NavBar from "./Navbar/Navbar";
import { useSelector } from "react-redux";
// FinalUI is the main component that renders all other components

function FinalUI() {
    // useSelector hook is used to access the "darkMode" state from the store

  const darkMode = useSelector((state) => state.darkMode);

  return (

    <div className={darkMode ? "dark" : ""}>
      <NavBar />
      <hr />
      <div className="p-6 md:px-10 lg:flex dark:bg-slate-800 bg-slate-100 place-content-between">

        <div className="lg:w-screen">

          <div className="space-x-6 flex">
            <div className="w-28 h-10 bg-white dark:bg-gray-700 flex justify-center drop-shadow rounded-md border border-neutral-200">
            <hr />
              <CurrencyDrop /> 

              {/* Component for currency dropdown */}
              
            </div>

            <div className="h-10 w-full">
              <SearchBar />

              {/* Component for search bar */}

            </div>
          </div>

          <div className="dark:bg-gray-700 mt-6 bg-white drop-shadow rounded-md h-[30rem] border border-neutral-200">
            <div>
              <MainChart />

              {/* Component for main chart */}

            </div>
          </div>

          <div className="md:flex md:space-x-6 md:space-y-0 mt-6 space-y-6 w-full xl:h-64">
            <div className="dark:bg-gray-700 border border-neutral-200 rounded-md bg-white drop-shadow  h-48 md:w-screen lg:h-48 lg:w-full xl:h-full">
              <Portfolio />

              {/* Component for portfolio */}

            </div>

            <div className="dark:bg-gray-700 border border-neutral-200 rounded-md bg-white drop-shadow h-48 md:w-screen lg:h-48 lg:w-full xl:h-full mx-auto">
              <ExchangeCoins />

              {/* Component for exchange coins */}

            </div>
          </div>
        </div>

        <div className="lg:w-screen lg:max-w-sm">
          <div>
            <div className="mt-6 lg:mt-0 lg:ml-6">
              <div className="border rounded-md bg-white dark:bg-gray-700 drop-shadow">
                <MarketCap />

                {/* Component for market cap */}

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FinalUI;

// Exporting the component to use in another components

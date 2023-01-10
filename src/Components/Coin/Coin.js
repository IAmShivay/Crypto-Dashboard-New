import React from "react";

const Coin = ({ name, marketcap, image, priceChange, currencyVal }) => {

  let currencyType;
  if (currencyVal === "usd") {
    currencyType = "$";
  } else if (currencyVal === "inr") {
    currencyType = "Rs";
  } else if (currencyVal === "eur") {
    currencyType = "\u20AC";
  }

  return (

    <div className="group hover:scale-105 hover:shadow-xl hover:shadow-blue-100 dark:hover:shadow-lg dark:hover:shadow-blue-400 transition-all duration-200">
      <div className="flex place-content-between mb-2 lg:mb-[12px] xl:pt-1 border-b-2">
        <div className="px-4 group">
          <div className="coin flex ">
            <img className="w-4 mr-2 self-center" src={image} alt="crypto" />
            <h1 className="dark:text-gray-50 self-center font-semibold text-sm tracking-widest group-hover:text-blue-600 dark:group-hover:text-blue-400 dark:group-hover:delay-100 group-hover:delay-100">
              {name}
            </h1>
          </div>

          <div className="xl:pb-1">
            <p className="dark:text-zinc-300 text-zinc-400 font-semibold text-[10px] tracking-widest mb-[14px] group-hover:text-blue-600  dark:group-hover:text-blue-400 dark:group-hover:delay-100 group-hover:delay-100 ml-6">
              Mkt.Cap {currencyType} {marketcap.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="font-semibold tracking-wider text-xs place-items-center mt-[2px] px-4">
          {priceChange < 0 ? (
            <p className="text-rose-500 dark:text-rose-400">
              <span className="">&#9660;</span>
              {priceChange.toFixed(2)} %
            </p>
          ) : (
            <p className="text-emerald-500 dark:text-emerald-400">
              <span className="mr-2">&#9650;</span>
              {priceChange.toFixed(2)} %
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;

import React from "react";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import {actionCreators} from '../../Redux/index'
import AgoDays from "./AgoDays";
import CryptoDropdown from "./CryptoDropDown";
import ChartDropdown from "./ChartDropdown";
import Chart from "./Chart";

export default function MainChart() {

  const dispatch = useDispatch();
  const {updateFirstChartData,updateSecondChartData} = bindActionCreators(actionCreators,dispatch);
  const currency = useSelector((state) => state.CryptoCurrency);
  const agoDays = useSelector((state) => state.daysAgo);
  const cryptoCurrency = useSelector((state) => state.cryptoCurrency);

  useEffect(() => {

    const url = `https://api.coingecko.com/api/v3/coins/${cryptoCurrency[0]}/market_chart?vs_currency=${currency}&days=${agoDays}&interval=daily`;
    fetch(url).then((data) => {
      data.json().then((resp) => {
        updateFirstChartData(resp.prices);
      });
    });
  }, []);

  useEffect(() => {
    if (cryptoCurrency[0] !== undefined) {
      fetchData1(cryptoCurrency[0]);
    }
    if (cryptoCurrency[1] !== undefined) {
      fetchData2(cryptoCurrency[1]);
    }
  }, [agoDays, currency,cryptoCurrency]);

  const fetchData1 = (crypto) => {
    const url = `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${currency}&days=${agoDays}&interval=daily`;
    fetch(url).then((data) => {
      data.json().then((resp) => {
        updateFirstChartData(resp.prices);
      });
    });
  };

  const fetchData2 = (crypto) => {
    const url = `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${currency}&days=${agoDays}&interval=daily`;
    fetch(url).then((data) => {
      data.json().then((resp) => {
        updateSecondChartData(resp.prices);
      });
    });
  };

  return (
    <BrowserRouter>
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <div className="flex flex-col h-36 xs:h-28 w-[17rem] xs:w-[22rem] xs2:w-[26rem] sm:w-[32rem] sm:self-center md:w-[40rem] xl:flex-row xl:h-24 xl:items-center xl:justify-end xl:w-[52rem] 2xl:w-[58rem]">
            <div className="w-full md:w-1/2 my-3 px-2 self-center xl:my-0">
              <AgoDays />
            </div>

            <div className="flex flex-col xs2:flex-row w-full px-2 xs2:px-0 xs2:justify-center xl:justify-end xl:pr-2">
              <div className="self-end xs2:mr-2">
                <CryptoDropdown />
              </div>
              <div className="z-10 self-end my-1 xs2:my-0">
                <ChartDropdown />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Chart />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

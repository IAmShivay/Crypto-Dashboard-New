import React, { useState, useEffect } from "react";
import axios from "axios";
import numeral from "numeral";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useSelector } from "react-redux";

Chart.register(...registerables);

const Portfolio = () => {
  const currencyVal = useSelector((state) => state.CryptoCurrency);

  const darkMode = useSelector((state) => state.darkMode);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyVal}&order=market_cap_desc&per_page=250&page=1&sparkline=false`;

  let currencyType;
  if (currencyVal === "usd") {
    currencyType = "$";
  } else if (currencyVal === "inr") {
    currencyType = "₹";
  } else if (currencyVal === "eur") {
    currencyType = "\u20AC";
  }

  const [chartData, setChartData] = useState([]);

  const fetchTopCoins = () => {
    axios
      .get(url)
      .then((response) => {
        setChartData(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTopCoins();
  }, [currencyVal]);

  
  const majorValues = chartData
    .sort((a, b) => b.market_cap - a.market_cap)
    .slice(0, 3)
    .map((coin) => coin.market_cap);

  let sum = 0;
  majorValues.forEach((element) => {
    sum += element;
  });

  const data = {
   
    labels: chartData
      .sort((a, b) => b.market_cap - a.market_cap)
      .slice(0, 3)
      .map((coin) => coin.name),
    datasets: [
      {
        data: chartData
          .sort((a, b) => b.market_cap - a.market_cap)
          .slice(0, 3)
          .map((coin) => coin.market_cap),

        backgroundColor: [
          "rgb(248, 131, 121)",
          "rgb(54, 162, 235)",
          "rgb(159, 226, 191)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
    },
    plugins: {
      legend: {
        position: "right",
        display: true,

        labels: {
          usePointStyle: true,
          color: darkMode ? "white" : "black",
          font: {
            size: 12,
          },
        },
      },

      datalabels: {
        display: true,

        align: "center",
        labels: {
          title: {
            font: {
              weight: "bold",
              size: 11,
            },
          },
        },
        formatter: (value) => numeral(value / 300000000).format(`E0,0`),
      },
    },
  };

  return (
    <div className="px-4">
      <div className="flex place-content-between pt-2 xl:pb-2 xl:pt-4">
        <h1 className="dark:text-gray-50 font-bold font-mono text-zinc-700 text-lg xl:text-2xl ">
          Portfolio
        </h1>
        <h1>
          <span className="text-sm font-medium text-slate-400 mx-1">
            Total value :
          </span>
          <span className="font-medium dark:text-gray-100">
            {currencyType} {Math.round(sum /300000000)}
          </span>
        </h1>
      </div>
      <div className="pt-0 w-52 h-36 xl:w-96 xl:h-44 mx-auto">
        <Pie data={data} options={options} plugins={[ChartDataLabels]} />
      </div>
    </div>
  );
};

export default Portfolio;

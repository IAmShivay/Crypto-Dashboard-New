import React, { useState, useEffect } from "react";
import axios from "axios"; // import axios to make API calls
import numeral from "numeral"; // import numeral to format large numbers
import { Chart, registerables } from "chart.js"; // import chart.js to create charts
import { Pie } from "react-chartjs-2"; // import react-chartjs-2 to use chart.js with React
import ChartDataLabels from "chartjs-plugin-datalabels"; // import chartjs-plugin-datalabels to add labels to chart.js
import { useSelector } from "react-redux";

Chart.register(...registerables);
// register registerables with chart.js

const Portfolio = () => {
  // useSelector hook is used to access the "currencyVal" and "darkMode" state from the store

  const currencyVal = useSelector((state) => state.CryptoCurrency);

  const darkMode = useSelector((state) => state.darkMode);
  // url to fetch top 250 coins based on market cap

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyVal}&order=market_cap_desc&per_page=250&page=1&sparkline=false`;
  // variable to store currency type

  let currencyType;
  // check currencyVal and assign the currency type

  if (currencyVal === "usd") {
    currencyType = "$";
  } else if (currencyVal === "inr") {
    currencyType = "₹";
  } else if (currencyVal === "eur") {
    currencyType = "\u20AC";
  }
  // useState hook to store the chart data

  const [chartData, setChartData] = useState([]);
  // function to fetch top 250 coins based on market cap

  const fetchTopCoins = () => {
    axios.get(url).then((response) => {
      setChartData(response.data);
    }); // set the chartData state with the API response
  };
  // useEffect hook to fetch top coins when the component mounts and when the currencyVal state changes
  useEffect(() => {
    fetchTopCoins();
  }, [currencyVal]);

  // get the top 3 coins' market cap

  const majorValues = chartData
    .sort((a, b) => b.market_cap - a.market_cap)
    .slice(0, 3)
    .map((coin) => coin.market_cap);
  // calculate the total value of the top 3 coins

  let sum = 0;
  majorValues.forEach((element) => {
    sum += element;
  });
  // chart data

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
  // chart options
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
          color: darkMode ? "white" : "black", // changes the legend text color based on the darkMode state
          font: {
            size: 12,
          },
        },
      },

      datalabels: {
        display: true,

        align: "center", // aligns the labels in the center of the slice
        labels: {
          title: {
            font: {
              weight: "bold",
              size: 11,
            },
          },
        },
        formatter: (value) => numeral(value / 300000000).format(`E0,0`), // format the value to a more readable format
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
            {currencyType} {Math.round(sum / 300000000)}
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

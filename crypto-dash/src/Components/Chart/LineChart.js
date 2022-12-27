import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const currencyVal = useSelector((state) => state.CryptoCurrency);
  const daysAgo = useSelector((state) => state.daysAgo);
  const cryptoCurrency = useSelector((state) => state.cryptoCurrency);
  const chartData1 = useSelector((state) => state.updateFirstChartData);
  const chartData2 = useSelector((state) => state.updateSecondChartData);
  const darkMode = useSelector((state) => state.darkMode);

  const labels = [];

  let dateStyle = {
    weekday: "short",
  };
  if (daysAgo < 7) {
    dateStyle = {
      hour: "2-digit",
      weekday: "short",
    };
  } else if (daysAgo > 7) {
    dateStyle = {
      month: "short",
    };
  }

  chartData1.forEach((element) => {
    let date = new Date(element[0]).toLocaleDateString("en-US", dateStyle);
    labels.push(date);
  });

  const capitalizeFirstLetter = (cryptoLabel) => {
    return cryptoLabel[0].toUpperCase() + cryptoLabel.slice(1);
  };

  let dataset1 = {
    label: "",
    backgroundColor: "transparent",
    borderColor: "transparent",
  };
  let dataset2 = {
    label: "",
    backgroundColor: "transparent",
    borderColor: "transparent",
  };

  if (cryptoCurrency[0] !== undefined) {
    dataset1 = {
      label:
        cryptoCurrency[0] !== undefined
          ? capitalizeFirstLetter(cryptoCurrency[0])
          : "",
      data: chartData1 !== undefined ? chartData1.map((data) => data[1]) : "",
      backgroundColor:
        cryptoCurrency[0] !== undefined
          ? darkMode
            ? "rgba(255,215,0,0.2)"
            : "rgba(54, 162, 235, 0.2)"
          : "white",
      borderColor:
        cryptoCurrency[0] !== undefined ? (darkMode ? "gold" : "blue") : "none",
      borderWidth: cryptoCurrency[0] !== undefined ? 2 : "none",
      pointRadius: 0,
      pointHitRadius: 60,
    };
  }

  if (cryptoCurrency[1] !== undefined) {
    dataset2 = {
      label:
        cryptoCurrency[1] !== undefined
          ? capitalizeFirstLetter(cryptoCurrency[1])
          : "",
      data: chartData2 !== undefined ? chartData2.map((data) => data[1]) : "",
      backgroundColor:
        cryptoCurrency[1] !== undefined
          ? darkMode
            ? "rgba(0,255,255,0.2)"
            : "rgba(255, 99, 132, 0.2)"
          : "white",
      borderColor:
        cryptoCurrency[1] !== undefined ? (darkMode ? "cyan" : "red") : "none",
      borderWidth: cryptoCurrency[1] !== undefined ? 2 : "none",
      pointRadius: 0,
      pointHitRadius: 60,
    };
  }

  const toolTipTitle = (toolTipItems) => {
    const titles = [];
    chartData1.forEach((element) => {
      let date = new Date(element[0]).toLocaleDateString("en-US", {
        dateStyle: "long",
      });
      titles.push(date);
    });
    return titles[toolTipItems[0].dataIndex];
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          color: darkMode ? "white" : "black",
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 9,
          boxHeight: 9,
          padding: 14,
          font: {
            size: 15,
            weight: "500",
          },
        },
      },
      tooltip: {
        yAlign: "bottom",
        xAlign: "right",
        callbacks: {
          title: toolTipTitle,
        },
      },
      title: {
        display: true,
        text: currencyVal.toUpperCase(),
        align: "start",
        color: darkMode ? "white" : "black",
        font: {
          size: 15,
          weight: "700",
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        type: "logarithmic",
        ticks: {
          color: darkMode ? "white" : "black",
          font: {
            size: 11,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: darkMode ? "white" : "black",
          maxTicksLimit: 8,
          maxRotation: 0,
          minRotation: 0,
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return (
    <Line
      data={{
        labels: labels,
        datasets: [dataset1, dataset2],
      }}
      options={options}
    />
  );
}

export default LineChart;

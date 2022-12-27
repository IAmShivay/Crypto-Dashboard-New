import React from "react";
import Multiselect from "multiselect-react-dropdown";
import "../../Style/CryptoDrop.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux/index";

const CryptoCurrencyDropdown = () => {

  const dispatch = useDispatch();
  
  const { updateCryptoCurrency, removeCryptoCurrency } = bindActionCreators(
    actionCreators,
    dispatch
  );

  
  const darkMode = useSelector((state) => state.darkMode);
  

  const dropdownMenuBgColor = darkMode ? "rgb(156 163 175)" : "#F9FAFB";
  const dropdownOptionBoxBgColor = darkMode ? "rgb(156 163 175)" : "white";
  const dropdownOptionTextColor = darkMode ? "rgb(249,250,251)" : "grey";

  const [cryptoData, setCryptoData] = useState([]);

 
  const capitalizeFirstLetter = (cryptoName) => {
    return cryptoName[0].toUpperCase() + cryptoName.slice(1);
  };


  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false";

  const fetchTopCoins = () => {
    axios
      .get(url, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setCryptoData(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTopCoins();
  }, []);

  const cryptoList = cryptoData
    .sort((a, b) => b.market_cap - a.market_cap)
    .slice(0, 15)
    .map((coin) => capitalizeFirstLetter(coin.id));

  return (
    <Multiselect
      id="crypto_css"
      isObject={false}
      options={cryptoList}
      onSelect={updateCryptoCurrency}
      onRemove={removeCryptoCurrency}
      showCheckbox={true}
      showArrow={true}
      selectedValues={[cryptoList[0]]}
      selectionLimit={2}
      avoidHighlightFirstOption={true}
      onSearch={false}
      className="shadow-sm shadow-slate-400 rounded-lg z-20"
      style={{

        chips: {
          borderBottom: "3px solid rgb(31 41 55)",
          marginBottom: "0px",
          borderRadius: "0.25rem",
          background: "rgb(75 85 99)",
          color: "white",
          fontWeight: "500",
        },

        multiselectContainer: {
          color: "black",
        },

        searchBox: {
          border: "1px solid #94a3b8",
          borderRadius: "8px",
          background: `${dropdownMenuBgColor}`,
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          color: "black",
        },

        option: {
          color: `${dropdownOptionTextColor}`,
          fontSize: "1rem",
          fontWeight: "500",
        },

        optionContainer: {
          border: "none",
          backgroundColor: `${dropdownOptionBoxBgColor}`,
          height: "13.5rem",
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.2)",
        },
      }}
    />
  );
};

export default CryptoCurrencyDropdown;

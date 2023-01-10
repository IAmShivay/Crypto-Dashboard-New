export const updateCurrencyValue = (currencyValue) => {
    return (dispatch) => {
      dispatch({
        type: "updateCurrencyValue",
        payload: currencyValue.target.value,
      });
    };
  };
  
  export const searchFilter = (searchValue) => {
    return (dispatch) => {
      dispatch({
        type: "filter",
        payload: searchValue.target.value,
      });
    };
  };
  
  export const updateAgoDays = (daysAgoVal) => {
    return (dispatch) => {
      dispatch({
        type: "updateAgoDays",
        payload: daysAgoVal,
      });
    };
  };
  
  export const updateCryptoCurrency = (list, item) => {
    return (dispatch) => {
      dispatch({
        type: "updateCrypto",
        payload: { list, item },
      });
    };
  };
  
  export const removeCryptoCurrency = (list, item) => {
    return (dispatch) => {
      dispatch({
        type: "removeCrypto",
        payload: { list, item },
      });
    };
  };
  
  export const updateFirstChartData = (data) => {
    return (dispatch) => {
      dispatch({
        type: "updateFirstChartData",
        payload: data,
      });
    };
  };
  
  export const updateSecondChartData = (data) => {
    return (dispatch) => {
      dispatch({
        type: "updateSecondChartData",
        payload: data,
      });
    };
  };
  export const updateDarkMode = (modeVal) => {
    return (dispatch) => {
      dispatch({
        type: "UPDATE_MODE",
        payload: modeVal,
      });
    };
  };
  
  
  
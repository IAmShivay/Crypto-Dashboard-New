// updateCurrency function takes currencyValue as input and it returns a function that calls the 'dispatch' function with an object that has a 'type' property as "updateCurrencyValue" and a 'payload' property as currencyValue.target.value.

export const updateCurrencyValue = (currencyValue) => {
  return (dispatch) => {
    dispatch({
      type: "updateCurrencyValue",
      payload: currencyValue.target.value,
    });
  };
};

// searchFilter function takes searchValue as input and it returns a function that calls the 'dispatch' function with an object that has a 'type' property as "filter" and a 'payload' property as searchValue.target.value

export const searchFilter = (searchValue) => {
  return (dispatch) => {
    dispatch({
      type: "filter",
      payload: searchValue.target.value,
    });
  };
};

// updateAgoDays function takes daysAgoVal as input and it returns a function that calls the 'dispatch' function with an object that has a 'type' property as "updateAgoDays" and a 'payload' property as daysAgoVal

export const updateAgoDays = (daysAgoVal) => {
  return (dispatch) => {
    dispatch({
      type: "updateAgoDays",
      payload: daysAgoVal,
    });
  };
};

// updateCryptoCurrency function takes list and item as input and it returns a function that calls the 'dispatch' function with an object that has a 'type' property as "updateCrypto" and a 'payload' property as { list, item }

export const updateCryptoCurrency = (list, item) => {
  return (dispatch) => {
    dispatch({
      type: "updateCrypto",
      payload: { list, item },
    });
  };
};

// removeCryptoCurrency function takes list and item as input and it returns a function that calls the 'dispatch' function with an object that has a 'type' property as "removeCrypto" and a 'payload' property as { list, item }

export const removeCryptoCurrency = (list, item) => {
  return (dispatch) => {
    dispatch({
      type: "removeCrypto",
      payload: { list, item },
    });
  };
};

// updateFirstChartData function takes data as input and it returns a function that calls the 'dispatch' function with an object that has a 'type' property as "updateFirstChartData" and a 'payload' property as data

export const updateFirstChartData = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateFirstChartData",
      payload: data,
    });
  };
};

// updateSecondChartData function takes data as input and it returns a function that calls the 'dispatch' function with an object that has a 'type' property as "updateSecondChartData" and a 'payload' property as data

export const updateSecondChartData = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateSecondChartData",
      payload: data,
    });
  };
};

// updateDarkMode function takes modeVal as input and it returns a function that calls the 'dispatch' function with an object that has a 'type' property as "UPDATE_MODE" and a 'payload' property as modeVal

export const updateDarkMode = (modeVal) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_MODE",
      payload: modeVal,
    });
  };
};

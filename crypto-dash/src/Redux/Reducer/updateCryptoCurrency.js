  
  const updateCryptoCurrency = (state = "usd", action) => {
    if (action.type === "updateCryptoCurrency") {
      return action.payload;
    } else {
      return state;
    }
  };

  export default updateCryptoCurrency;
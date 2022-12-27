const updateSecondChartData = (state = [], action) => {
    if (action.type === "updateSecondChartData") {
      return action.payload;
    } else {
      return state;
    }
  };

  export default updateSecondChartData;
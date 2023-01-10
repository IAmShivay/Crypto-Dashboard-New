const updateFirstChartData = (state = [], action) => {
    if (action.type === "updateFirstChartData") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default updateFirstChartData;
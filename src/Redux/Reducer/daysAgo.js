const daysAgoReducer = (state = "7", action) => {
    if (action.type === "updateAgoDays") {
      console.log("hurraayyy")
      return action.payload;
    } else {
      return state;
    }
  };

  export default daysAgoReducer;
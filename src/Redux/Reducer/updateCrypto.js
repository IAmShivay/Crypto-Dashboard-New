  
const updateCrypto = (state = ["bitcoin"], action) => {
  if (action.type === "updateCrypto") {
    console.log(action.payload.list);
    return action.payload.list.map((data) => data.toLowerCase());
  } else if (action.type === "removeCrypto") {
    console.log(action.payload.list);
    return action.payload.list.map((data) => data.toLowerCase());
  } else {
    return state;
  }
};

export default updateCrypto;

  
const updateCrypto = (state = ["bitcoin"], action) => {
  if (action.type === "updateCrypto") {
    
    return action.payload.list.map((data) => data.toLowerCase());
  } else if (action.type === "removeCrypto") {
    
    return action.payload.list.map((data) => data.toLowerCase());
  } else {
    return state;
  }
};

export default updateCrypto;

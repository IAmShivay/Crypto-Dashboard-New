import { combineReducers } from "redux";
import updateCryptoCurrency from './updateCryptoCurrency';
import daysAgoReducer from "./daysAgo";
import searchReducer from './searchReducer'
import updateCrypto from './updateCrypto'
import updateSecondChartData from "./updateSecondChartData";
import updateFirstChartData from './updateFirstChartData'
import updateDarkMode from './darkModeReducer'

const reducers = combineReducers({
    CryptoCurrency: updateCryptoCurrency,
    search: searchReducer,
    daysAgo: daysAgoReducer,
    cryptoCurrency: updateCrypto,
    updateFirstChartData: updateFirstChartData,
    updateSecondChartData: updateSecondChartData,
    darkMode: updateDarkMode
});

export default reducers;
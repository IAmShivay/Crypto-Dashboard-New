import React from "react"; // Import the React library

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"; // Import the 'Provider' component and 'store' from the react-redux library

import { store } from "./Redux/Store/store";
// create a 'root' constant by calling the 'createRoot' method on ReactDOM,
// passing in the root element from the HTML document
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the JSX element that wraps the <App /> component with the Provider component,

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

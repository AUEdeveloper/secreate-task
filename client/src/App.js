import React, { useState } from "react";
import "./App.css";

// Redux
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

// Components
import Header from "./components/Header";
import ShopTable from "./components/ShopTable";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const App = () => {
  const [currency, setCurrency] = useState("RUB");

  return (
    <Provider store={store}>
      <div className="App">
        <Header handleChange={setCurrency} />
        <ShopTable currency={currency} />
      </div>
    </Provider>
  );
};

export default App;

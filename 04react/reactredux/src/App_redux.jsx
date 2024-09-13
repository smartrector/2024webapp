import React from "react";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <Provider store={store}>
      <div>App</div>
      <Counter />
    </Provider>
  );
}

export default App;

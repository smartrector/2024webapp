import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initalData = {
  cart: [],
};

const reducer = (state = initalData, action) => {
  return state;
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div>shop</div>
      <hr />
      <ProductList />
      <hr />
      <Cart />
    </Provider>
  );
}

const products = [
  { id: 1, name: "product1" },
  { id: 2, name: "product2" },
  { id: 3, name: "product3" },
  { id: 4, name: "product4" },
];

function ProductList() {
  return (
    <>
      <div>product</div>
      {products.map((item, i) => {
        return (
          <div>
            {item.id} / {item.name}
          </div>
        );
      })}
    </>
  );
}

function Cart() {
  return (
    <>
      <div>cart</div>
    </>
  );
}

export default App;

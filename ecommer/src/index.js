import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { UserProvider } from "./context/user_context";
import { CartProvider } from "./context/cart_context";
import { FilteredProvider } from "./context/filter_context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <FilteredProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilteredProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);

import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

import "./App.css";
const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;

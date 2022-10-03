import { AnimatePresence } from "framer-motion";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  HomePage,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Fragment>
        <AnimatePresence exitBeforeEnter>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/products" element={<Products />}>
              {" "}
            </Route>
            <Route path="/products/:id" element={<SingleProduct />}>
              {" "}
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </AnimatePresence>
      </Fragment>
    </Router>
  );
};

export default App;

import React, { useContext, useEffect, useState, useReducer } from "react";
import reducer from "../reducers/product_reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

const initialState = {
  isSidebarOpen: false,
};

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
};

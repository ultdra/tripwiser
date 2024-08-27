"use client"; // This is important to mark this as a Client Component

import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store";

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;

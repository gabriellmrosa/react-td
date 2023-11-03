"use client";

import { store } from "@/configureStore";
import MapOne from "@/maps/mapOne";
import React from "react";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <MapOne />
    </Provider>
  );
}

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    aliens: aliensReducer,
    towers: towersReducer,
  },
});

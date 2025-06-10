import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./notificationSLice";

export const Mystore = configureStore({
  reducer: {
    notifications: notificationReducer,
  },
});

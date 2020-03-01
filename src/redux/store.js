import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";
import { phoneBookReducer } from "./reducers";

export const store = configureStore({ reducer: phoneBookReducer }, devToolsEnhancer());

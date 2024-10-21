import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cartReducer from "./slices/cartSlice";
import cartSaga from "./sagas/cartSagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(cartSaga);

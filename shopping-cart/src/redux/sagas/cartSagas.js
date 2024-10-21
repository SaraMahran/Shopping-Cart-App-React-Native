import { put, takeEvery, call } from "redux-saga/effects";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../slices/cartSlice";

// Simulate fetching data from an API
const fetchProductsApi = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        { id: 1, name: "Headphones", price: 100 },
        { id: 2, name: "Watch", price: 200 },
      ]);
    }, 1000)
  );

function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

export default function* cartSaga() {
  yield takeEvery(fetchProductsRequest.type, fetchProductsSaga);
}

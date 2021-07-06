import { ADD_TODO } from "./actions";

import { takeEvery } from "redux-saga/effects";

export function* addTodo() {
  yield takeEvery(ADD_TODO, function* (action) {
    // Perform async operations before calling the reducer
  });
}

export default function* () {
  yield* addTodo();
}

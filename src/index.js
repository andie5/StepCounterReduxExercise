import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import StepCounter from "./StepCounter";
export const ADD_STEP = "ADD_STEP";
export const RESET_STEPS = "RESET_STEPS";

const initialState = {
  steps: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STEP:
      return { steps: state.steps + 1 };
    case RESET_STEPS:
      return { steps: 0 };
    default:
      return state;
  }
}

export function addStep() {
  return { type: ADD_STEP };
}

export function resetSteps() {
  return { type: RESET_STEPS };
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <StepCounter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

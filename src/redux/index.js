import {connect} from "react-redux";
import thunk from "redux-thunk";
import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  createStore,
  compose,
} from "redux";

import {testReducer} from "./test";

import * as TestActions from "./test";

let store = null;

const reducers = combineReducers({
  test: testReducer,
});

const actions = {
  ...TestActions
};

console.log("Hello", window.__REDUX_DEVTOOLS_EXTENSION__);

export function setupStore() {
  if (store !== null) {
    return store;
  }

  store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk),
      typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );

  return store;
}

export function fetchStore() {
  if (store === null) {
    return console.error("Store was not created");
  }

  return store;
}

export function setupReduxConnection(getProps) {
  function mapStateToProps(state) {
    if (Array.isArray(getProps)) {
      return getProps.reduce((dict, item) => {
        dict[item] = state[item];

        return dict;
      }, {});
    }

    return getProps(state);
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps, null, {
    forwardRef: true,
  });
}

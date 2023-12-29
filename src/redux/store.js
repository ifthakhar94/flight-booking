import { createStore, compose } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./reducer";
const storeEnhancers = compose(
  devToolsEnhancer({ trace: true })
  // You can add other store enhancers if needed
);
const store = createStore(rootReducer, storeEnhancers);

export default store;

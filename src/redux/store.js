import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import MoviesReducer from "./reducers";

const rootReducer = combineReducers({MoviesReducer});
export const Store = createStore(rootReducer,applyMiddleware(thunk))
import { combineReducers } from "redux";
import { jokesReducer } from "./jokesReducer";

export const rootReducer = combineReducers({
    jokes: jokesReducer,

})
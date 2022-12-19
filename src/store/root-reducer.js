import { combineReducers } from "redux";
import { positionReducer } from "./postitions/position-reducer";
import { filterReducer } from "./filters/filter-reducer";

export const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer,
});
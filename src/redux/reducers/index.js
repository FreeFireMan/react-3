import {counterReducer} from './counter-reducer';
import {combineReducers} from "redux";

export const reducer = combineReducers({counter: counterReducer});

import {combineReducers} from "redux";
import amountReducer from "./amountReducers";
//COMBINES ALL THE REDUCERS IN AN APPLICATION
const reducers=combineReducers({
    amount:amountReducer
})
export default reducers;
import peru from "./searchReducer.jsx"
import player from "./cricketerReducer.jsx"
import {combineReducers} from "redux"
const k=combineReducers({peru,player});
export default k;
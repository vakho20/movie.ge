import counterReducer from "./counter"
import { combineReducers } from "redux"
const allreducer = combineReducers({
    counter:counterReducer,
})
export default allreducer;
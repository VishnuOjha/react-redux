import { combineReducers  } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreaReducer from "./iceCreame/iceCreameReducer";
import cookieReducer from "./cookie/cookieReducer";


const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCreame : iceCreaReducer,
    cookie : cookieReducer
})

export default rootReducer
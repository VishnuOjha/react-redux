import { BUY_COOKIE } from "./cookieType"

const initialState = { 
    numberOfCookie : 50
}

const cookieReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_COOKIE : 
        return{
            ...state,
            numberOfCookie : state.numberOfCookie - 1
        }

        default : return state
    }
}

export default cookieReducer
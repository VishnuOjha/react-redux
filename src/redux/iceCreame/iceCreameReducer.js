import { BUY_ICE_CREAME } from "./iceCreameType"

const initialState = {
    numberOfIceCreame : 20
}

const iceCreaReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICE_CREAME :
            return{
                ...state,
                numberOfIceCreame : state.numberOfIceCreame - 1 
            } 

        default : return state
    }
}


export default iceCreaReducer
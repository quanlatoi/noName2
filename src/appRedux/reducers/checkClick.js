import * as types from '../constants/actionTypes'

let initialState = false;

const myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.IS_CLICKED:
            return !state;

        default: return state;
    }
}

export default myReducer
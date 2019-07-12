import * as types from '../constants/actionTypes';

let initialState = [];

const myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.VALUE_TAG:
            state = action.valueTag;
            return state;

        default: return state;
    }
}

export default myReducer
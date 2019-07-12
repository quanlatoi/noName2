import * as types from '../constants/actionTypes'

let initialState = [];

const myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.LIST_PICTURES:
            const pictures = action.pictures;
            state = pictures;
            return [...state];

        case types.POST_PICTURE:
            const picture = action.picture;
            state.push(picture);
            console.log(state)
            return [...state];

        default: return state;
    }
}

export default myReducer
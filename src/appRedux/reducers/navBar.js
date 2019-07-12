import * as types from '../constants/actionTypes';

let initialState = {
    controllMenu : false,
    hoverMenu : false
};

const myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.CONTROLL_MENU:
            state.controllMenu = !state.controllMenu;
            return {...state}

        case types.MOUSE_HOVER_IN_MENU:
            state.hoverMenu = !state.hoverMenu;
            return {...state}

        default: return state;
    }
}

export default myReducer
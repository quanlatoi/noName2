import * as types from '../constants/actionTypes';

export const listPictures = (pictures)=>{
    return {
        type: types.LIST_PICTURES,
        pictures
    }
}

export const getNewPicture = (picture)=>{
    return {
        type: types.POST_PICTURE,
        picture
    }
}

export const valueTag = (valueTag)=>{
    return {
        type: types.VALUE_TAG,
        valueTag
    }
}


export const checkClick = ()=>{
    return {
        type: types.IS_CLICKED
    }
}


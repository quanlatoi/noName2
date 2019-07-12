import * as types from '../constants/actionTypes';

import callAPI from '../../util/callAPI';

export const listPictures = (picture)=>{
    return {
        type: types.LIST_PICTURES,
        picture
    }
    // const jwt = JSON.parse(localStorage.getItem('token'));
    // callAPI('picture', 'GET', {}, {
    //     Authorization: `Bearer ${jwt}`,
    //     'Content-Type': 'application/json'
    // }).then((res)=>{
        
    // })
}
import { combineReducers } from 'redux';

import pictures from './pictures';
import isClicked from './checkClick';
import getValueTag from './getValueTag';
import navBar from './navBar';

const myReducer = combineReducers({
    pictures,
    getValueTag,
    isClicked,
    navBar
});

export default myReducer;
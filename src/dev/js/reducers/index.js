import React from 'react';
import {combineReducers} from 'redux';
import MenuButtonsReducer from './reducer-menu-buttons';

const allReducers = combineReducers({
   menuButtons: MenuButtonsReducer
});

export default allReducers;
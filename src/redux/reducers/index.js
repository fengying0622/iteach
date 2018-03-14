/*
* 主要用来合并reducer
* */
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'

import { user } from './user';
import { size } from './size';


const config = {
    key: 'root',
    storage,
};

export const appReducer = persistCombineReducers(config, {
    user: user,
    size: size,
});
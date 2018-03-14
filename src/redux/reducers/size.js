import * as actionTypes from '../constants/actionTypes';

export const size = (state={winWidth: 0, winHeight: 0}, action) => {
    switch (action.type){
        case actionTypes.SIDE_SIZE:
            return action.data;
        case actionTypes.WIN_SIZE:
            return action.data;
        default:
            return state;
    }
};
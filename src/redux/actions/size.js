import * as actionTypes from '../constants/actionTypes'

export const winSizeChange = ()=>{
    return {
        type: actionTypes.WIN_SIZE,
        data: {
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        }
    }
};
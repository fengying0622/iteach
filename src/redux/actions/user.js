import * as actionTypes from '../constants/actionTypes';

export const login = (user)=>{
    return (dispatch)=>{
        dispatch({
            type: actionTypes.USER_LOGIN,
            data: {
                user : user
            }
        })
    }
}
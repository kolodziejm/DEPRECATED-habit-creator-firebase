import * as actionTypes from '../actionTypes';

export const getUid = uid => {
    return {
        type: actionTypes.GET_UID,
        uid: uid
    }
}
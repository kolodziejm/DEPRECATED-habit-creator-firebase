import * as actionTypes from '../actionTypes';

const initialState = {
    authenticated: false,
    uid: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_UID:
            return {
                ...state,
                uid: action.uid,
                authenticated: true
            }

        default:
            return state;
    }
}

export default reducer;
import * as actionTypes from '../actionTypes';

const initialState = {
    authenticated: false,
    uid: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default reducer;
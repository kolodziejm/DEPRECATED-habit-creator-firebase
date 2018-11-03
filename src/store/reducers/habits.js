import * as actionTypes from '../actionTypes';

const initialState = {
    habits: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_HABITS:
            return {
                ...state,
                habits: action.habits
            }

        default:
            return state;
    }
}

export default reducer;
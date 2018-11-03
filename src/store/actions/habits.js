import * as actionTypes from '../actionTypes';

export const getHabits = (habits) => {
    return {
        type: actionTypes.GET_HABITS,
        habits: habits
    }
}
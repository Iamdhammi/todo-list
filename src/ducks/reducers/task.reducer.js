import * as t from '../types/index.types';

const initialState = {
    loading: false,
    tasks: []
}

const task = (state = initialState, action) => {
    switch (action.type) {
        case t.LOADING:
            return {
                ...state,
                loading: true,
            }
        case t.CREATE_TASK:
            return {
                ...state,
                loading: false,
                tasks: action.payload
            }
        case t.UPDATE_TASK:
            return {
                ...state,
                loading: false,
                tasks: action.payload
            }
        default:
            return state;
    }
}

export default task;
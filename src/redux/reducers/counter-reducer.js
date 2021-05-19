import {INCREMENT, DECREMENT, PLUS_HUNDRED, MINUS_HUNDRED} from '../action-types';

const initialState = {
    counter: 0
}

export const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state, counter: state.counter - 1
            }
        case PLUS_HUNDRED:
            return {
                ...state, counter: state.counter + 100
            }
        case MINUS_HUNDRED:
            return {
                ...state, counter: state.counter - 100
            }
        default:
            return state
    }
}

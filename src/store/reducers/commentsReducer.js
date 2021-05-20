import {COMMENT_DETAILS, SET_COMMENTS} from "../action-types";

const initialState = {
    comments: [],
    commentDetails: {}
}

const commentsReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return {
                ...state, comments: action.payload
            };
        case COMMENT_DETAILS:
            return {
                ...state, commentDetails: action.payload
            }
        default:
            return state
    }
}

export default commentsReducer
import {COMMENT_DETAILS, SET_COMMENTS} from "../action-types";

const initialState = {
    comments: [],
    commentDetails: {}
}

const commentsReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_COMMENTS:
            return {
                ...state, comments: payload
            };
        case COMMENT_DETAILS:
            return {
                ...state, commentDetails: payload
            }
        default:
            return state
    }
}

export default commentsReducer;

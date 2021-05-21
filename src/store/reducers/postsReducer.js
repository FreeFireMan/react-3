import {POST_DESCRIPTION, SET_POSTS} from '../action-types';

const initialState = {
    posts: [],
    description: {}
}

const postsReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_POSTS:
            return {
                ...state,
                posts: payload
            }
        case POST_DESCRIPTION:
            return {
                ...state,
                description: payload
            }
        default:
            return state
    }
}

export default postsReducer;


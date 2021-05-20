import {POST_DESCRIPTION, SET_POSTS} from '../action-types/posts-action-types'

const initialState = {
    posts: [],
    description: {}
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case POST_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            }
        default:
            return state
    }
}

export default postsReducer


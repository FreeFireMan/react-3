import {POST_DESCRIPTION, SET_POSTS} from "../action-types";

export const setPosts = (payload) => ({type: SET_POSTS, payload});
export const postDescription = (payload) => ({type: POST_DESCRIPTION, payload});

import {COMMENT_DETAILS, SET_COMMENTS} from "../action-types";

export const setComments = (payload) => (({type:SET_COMMENTS, payload}))
export const commentsDetails = (payload) => (({type:COMMENT_DETAILS, payload}))

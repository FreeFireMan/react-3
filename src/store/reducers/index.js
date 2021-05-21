import postsReducer from "./postsReducer";
import {combineReducers} from 'redux';
import commentsReducer from "./commentsReducer";

export default combineReducers({
    posts : postsReducer,
    comments : commentsReducer
});

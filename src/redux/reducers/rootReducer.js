import { combineReducers } from "redux";
import { postReducer } from '../reducers/postReducer'

export const rootReducer = combineReducers({
  posts: postReducer,
});

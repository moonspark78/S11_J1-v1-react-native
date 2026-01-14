import { combineReducers, createStore } from 'redux';
import likedImageReducer from './likedImageReducer';
import savedPostsReducer from './savedPostsReducer';
import feedReducer from './feedReducer';

const rootReducer = combineReducers({
  likedImages: likedImageReducer,
  savedPosts: savedPostsReducer,
  feed: feedReducer,
});

export const store = createStore(rootReducer);

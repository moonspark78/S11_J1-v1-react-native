import { configureStore } from '@reduxjs/toolkit';
import likedImageReducer from './likedImageReducer';
import savedPostsReducer from './savedPostsReducer';

export const store = configureStore({
  reducer: {
    likedImages: likedImageReducer,
    savedPosts: savedPostsReducer,
  },
});

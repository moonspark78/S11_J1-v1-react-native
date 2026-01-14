import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedPosts: [],
};

export const likedImageSlice = createSlice({
  name: 'likedImages',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const postId = action.payload;
      const index = state.likedPosts.findIndex(id => id === postId);
      
      if (index !== -1) {
        state.likedPosts.splice(index, 1);
      } else {
        state.likedPosts.push(postId);
      }
    },
  },
});

export const { toggleLike } = likedImageSlice.actions;
export default likedImageSlice.reducer;
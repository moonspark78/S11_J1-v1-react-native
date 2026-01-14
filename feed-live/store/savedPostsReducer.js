import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedPosts: [],
};

const savedPostsSlice = createSlice({
  name: 'savedPosts',
  initialState,
  reducers: {
    toggleSave: (state, action) => {
      const post = action.payload;
      const index = state.savedPosts.findIndex(p => p.id === post.id);

      if (index !== -1) {
        state.savedPosts.splice(index, 1);
      } else {
        state.savedPosts.push(post);
      }
    },
  },
});

export const { toggleSave } = savedPostsSlice.actions;
export default savedPostsSlice.reducer;

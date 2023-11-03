import { createSlice } from "@reduxjs/toolkit";

const enemySlice = createSlice({
  name: "enemys",
  initialState: [],
  reducers: {
    alienAdded(state, action) {
      state.push({
        id: action.payload.id,
        top: action.payload.top,
        left: action.payload.left,
        completed: false,
      });
    },
  },
});

export const { alienAdded } = enemySlice.actions;
export default enemySlice.reducer;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof enemySlice.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof enemySlice.dispatch;

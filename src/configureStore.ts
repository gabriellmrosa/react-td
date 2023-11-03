import { configureStore } from "@reduxjs/toolkit";
import enemySlice from "./enemy/enemySlice";

export const store = configureStore({
  reducer: {
    aliens: enemySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

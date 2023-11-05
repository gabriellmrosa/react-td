import { createSlice, current } from "@reduxjs/toolkit";
//import { v4 as uuidv4 } from "uuid";

// Define a type for the slice state
interface AlienProps {
  id?: string;
  life: number;
  left: number;
  top: number;
}

// Define the initial state using that type
const aliens = Array(5).fill({
  life: 100,
  left: 0,
  top: 0,
}) as AlienProps[];

const enemySlice = createSlice({
  name: "enemySlice",
  initialState: aliens,
  reducers: {
    refreshPositions(state, action) {
      return action.payload;
    },
  },
});

export const { refreshPositions } = enemySlice.actions;
export default enemySlice.reducer;

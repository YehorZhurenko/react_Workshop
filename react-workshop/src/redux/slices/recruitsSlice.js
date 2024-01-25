import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recs: [],
};

export const recruitsSlice = createSlice({
  name: 'recruits',
  initialState,
  reducers: {
    addRecruits: (state, action) => {
      state.recs.push(action.payload);
    },
    deleteRecruits: (state) => {
      state.recs.length = 0;
    },
  },
});

export const { addRecruits, deleteRecruits } = recruitsSlice.actions;
export default recruitsSlice.reducer;

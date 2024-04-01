import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recs: [],
  testValue: 368,
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
  selectors: {
    selectTestVal: (state) => state.testValue,
  },
});

export const { selectTestVal } = recruitsSlice.selectors;

console.log('testVal: ', selectTestVal({ recruits: { testValue: 222 } }));

export const { addRecruits, deleteRecruits } = recruitsSlice.actions;
export default recruitsSlice.reducer;

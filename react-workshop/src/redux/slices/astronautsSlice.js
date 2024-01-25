import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ready: [],
};

export const astronautsSlice = createSlice({
  name: 'astronauts',
  initialState,
  reducers: {
    addAstronauts: (state, action) => {
      state.ready.push(...action.payload);
    },
    deleteAstronauts: (state) => {
      state.ready.length = 0;
    },
  },
});

export const { addAstronauts, deleteAstronauts } = astronautsSlice.actions;
export default astronautsSlice.reducer;

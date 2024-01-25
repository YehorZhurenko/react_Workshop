import { configureStore } from '@reduxjs/toolkit';
import astronautsReducer from './slices/astronautsSlice';
import recuitsReducer from './slices/recruitsSlice';
import planetsReducer from './slices/planetsSlice';

export const store = configureStore({
  reducer: {
    astronauts: astronautsReducer,
    recruits: recuitsReducer,
    planets: planetsReducer,
  },
});

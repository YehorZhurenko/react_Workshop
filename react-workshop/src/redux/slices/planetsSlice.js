import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlanets = createAsyncThunk(
  'planets/fetchPlanets',

  async (_, thunkAPI) => {
    try {
      const res = await axios.get('https://64d4f976b592423e4694f8ad.mockapi.io/planets');
      const planetData = await res.data;
      console.log('thunkAPI: ', thunkAPI);
      console.log('thunkAPI.getState(): ', thunkAPI.getState());
      return planetData;
    } catch (error) {
      return thunkAPI.rejectWithValue(console.error());
    }
  },
);

export const deletePlanet = createAsyncThunk(
  'planets/deletePlanet',

  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://64d4f976b592423e4694f8ad.mockapi.io/planets/${id}`, {
        method: 'DELETE',
      });
      console.log('deleted: ', id);

      if (!res.ok) {
        throw new Error('Can\n`t delete this planet');
      }
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updatePlanet = createAsyncThunk(
  'planets/updatePlanet',

  async ({ id, planetName }, { rejectWithValue }) => {
    console.log(`https://64d4f976b592423e4694f8ad.mockapi.io/planets/${id} for ${planetName}`);
    try {
      const result = await fetch(`https://64d4f976b592423e4694f8ad.mockapi.io/planets/${id}`, {
        method: 'PUT',

        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name: planetName }),
      });

      const res = await fetch('https://64d4f976b592423e4694f8ad.mockapi.io/planets');
      const planetData = await res.json();

      return planetData;
    } catch (error) {
      rejectWithValue(console.error());
    }
  },
);

export const addPlanet = createAsyncThunk(
  'planets/addPlanet',

  async (planet) => {
    console.log(planet);
    try {
      await axios.post('https://64d4f976b592423e4694f8ad.mockapi.io/planets', planet);

      const res = await fetch('https://64d4f976b592423e4694f8ad.mockapi.io/planets');
      const planetData = await res.json();

      return planetData;

      //return planet;
    } catch (error) {
      console.error();
    }
  },
);

const initialState = {
  planets: [],
  status: null,
  error: null,
};

export const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    addPlanets: (state, action) => {
      state.planets.push(action.payload);
      console.log('action: ', action);
    },
    delPlanets: (state) => {
      state.planets.length = 0;
    },
    delPlanet: (state, action) => {
      state.planets = state.planets.filter((val) => val.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    //  fetchPlanets

    builder.addCase(fetchPlanets.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.planets = action.payload;
    });
    builder.addCase(fetchPlanets.rejected, (state, action) => {
      state.status = 'rejected';
      state.planets.error = action.payload;
    });
    builder.addCase(fetchPlanets.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });

    //  deletePlanet

    builder.addCase(deletePlanet.fulfilled, (state, action) => {
      state.status = 'resolved';
      const id = action.payload;
      state.planets = state.planets.filter((planet) => planet.id !== id);
    });

    builder.addCase(deletePlanet.rejected, (state, action) => {
      state.status = 'rejected';
      state.planets.error = action.payload;
    });

    builder.addCase(deletePlanet.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });

    //  addPlanet

    builder.addCase(addPlanet.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.planets = action.payload;
    });

    builder.addCase(addPlanet.rejected, (state, action) => {
      state.status = 'rejected';
      state.planets.error = action.payload;
    });

    builder.addCase(addPlanet.pending, (state, action) => {
      state.status = 'pending';
      state.error = null;
    });

    // Patch planet
  },
});

export const { addPlanets, delPlanets } = planetsSlice.actions;
export default planetsSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlanets = createAsyncThunk(
  'planets/fetchPlanets',

  async (_, thunkAPI) => {
    try {
      const res = await axios.get('https://64d4f976b592423e4694f8ad.mockapi.io/planets');
      const planetData = await res.data;

      {
        console.log('planetsSlice: ', planetsSlice);
        console.log('planetsSlice.actions: ', planetsSlice.actions);
        console.log('planetsSlice.caseReducers: ', planetsSlice.caseReducers);

        console.log('planetsSlice.getInitialState(): ', planetsSlice.getInitialState());
        console.log('planetsSlice.getSelectors(): ', planetsSlice.getSelectors());
        console.log('thunkAPI: ', thunkAPI);
      }

      return planetData;
    } catch (error) {
      return thunkAPI.rejectWithValue(console.error());
    }
  },
);

export const addPlanet = createAsyncThunk(
  'planets/addPlanet',

  async (planet) => {
    try {
      await axios.post('https://64d4f976b592423e4694f8ad.mockapi.io/planets', planet);

      const newState = await axios.get('https://64d4f976b592423e4694f8ad.mockapi.io/planets');

      return newState.data;
    } catch (error) {
      console.error();
    }
  },
);

export const deletePlanet = createAsyncThunk(
  'planets/deletePlanet',

  async (id, { rejectWithValue }) => {
    try {
      await fetch(`https://64d4f976b592423e4694f8ad.mockapi.io/planets/${id}`, {
        method: 'DELETE',
      });
      console.log('async del planet n', id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updatePlanet = createAsyncThunk(
  'planets/updatePlanet',

  async ({ id, planetName }, { rejectWithValue }) => {
    try {
      const result = await fetch(`https://64d4f976b592423e4694f8ad.mockapi.io/planets/${id}`, {
        method: 'PUT',

        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name: planetName }),
      });

      console.log(`planet ${id} got new name ${planetName} `);
    } catch (error) {
      rejectWithValue(console.error());
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
      console.log('planet added: ', action.payload);
    },
    delPlanets: (state) => {
      state.planets.length = 0;
      console.log('deleted all planets');
    },
    delPlanet: (state, action) => {
      state.planets = state.planets.filter((val) => val.id !== action.payload.id);
      console.log('deleted planet n', action.payload.id);
    },
  },
  extraReducers: (builder) => {
    //  fetchPlanets

    function handlePending(state, action) {
      state.status = 'pending';
      state.error = null;
    }

    function handleRejected(state, action) {
      state.status = 'rejected';
      state.error = action.payload;
    }

    // fetch planets

    builder.addCase(fetchPlanets.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.planets = action.payload;
    });
    builder.addCase(fetchPlanets.rejected, (state, action) => {
      handleRejected(state, action);
    });
    builder.addCase(fetchPlanets.pending, (state) => {
      handlePending(state);
    });

    //  deletePlanet

    builder.addCase(deletePlanet.fulfilled, (state, action) => {
      state.status = 'resolved';
      const id = action.payload;
      state.planets = state.planets.filter((planet) => planet.id !== id);
    });

    builder.addCase(deletePlanet.rejected, (state, action) => {
      handleRejected(state, action);
    });

    builder.addCase(deletePlanet.pending, (state) => {
      handlePending(state);
    });

    //  addPlanet

    builder.addCase(addPlanet.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.planets = action.payload;
    });

    builder.addCase(addPlanet.rejected, (state, action) => {
      handleRejected(state, action);
    });

    builder.addCase(addPlanet.pending, (state, action) => {
      handlePending(state);
    });
  },
});

export const planetsCount = (state) => state.planets.planets.length;

export const { addPlanets, delPlanets, delPlanet } = planetsSlice.actions;
export default planetsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroRedux: [],
  heroReduxById: {},
  heroReduxByPublisher: {},
  heroReduxByName: {}
}


export const heroSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    getAllHeroes: (state, { payload }) => {
      state.heroRedux = payload
    },
    getHeroReduxById: (state, { payload }) => {
      state.heroReduxById = state.heroRedux.find(hero => hero.id === parseInt(payload))
    },
    getHeroReduxByPublisher: (state, { payload }) => {
      state.heroReduxByPublisher = state.heroRedux.filter(hero => hero.publisher === payload)
    },
    getHeroReduxByName: (state, { payload }) => {  
      if (payload.length === 0) return {}
      payload = payload.toLowerCase().trim();
      state.heroReduxByName = state.heroRedux.filter(hero => hero.name.toLowerCase().includes(payload))
    },

  },
});

export const {
  getAllHeroes,
  getHeroReduxById,
  getHeroReduxByPublisher,
  getHeroReduxByName

} = heroSlice.actions;

export default heroSlice.reducer;

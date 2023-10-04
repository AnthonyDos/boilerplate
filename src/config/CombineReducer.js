import {configureStore} from "@reduxjs/toolkit";
import reducerListPokemon from "../js/features/home/redux/HomePageReducer";
import reducerDetailsPokemon from "../js/features/home/redux/DetailsPokemonReducer";

const store = configureStore({
	reducer: {
		reducerListPokemon:reducerListPokemon,
		reducerDetailsPokemon: reducerDetailsPokemon,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
import HomePageAction from "./HomePageAction";


const initialState = {
	pokemons:[],
	error:null,
};

const reducerListPokemon = (state = initialState, action) => {
	switch (action.type) {
	case HomePageAction.LIST_POKEMON_REQUEST_SUCCESS:
		return {
			...state,
			pokemons: action.payload,
			error:null,
		};
	case HomePageAction.LIST_POKEMON_REQUEST_FAILURE:
		return {
			...state,
			pokemons: null,
			error: action.payload,
		};
	default:
		return state;
	}
};

export default reducerListPokemon;
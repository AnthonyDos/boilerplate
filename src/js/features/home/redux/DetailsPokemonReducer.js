import HomePageAction from "./HomePageAction";


const initialState = {
  pokemons: [],
  error:null,
};

const reducerDetailsPokemon = (state = initialState, action) => {
  switch (action.type) {
  case HomePageAction.DETAILS_POKEMON_REQUEST_SUCCESS:
    return {
      ...state,
      pokemons: [...state.pokemons,action.payload],
      error:null,
    };
  case HomePageAction.DETAILS_POKEMON_REQUEST_FAILURE:
    return {
      ...state,
      pokemons: null,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default reducerDetailsPokemon;
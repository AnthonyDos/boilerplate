import axios from "axios";
import PathHomePageApi from "./HomePageServiceConstants";
import HomePageDispatcher from "../redux/HomePageDispatcher";

const ListPokemonsService = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(PathHomePageApi.POKEMONS_LIST);
			const pokemonDetails = response.data;
			dispatch(HomePageDispatcher.pokemonsDataSuccess(pokemonDetails?.results));
		} catch (error) {
			console.log({error: error});
		}
	};
};

const DetailsPokemonsService = (url) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(url);
			const pokemonDetails = response.data;
			dispatch(HomePageDispatcher.pokemonsDetailsSuccess(pokemonDetails));
			return response.data;
		} catch (error) {
			console.log({error: error});
		}
	};
};

const HomePageApi = {
	ListPokemonsService,
	DetailsPokemonsService,
};

export default HomePageApi;
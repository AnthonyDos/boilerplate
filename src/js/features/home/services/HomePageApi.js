import axios from "axios";
import PathHomePageApi from "./HomePageServiceConstants";
import HomePageDispatcher from "../redux/HomePageDispatcher";

const ListPokemonsService = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(PathHomePageApi.POKEMONS_LIST);
			dispatch(HomePageDispatcher.pokemonsDataSuccess(response));
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};
};

const HomePageApi = {
	ListPokemonsService,
};

export default HomePageApi;
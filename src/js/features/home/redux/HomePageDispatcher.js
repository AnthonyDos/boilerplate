import HomePageAction from "./HomePageAction";

const pokemonsDataSuccess = (data) => {
	return {
		type: HomePageAction.LIST_POKEMON_REQUEST_SUCCESS,
		payload: data,
	};
};

const pokemonsDataFailure = (error) => {
	return {
		type: HomePageAction.LIST_POKEMON_REQUEST_FAILURE,
		payload: error,
	};
};

const pokemonsDetailsSuccess = (data) => {
	return {
		type: HomePageAction.DETAILS_POKEMON_REQUEST_SUCCESS,
		payload: data,
	};
};

const pokemonsDetailsFailure = (error) => {
	return {
		type: HomePageAction.DETAILS_POKEMON_REQUEST_FAILURE,
		payload: error,
	};
};

const homePageDispatcher = {
	pokemonsDataSuccess,
	pokemonsDataFailure,
	pokemonsDetailsSuccess,
	pokemonsDetailsFailure,
};

export default homePageDispatcher;
import "./App.css";
import HeaderPage from "./js/features/header/pages/HeaderPage";
import HomePage from "./js/features/home/pages/HomePage";
import HomePageApi from "./js/features/home/services/HomePageApi";
import {useDispatch} from "react-redux";

function App() {
	const dispatch = useDispatch();
	dispatch(	HomePageApi.ListPokemonsService());

	return (
		<div className="App">
			<HeaderPage/>
			<HomePage />
		</div> 
	);
}

export default App;

import {useEffect,} from "react";
import {useDispatch, useSelector} from "react-redux";
import HomePageApi from "../services/HomePageApi";
import Card from "../components/Card";
import DicoHomePage from "../commons/dico/Dico";

const HomePage = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state?.reducerListPokemon);
  useEffect(()=>{
    if (datas.pokemons === null && datas.pokemons === undefined) {
      HomePageApi.ListPokemonsService();
    }
  },[datas]);

  useEffect(() => {
    if (Array.isArray(datas.pokemons)) {
      datas.pokemons.forEach((pokemon, index) => {
        const pokemon_id = index + 1;
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`;
        dispatch(HomePageApi.DetailsPokemonsService(url));
      });
    }
  }, [datas, dispatch]);
  const details = useSelector((state)=> state.reducerDetailsPokemon);

  return(
    <div>
      {
        datas?.error !== null ? <p>{DicoHomePage.ERROR_MESSAGE_DATA}</p>
          :<Card datas={datas.pokemons} details={details}/>
      }
    </div>
  );
};

export default HomePage;
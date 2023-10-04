import "../commons/style/Style.scss";

const Card = (props) => {
  const { datas, details } = props;
  console.log(details);
  return(
    <div className="container_card">
      {
        datas?.map((e, index) => {
          return (
            <div className="card" key={index}>
              <div className="data">
                <p>{index + 1}</p>
                <p>{e.name}</p> 
              </div>
              <div className="container_img">
                <img className="img_pokemon" alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${e.name}.jpg`}/>
              </div>
              <div>
                {
                  details?.pokemons?.map((detail, index1) => {
                    return(
                      index1 === index ?(
                        <div key={index}>
                          <div className="data">
                            <p>Type :</p>
                            <p>{detail?.types[0]?.type?.name}</p>
                          </div>
                          <div className="data">
                            <p>Base expérience</p>
                            <p>{detail?.base_experience}</p>
                          </div>
                        </div>
                      ): null
                    );
                  })
                }
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Card;

import Card from "./Card";

function PokemonContainer({ pokemon }) {
  console.log("This is inside the PokemonContainer component", pokemon);

  function renderPokemonCardFactory() {
    return pokemon.map((singlePokemon, indexOfSinglePokemon) => {
      return (
        <Card
          key={singlePokemon.name + indexOfSinglePokemon}
          name={singlePokemon.name}
          num={singlePokemon.num}
          img={singlePokemon.img}
          type={singlePokemon.type}
          nextEvolution={singlePokemon.next_evolution}
        />
      );
    });
  }

  return (
    <div>
      <p>This is the pokemon container component.</p>
      {renderPokemonCardFactory()}
    </div>
  );
}

export default PokemonContainer;
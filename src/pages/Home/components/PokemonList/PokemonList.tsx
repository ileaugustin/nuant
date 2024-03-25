import { useNavigate } from "react-router-dom";
import { NamedAPIResource } from "pokenode-ts";
import ListItem from "../ListItem";

type Props = {
  data: NamedAPIResource[] | undefined;
}

function PokemonList(props: Props) {
  const { data } = props;
  const navigate = useNavigate();

  if (!data) {
    return (
      <div>
        No data
      </div>
    )
  }

  const onClick = (pokemonName: string) => {
    navigate(`/${pokemonName}`)
  }

  return (
    <div>
      {data.map((pokemon) => {
        const pokemonId = parseInt(pokemon.url.split("pokemon/")[1]);
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
        return (
          <ListItem
            key={pokemon.name}
            name={pokemon.name}
            imageUrl={imageUrl}
            onClick={onClick}
          />
        )
      })}
    </div>
  )
}

export default PokemonList;

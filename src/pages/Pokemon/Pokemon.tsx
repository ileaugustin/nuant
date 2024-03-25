import { Box, Avatar } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import pokemonApi from "../../services/api";
import ErrorPage from "../Fallback";
import Row from "./components/Row";
import StatsRow from "./components/StatsRow";
import Loader from "../../components/Loader";
import "./Pokemon.css"

function Pokemon() {
  const { pokemonName } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: [`pokemonData-${pokemonName}`],
    queryFn: async () => {
      return await pokemonApi.getPokemonByName(pokemonName);
    },
  })

  if (isPending) {
    return <Loader />
  }

  if (error) {
    return <ErrorPage />
  }

  const abilities = data.abilities.map(a => a.ability.name);
  const types = data.types.map(a => a.type.name);
  const moves = data.moves.slice(0,2).map(m => m.move.name);
  return (
    <div className="pokemon-page">
      <Box
        width="100%"
        mb={2}
        display="flex"
        alignItems="center"
        gap={4}
      >
        <h1>
          {data.name}
        </h1>
        <Avatar
          src={data.sprites.front_default}
          classes={{
            root: "pokemon-avatar"
          }}
        />
        <Avatar
          src={data.sprites.back_default}
          classes={{
            root: "pokemon-avatar"
          }}
          width={100}
        />
      </Box>
      <Box
        className="box general-info"
      >
        <Row label="Height" value={data.height} />
        <Row label="Abilities" value={abilities.join(",")} />
        <Row label="Weight" value={data.weight} />
        <Row label="Type" value={types.join(",")} />
        <Row label="Moves" value={moves.join(",")} />
      </Box>
      <Box className="box stats">
        <div className="box-title">Stats</div>
        {data.stats.map(s => (
          <StatsRow label={s.stat.name} value={s.base_stat} />
        ))}
      </Box>
    </div>
  )
}

export default Pokemon

import { useCallback, useState, useEffect } from "react";
import Search from "./components/Search";
import PokemonList from "./components/PokemonList";
import { useQuery } from "@tanstack/react-query";
import pokemonApi from "../../services/api";
import Loader from "../../components/Loader";
import ErrorPage from "../Fallback";


function Home() {
  const [searchValue, setSearchValue] = useState(() => {
    const saved = localStorage.getItem("pokemonSearchValue");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })

  useEffect(() => {
    localStorage.setItem("pokemonSearchValue", JSON.stringify(searchValue));
  }, [searchValue]);

  const { isPending, error, data } = useQuery({
    queryKey: ['pokemonList'],
    queryFn: async () => {
      return await pokemonApi.listPokemons(0, 1302);
    },
  })

  const onSearchChange = useCallback((value) => {
    setSearchValue(value);
  }, [setSearchValue]);

  if (isPending) {
    return <Loader />
  }

  if (error) {
    return <ErrorPage />
  }

  const filteredPokemon = searchValue
    ? data?.results?.filter(pokemon => pokemon.name.includes(searchValue.toLocaleLowerCase()))
    : data?.results;

  return (
    <div>
      <Search
        value={searchValue}
        onChange={onSearchChange}
      />
      <PokemonList data={filteredPokemon} />
    </div>
  )
}

export default Home

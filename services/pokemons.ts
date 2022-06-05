import axios from "axios";
import { GetServerSideProps } from "next";

export async function getRandomPokemon() {
  const randomNumber = Math.floor(Math.random() * 807) + 1;
  try {
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    );

    return pokemon.data;
  } catch (error) {
    return error;
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const randomPokemon = await getRandomPokemon();
  return {
    props: {
      randomPokemon,
    },
  };
};

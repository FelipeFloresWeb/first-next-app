import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import axios from "axios";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { RandomPokemon } from "../types/randomPokemonType";
import {
  Box,
  Button,
  Flex,
  Heading,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { PokemonCard } from "../components/PokemonCard";

const Home: NextPage<{ randomPokemon: RandomPokemon }> = ({
  randomPokemon,
}) => {
  const [colorMode, setColorMode] = useState(false);

  const { toggleColorMode } = useColorMode();
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Box>
        {!colorMode ? <MoonIcon /> : <SunIcon />}
        <Switch
          ml={2}
          data-testid="color-mode-switch"
          onChange={() => {
            toggleColorMode();
            setColorMode(!colorMode);
          }}
        />
      </Box>
      <Heading data-testid="main-title">Battle Game!</Heading>
      <PokemonCard randomPokemon={randomPokemon} />
      <Button
        onClick={getRandomPokemon}
        mt={4}
        colorScheme="cyan"
        variant="solid"
      >
        Search for other...
      </Button>
    </Flex>
  );
};

async function getRandomPokemon() {
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

export default Home;

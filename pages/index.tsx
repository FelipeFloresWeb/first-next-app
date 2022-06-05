import type { GetServerSideProps } from "next";
import Image from "next/image";
import axios from "axios";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { RandomPokemon } from "../types/randomPokemonType";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";

const Home = ({ randomPokemon }: { randomPokemon: RandomPokemon }) => {
  const [colorMode, setColorMode] = useState(false);

  const { toggleColorMode } = useColorMode();
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      {!colorMode ? (
        <MoonIcon
          mt={4}
          onClick={() => {
            toggleColorMode();
            setColorMode(!colorMode);
          }}
          _hover={{ cursor: "pointer" }}
        />
      ) : (
        <SunIcon
          mt={4}
          onClick={() => {
            toggleColorMode();
            setColorMode(!colorMode);
          }}
          _hover={{ cursor: "pointer" }}
        />
      )}
      <Heading>Battle Game!</Heading>
      <Flex
        direction="row"
        background="blue.400"
        p={5}
        rounded={8}
        alignItems="center"
      >
        <Box alignItems="center">
          <Heading textAlign="center">
            {randomPokemon.name[0].toUpperCase() + randomPokemon.name.slice(1)}
          </Heading>
          <Image
            unoptimized
            fallbackSrc={<div>Error to getImage</div>}
            src={randomPokemon.sprites.front_default}
            alt={randomPokemon.name}
            width={200}
            height={200}
          />
        </Box>
        <Box alignItems="center">
          {randomPokemon.stats.map((stat) => (
            <Text fontSize={25} textAlign="center" key={stat.stat.name}>
              {stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1)}:{" "}
              {stat.base_stat}
            </Text>
          ))}
        </Box>
      </Flex>
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

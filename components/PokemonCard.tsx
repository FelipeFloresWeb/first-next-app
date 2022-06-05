import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { RandomPokemon } from "../types/randomPokemonType";

export function PokemonCard({
  randomPokemon,
}: {
  randomPokemon: RandomPokemon;
}) {
  return (
    <Flex
      direction="row"
      background="blue.400"
      p={5}
      m={5}
      rounded={8}
      alignItems="center"
    >
      <Box alignItems="center">
        <Heading textAlign="center">
          {randomPokemon.name[0].toUpperCase() + randomPokemon.name.slice(1)}
        </Heading>
        <Image
          // unoptimized
          // fallbackSrc={<div>Error to getImage</div>}
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
  );
}

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

const GameGrid = ({ selectedGenre }: { selectedGenre: Genre | null }) => {
  const { data, error, isloading } = useGames(selectedGenre);
  const skeltons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {isloading &&
          skeltons.map((skelton, index) => (
            <GameCardContainer key={index}>
              <GameCardSkelton key={skelton} />
            </GameCardContainer>
          ))}
        {data.map((game, index) => (
          <GameCardContainer key={index}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

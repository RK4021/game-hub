import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "./../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { useState } from "react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isloading } = useGenres();

  if (isloading) return <Spinner></Spinner>;
  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY="10px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius="8px"
              />
              <Button
                onClick={() => {
                  onSelectGenre(genre);
                }}
                fontSize="lg"
                variant="link"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>{" "}
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;

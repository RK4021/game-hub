import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "./../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isloading } = useGenres();

  if (isloading) return <Spinner></Spinner>;
  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY="10px">
            {" "}
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius="8px"
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>{" "}
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;

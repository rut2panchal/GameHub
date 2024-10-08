import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  currentGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, currentGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading marginBottom={5}>Genres</Heading>
      <List>
        {error && <Text>{error}</Text>}

        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                variant="link"
                onClick={() => onSelectedGenre(genre)}
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                fontWeight={genre.id === currentGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

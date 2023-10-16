import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGameQueryStore from "../store";
import GenreSkeleton from "./genreskeleton";
import useGenres from "./hooks/useGenres";
import getCroppedImageUrl from "./services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const Skeletons = [1, 2, 3, 4, 5, 6];
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  return (
    <>
      {isLoading &&
        Skeletons.map((Skeleton) => <GenreSkeleton key={Skeleton} />)}
      {!isLoading && (
        <>
          <Heading fontSize={"2xl"} marginBottom={3}>
            Genres
          </Heading>
          <List>
            {data?.results.map((genre) => (
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    objectFit={"cover"}
                    boxSize="32px"
                    borderRadius={8}
                    src={getCroppedImageUrl(genre.image_background)}
                  />
                  <Button
                    whiteSpace={"normal"}
                    textAlign={"left"}
                    fontWeight={genre.id === genreId ? "bold" : "normal"}
                    onClick={() => setGenreId(genre.id)}
                    fontSize="lg"
                    variant="link"
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
};

export default GenreList;

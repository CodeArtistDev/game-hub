import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/crop-image";
import { Box, Button, Heading, HStack, Image, Link, Spinner, Text } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <Box as="ul" listStyleType="none">
      {data.map((genre) => (
        <li key={genre.id}>
          <HStack paddingY="5px">
            <Image
              objectFit="cover"
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : ""}
              onClick={() => onSelectGenre(genre)}
              asChild
              variant="ghost"
              fontSize="lg"
            >
              <Link
                href="#"
                variant="plain"
              >{genre.name}
              </Link>
            </Button>
          </HStack>
        </li>
      ))}
    </Box>
    </>
  );
};

export default GenreList;

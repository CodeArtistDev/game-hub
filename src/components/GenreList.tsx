import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/crop-image";
import { Box, HStack, Image, Text} from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <Box as="ul" listStyleType="none">
      {data.map((genre) => (
        <li key={genre.id} >
          <HStack paddingY='5px'>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </li>
      ))}
    </Box>
  );
};

export default GenreList;

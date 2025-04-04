import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/crop-image";
import { Box, HStack, Image, Spinner, Text} from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if(error) 
    return null;
  if(isLoading)
    return <Spinner />
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

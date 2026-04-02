import { Box, Image, Text } from "@chakra-ui/react";

export const RecipeCard = ({ recipe, onClick }) => {
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      w="100%"
      maxW="320px"
      transition="0.2s"
      _hover={{
        transform: "scale(1.03)",
        boxShadow: "xl",
        zIndex: 1,
      }}
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        borderRadius="md"
        mb={2}
        width="100%"
        height="200px"
        objectFit="cover"
      />
      <Text fontWeight="bold" fontSize="lg">
        {recipe.label}
      </Text>
    </Box>
  );
};

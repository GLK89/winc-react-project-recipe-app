import { Box, Image, Text } from "@chakra-ui/react";

export const RecipeCard = ({ recipe, onClick }) => {
  return (
    <Box
      mt={2}
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

      <Text fontWeight="bold" fontSize="lg" mt={2}>
        {recipe.label}
      </Text>

      <Text fontSize="sm" color="gray.500" mt={1}>
        {recipe.mealType.join(", ")}
      </Text>

      <Text fontSize="sm" color="gray.500" mt={1}>
        {recipe.dishType.join(", ")}
      </Text>

      {recipe.dietLabels.length > 0 && (
        <Text fontSize="sm" color="green.600" mt={1}>
          {recipe.dietLabels.join(", ")}
        </Text>
      )}

      {recipe.cautions.length > 0 && (
        <Text fontSize="sm" color="red.500" mt={1}>
          ⚠️ {recipe.cautions.join(", ")}
        </Text>
      )}

      {recipe.healthLabels.includes("Vegan") && (
        <Text fontSize="xs" bg="green.100" mt={1} px={2} borderRadius="md">
          🌱 Vegan
        </Text>
      )}

      {recipe.healthLabels.includes("Vegetarian") && (
        <Text fontSize="xs" bg="green.100" mt={1} px={2} borderRadius="md">
          🥦 Vegetarian
        </Text>
      )}
    </Box>
  );
};

import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";

export const RecipePage = ({ selectedRecipe, setSelectedRecipe }) => {
  return (
    <VStack p={6} gap={4}>
      <Button onClick={() => setSelectedRecipe(null)}>Back to overview</Button>

      <Heading>{selectedRecipe.label}</Heading>

      <Image
        src={selectedRecipe.image}
        alt={selectedRecipe.label}
        maxW="400px"
        borderRadius="lg"
      />

      <Text>Meal type: {selectedRecipe.mealType}</Text>
      <Text>Dish type: {selectedRecipe.dishType}</Text>
    </VStack>
  );
};

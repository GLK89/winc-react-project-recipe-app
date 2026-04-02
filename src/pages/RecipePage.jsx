import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";

export const RecipePage = ({ selectedRecipe, setSelectedRecipe }) => {
  return (
    <VStack p={6} gap={4} align="stretch">
      <Button alignSelf="flex-start" onClick={() => setSelectedRecipe(null)}>
        Back to overview
      </Button>

      <Heading textAlign="center">{selectedRecipe.label}</Heading>

      <Image
        src={selectedRecipe.image}
        alt={selectedRecipe.label}
        maxW="500px"
        width="100%"
        borderRadius="lg"
        alignSelf="center"
      />

      <Text>
        <strong>Meal type:</strong> {selectedRecipe.mealType.join(", ")}
      </Text>

      <Text>
        <strong>Dish type:</strong> {selectedRecipe.dishType.join(", ")}
      </Text>

      <Text>
        <strong>Servings:</strong> {selectedRecipe.yield}
      </Text>
      {/*
      <Text>
        <strong>Total cooking time:</strong>{" "}
        {selectedRecipe.totalTime > 0
          ? `${selectedRecipe.totalTime} minutes`
          : "N/A"}
      </Text>
      */}

      <Text>
        <strong>Total cooking time:</strong>{" "}
        {selectedRecipe.totalTime > 0
          ? `${selectedRecipe.totalTime} minutes`
          : "Not available"}
      </Text>

      {selectedRecipe.dietLabels.length > 0 && (
        <>
          <Text fontWeight="bold">Diet labels:</Text>
          {selectedRecipe.dietLabels.map((label) => (
            <Text key={label}>• {label}</Text>
          ))}
        </>
      )}

      {selectedRecipe.healthLabels.length > 0 && (
        <>
          <Text fontWeight="bold">Health labels:</Text>
          {selectedRecipe.healthLabels.map((label) => (
            <Text key={label}>• {label}</Text>
          ))}
        </>
      )}

      {selectedRecipe.cautions.length > 0 && (
        <>
          <Text fontWeight="bold">Cautions:</Text>
          {selectedRecipe.cautions.map((caution) => (
            <Text key={caution}>• {caution}</Text>
          ))}
        </>
      )}

      <Text fontWeight="bold">Ingredients:</Text>
      {selectedRecipe.ingredientLines.map((ingredient) => (
        <Text key={ingredient}>• {ingredient}</Text>
      ))}
    </VStack>
  );
};

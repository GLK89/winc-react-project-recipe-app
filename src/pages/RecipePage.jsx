import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect } from "react";

export const RecipePage = ({ selectedRecipe, setSelectedRecipe }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box p={{ base: 4, md: 6 }}>
      <VStack gap={6} align="stretch">
        {/* INNER CONTAINER */}
        <Box maxW="700px" mx="auto" w="100%">
          <Button mb={6} onClick={() => setSelectedRecipe(null)}>
            Back to overview
          </Button>

          <Heading textAlign="center" size="xl" mb={6}>
            {selectedRecipe.label}
          </Heading>

          <Image
            src={selectedRecipe.image}
            alt={selectedRecipe.label}
            w="100%"
            h={{ base: "180px", md: "220px" }}
            borderRadius="xl"
            boxShadow="md"
            objectFit="cover"
            mb={6}
          />

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} columnGap={12}>
            {/* LINKS */}
            <Box>
              <Text fontWeight="bold" mb={2}>
                Recipe info
              </Text>

              <Text mb={2}>
                <Text as="span" fontWeight="bold">
                  Meal type:
                </Text>{" "}
                {selectedRecipe.mealType.join(", ")}
              </Text>

              <Text mb={2}>
                <Text as="span" fontWeight="bold">
                  Dish type:
                </Text>{" "}
                {selectedRecipe.dishType.join(", ")}
              </Text>

              <Text mb={2}>
                <Text as="span" fontWeight="bold">
                  Servings:
                </Text>{" "}
                {selectedRecipe.yield}
              </Text>

              <Text mb={4}>
                <Text as="span" fontWeight="bold">
                  Total cooking time:
                </Text>{" "}
                {selectedRecipe.totalTime > 0
                  ? `${selectedRecipe.totalTime} minutes`
                  : "Not available"}
              </Text>

              <Text fontWeight="bold" mb={2}>
                Ingredients:
              </Text>

              {selectedRecipe.ingredientLines.map((ingredient) => (
                <Text key={ingredient} mb={1}>
                  • {ingredient}
                </Text>
              ))}
            </Box>

            {/* RECHTS */}
            <Box>
              {selectedRecipe.healthLabels.length > 0 && (
                <>
                  <Text fontWeight="bold" mb={2}>
                    Health labels:
                  </Text>
                  <Wrap spacing={2}>
                    {selectedRecipe.healthLabels.map((label) => (
                      <WrapItem key={label}>
                        <Box
                          px={2}
                          py={1}
                          borderRadius="md"
                          bg="purple.100"
                          color="purple.800"
                          fontSize="xs"
                          _dark={{ bg: "purple.700", color: "white" }}
                        >
                          {label}
                        </Box>
                      </WrapItem>
                    ))}
                  </Wrap>
                </>
              )}

              {selectedRecipe.dietLabels.length > 0 && (
                <>
                  <Text fontWeight="bold" mt={4} mb={2}>
                    Diet labels:
                  </Text>
                  <Wrap spacing={2}>
                    {selectedRecipe.dietLabels.map((label) => (
                      <WrapItem key={label}>
                        <Box
                          px={2}
                          py={1}
                          borderRadius="md"
                          bg="green.100"
                          color="green.800"
                          fontSize="xs"
                          _dark={{ bg: "green.700", color: "white" }}
                        >
                          {label}
                        </Box>
                      </WrapItem>
                    ))}
                  </Wrap>
                </>
              )}

              {selectedRecipe.cautions.length > 0 && (
                <>
                  <Text fontWeight="bold" mt={4} mb={2}>
                    Cautions:
                  </Text>
                  <Wrap spacing={2}>
                    {selectedRecipe.cautions.map((caution) => (
                      <WrapItem key={caution}>
                        <Box
                          px={2}
                          py={1}
                          borderRadius="md"
                          bg="red.100"
                          color="red.800"
                          fontSize="xs"
                          _dark={{ bg: "red.700", color: "white" }}
                        >
                          {caution}
                        </Box>
                      </WrapItem>
                    ))}
                  </Wrap>
                </>
              )}

              <Text fontWeight="bold" mt={4} mb={2}>
                Total nutrients:
              </Text>

              <Text mb={1}>
                • Energy:{" "}
                {Math.round(selectedRecipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
                {selectedRecipe.totalNutrients.ENERC_KCAL.unit}
              </Text>

              <Text mb={1}>
                • Protein:{" "}
                {Math.round(selectedRecipe.totalNutrients.PROCNT.quantity)}{" "}
                {selectedRecipe.totalNutrients.PROCNT.unit}
              </Text>

              <Text mb={1}>
                • Fat: {Math.round(selectedRecipe.totalNutrients.FAT.quantity)}{" "}
                {selectedRecipe.totalNutrients.FAT.unit}
              </Text>

              <Text mb={1}>
                • Carbs:{" "}
                {Math.round(selectedRecipe.totalNutrients.CHOCDF.quantity)}{" "}
                {selectedRecipe.totalNutrients.CHOCDF.unit}
              </Text>

              <Text mb={1}>
                • Cholesterol:{" "}
                {Math.round(selectedRecipe.totalNutrients.CHOLE.quantity)}{" "}
                {selectedRecipe.totalNutrients.CHOLE.unit}
              </Text>

              <Text mb={1}>
                • Sodium:{" "}
                {Math.round(selectedRecipe.totalNutrients.NA.quantity)}{" "}
                {selectedRecipe.totalNutrients.NA.unit}
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

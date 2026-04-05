import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { ColorModeButton } from "../components/ui/color-mode";

export const RecipePage = ({ selectedRecipe, setSelectedRecipe }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box p={{ base: 4, md: 6 }}>
      <VStack gap={6} align="stretch">
        <Box maxW="700px" mx="auto" w="100%">
          <Flex justify="space-between" align="center" mb={6}>
            <Button onClick={() => setSelectedRecipe(null)}>
              Back to overview
            </Button>
            <ColorModeButton />
          </Flex>

          <Image
            src={selectedRecipe.image}
            alt={selectedRecipe.label}
            w="100%"
            h={{ base: "180px", md: "220px" }}
            borderRadius="xl"
            boxShadow="lg"
            objectFit="cover"
            mb={6}
          />

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} columnGap={12}>
            <Box>
              <Text
                fontSize="xs"
                color="gray.400"
                textTransform="uppercase"
                letterSpacing="wide"
                mb={1}
              >
                {selectedRecipe.mealType.join(" / ")}
              </Text>

              <Heading size="xl" mb={4} lineHeight="1.2">
                {selectedRecipe.label}
              </Heading>

              <Text mb={2}>
                <Text as="span" fontWeight="bold">
                  Total cooking time:
                </Text>{" "}
                {selectedRecipe.totalTime > 0
                  ? `${selectedRecipe.totalTime} minutes`
                  : "Not available"}
              </Text>

              <Text mb={6}>
                <Text as="span" fontWeight="bold">
                  Servings:
                </Text>{" "}
                {selectedRecipe.yield}
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
                          py={0.5}
                          borderRadius="md"
                          bg="purple.100"
                          color="purple.700"
                          fontSize="2xs"
                          _dark={{ bg: "purple.800", color: "purple.100" }}
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
                  <Text fontWeight="bold" mt={6} mb={2}>
                    Diet labels:
                  </Text>
                  <Wrap spacing={2}>
                    {selectedRecipe.dietLabels.map((label) => (
                      <WrapItem key={label}>
                        <Box
                          px={2}
                          py={0.5}
                          borderRadius="md"
                          bg="green.100"
                          color="green.700"
                          fontSize="2xs"
                          _dark={{ bg: "green.800", color: "green.100" }}
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
                  <Text fontWeight="bold" mt={6} mb={2}>
                    Cautions:
                  </Text>
                  <Wrap spacing={2}>
                    {selectedRecipe.cautions.map((caution) => (
                      <WrapItem key={caution}>
                        <Box
                          px={2}
                          py={0.5}
                          borderRadius="md"
                          bg="red.100"
                          color="red.700"
                          fontSize="2xs"
                          fontWeight="medium"
                          _dark={{ bg: "red.800", color: "red.100" }}
                        >
                          ⚠️ {caution}
                        </Box>
                      </WrapItem>
                    ))}
                  </Wrap>
                </>
              )}

              <Text fontWeight="bold" mt={6} mb={2}>
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

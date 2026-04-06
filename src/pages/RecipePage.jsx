import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ColorModeButton } from "../components/ui/color-mode";

export const RecipePage = ({ recipe, setSelectedRecipe }) => {
  return (
    <Box p={6} minH="100vh" bg="#FBE8CE" _dark={{ bg: "gray.900" }}>
      <Box maxW="1100px" mx="auto">
        <Flex justify="space-between" align="center" mb={6}>
          <Button onClick={() => setSelectedRecipe(null)}>
            Back to overview
          </Button>
          <ColorModeButton />
        </Flex>

        <Image
          src={recipe.image}
          alt={recipe.label}
          borderRadius="xl"
          w="100%"
          maxH="420px"
          objectFit="cover"
          mb={8}
        />

        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={6}>
          <GridItem>
            <Box
              bg="whiteAlpha.700"
              _dark={{ bg: "gray.800" }}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              mb={6}
            >
              <Text
                fontSize="sm"
                color="gray.500"
                textTransform="uppercase"
                letterSpacing="wide"
                mb={2}
              >
                {recipe.mealType.join(" / ")}
              </Text>

              <Heading
                size={{ base: "lg", md: "xl" }}
                mb={5}
                color="#2F3E2E"
                fontWeight="semibold"
                lineHeight="1.3"
                _dark={{ color: "green.200" }}
              >
                {recipe.label}
              </Heading>

              <Text mb={3}>
                <Text as="span" fontWeight="bold">
                  Total cooking time:
                </Text>{" "}
                {recipe.totalTime > 0
                  ? `${recipe.totalTime} minutes`
                  : "Not available"}
              </Text>

              <Text mb={3}>
                <Text as="span" fontWeight="bold">
                  Servings:
                </Text>{" "}
                {recipe.yield}
              </Text>

              <Text mb={3}>
                <Text as="span" fontWeight="bold">
                  Dish type:
                </Text>{" "}
                {recipe.dishType.join(", ")}
              </Text>

              <Text>
                <Text as="span" fontWeight="bold">
                  Diet labels:
                </Text>{" "}
                {recipe.dietLabels.length > 0
                  ? recipe.dietLabels.join(", ")
                  : "None"}
              </Text>
            </Box>

            <Box
              bg="whiteAlpha.700"
              _dark={{ bg: "gray.800" }}
              p={6}
              borderRadius="xl"
              boxShadow="md"
            >
              <Text fontWeight="bold" fontSize="lg" mb={3}>
                Ingredients
              </Text>

              {recipe.ingredientLines.map((ingredient) => (
                <Text key={ingredient} mb={2} lineHeight="1.6">
                  • {ingredient}
                </Text>
              ))}
            </Box>
          </GridItem>

          <GridItem>
            <Box
              bg="whiteAlpha.700"
              _dark={{ bg: "gray.800" }}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              mb={6}
            >
              <Text fontWeight="bold" fontSize="lg" mb={3}>
                Health labels
              </Text>

              <Wrap>
                {recipe.healthLabels.map((label) => (
                  <WrapItem key={label}>
                    <Box
                      px={3}
                      py={1}
                      borderRadius="md"
                      bg="purple.100"
                      _dark={{ bg: "purple.700" }}
                      fontSize="sm"
                    >
                      {label}
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            {recipe.cautions.length > 0 && (
              <Box
                bg="whiteAlpha.700"
                _dark={{ bg: "gray.800" }}
                p={6}
                borderRadius="xl"
                boxShadow="md"
              >
                <Text fontWeight="bold" fontSize="lg" mb={3}>
                  Cautions
                </Text>

                <Wrap>
                  {recipe.cautions.map((caution) => (
                    <WrapItem key={caution}>
                      <Box
                        px={3}
                        py={1}
                        borderRadius="md"
                        bg="red.100"
                        color="red.700"
                        _dark={{ bg: "red.700", color: "red.100" }}
                        fontSize="sm"
                      >
                        {caution}
                      </Box>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            )}
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

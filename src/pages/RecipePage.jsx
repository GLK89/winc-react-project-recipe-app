import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, setSelectedRecipe }) => {
  return (
    <Box p={6} minH="100vh" bg="#FBE8CE" _dark={{ bg: "gray.900" }}>
      <Box maxW="900px" mx="auto">
        <Button mb={6} onClick={() => setSelectedRecipe(null)}>
          Back to overview
        </Button>

        <Image
          src={recipe.image}
          alt={recipe.label}
          borderRadius="xl"
          w="100%"
          maxH="400px"
          objectFit="cover"
          mb={6}
        />

        <Text
          fontSize="sm"
          color="gray.500"
          textTransform="uppercase"
          letterSpacing="wide"
          mb={2}
        >
          {recipe.mealType.join(" / ")}
        </Text>

        <Heading mb={4}>{recipe.label}</Heading>

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

        <Text mb={6}>
          <Text as="span" fontWeight="bold">
            Diet labels:
          </Text>{" "}
          {recipe.dietLabels.length > 0 ? recipe.dietLabels.join(", ") : "None"}
        </Text>

        <Box mb={6}>
          <Text fontWeight="bold" mb={2}>
            Health labels:
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
          <Box mb={6}>
            <Text fontWeight="bold" mb={2}>
              Cautions:
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

        <Box>
          <Text fontWeight="bold" mb={2}>
            Ingredients:
          </Text>
          {recipe.ingredientLines.map((ingredient) => (
            <Text key={ingredient} mb={1}>
              • {ingredient}
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

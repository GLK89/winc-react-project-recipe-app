import { Box, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useColorModeValue } from "./color-mode";

export const RecipeCard = ({ recipe, onClick }) => {
  const healthBadgeBg = useColorModeValue("purple.100", "purple.700");
  const healthBadgeColor = useColorModeValue("purple.800", "white");

  const dietBadgeBg = useColorModeValue("green.100", "green.700");
  const dietBadgeColor = useColorModeValue("green.800", "white");

  const cautionBadgeBg = useColorModeValue("red.100", "red.700");
  const cautionBadgeColor = useColorModeValue("red.800", "white");

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
      textAlign="center"
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

      <Text
        fontSize="xs"
        color="gray.500"
        textTransform="uppercase"
        letterSpacing="wide"
        mt={1}
      >
        {recipe.mealType.join(" / ")}
      </Text>

      <Text fontWeight="bold" fontSize="lg" mt={1}>
        {recipe.label}
      </Text>

      {(recipe.healthLabels.includes("Vegan") ||
        recipe.healthLabels.includes("Vegetarian")) && (
        <Wrap justify="center" spacing={2} mt={2}>
          {recipe.healthLabels.includes("Vegan") && (
            <WrapItem>
              <Box
                px={2}
                py={1}
                borderRadius="md"
                bg={healthBadgeBg}
                color={healthBadgeColor}
                fontSize="xs"
                fontWeight="bold"
              >
                🌱 Vegan
              </Box>
            </WrapItem>
          )}

          {recipe.healthLabels.includes("Vegetarian") && (
            <WrapItem>
              <Box
                px={2}
                py={1}
                borderRadius="md"
                bg={healthBadgeBg}
                color={healthBadgeColor}
                fontSize="xs"
                fontWeight="bold"
              >
                🥦 Vegetarian
              </Box>
            </WrapItem>
          )}
        </Wrap>
      )}

      {recipe.dietLabels.length > 0 && (
        <Wrap justify="center" spacing={2} mt={2}>
          {recipe.dietLabels.map((label) => (
            <WrapItem key={label}>
              <Box
                px={2}
                py={1}
                borderRadius="md"
                bg={dietBadgeBg}
                color={dietBadgeColor}
                fontSize="xs"
                fontWeight="bold"
              >
                {label}
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      )}

      <Text fontSize="sm" color="gray.500" mt={2}>
        Dish:{" "}
        <Text
          as="span"
          fontWeight="bold"
          color="gray.700"
          _dark={{ color: "gray.200" }}
        >
          {recipe.dishType.join(", ")}
        </Text>
      </Text>

      {recipe.cautions.length > 0 && (
        <Box mt={2}>
          <Text fontSize="sm" fontWeight="bold" mb={1}>
            Cautions:
          </Text>

          <Wrap justify="center" spacing={2}>
            {recipe.cautions.map((caution) => (
              <WrapItem key={caution}>
                <Box
                  px={2}
                  py={1}
                  borderRadius="md"
                  bg={cautionBadgeBg}
                  color={cautionBadgeColor}
                  fontSize="xs"
                  fontWeight="bold"
                >
                  ⚠️ {caution}
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}
    </Box>
  );
};

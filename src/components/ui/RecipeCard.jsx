import { Box, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useColorModeValue } from "./color-mode";

export const RecipeCard = ({ recipe, onClick }) => {
  const cardBg = useColorModeValue("#FFFDF7", "gray.800");

  const healthBadgeBg = useColorModeValue("#C3CC9B", "green.800");
  const healthBadgeColor = useColorModeValue("#4F5D3A", "green.100");

  const dietBadgeBg = useColorModeValue("#E4DFB5", "yellow.800");
  const dietBadgeColor = useColorModeValue("#5F6F52", "yellow.100");

  const cautionBadgeBg = useColorModeValue("red.100", "red.800");
  const cautionBadgeColor = useColorModeValue("red.700", "red.100");

  return (
    <Box
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      mt={2}
      onClick={onClick}
      cursor="pointer"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg={cardBg}
      p={4}
      w="100%"
      transition="0.2s"
      textAlign="center"
      _hover={{
        transform: "scale(1.03)",
        boxShadow: "xl",
        zIndex: 1,
      }}
    >
      {/* IMAGE */}
      <Image
        src={recipe.image}
        alt={recipe.label}
        borderRadius="md"
        mb={3}
        w="100%"
        h="200px"
        objectFit="cover"
      />

      {/* MEAL TYPE */}
      <Text
        fontSize="xs"
        color="gray.500"
        textTransform="uppercase"
        letterSpacing="wide"
        mb={1}
      >
        {recipe.mealType.join(" / ")}
      </Text>

      {/* TITLE */}
      <Box minH="60px" mb={2}>
        <Text fontWeight="bold" fontSize="lg" lineHeight="1.25">
          {recipe.label}
        </Text>
      </Box>

      {/* HEALTH LABELS */}
      <Box minH="32px" mb={2}>
        <Wrap justify="center" spacing={2}>
          {recipe.healthLabels.includes("Vegan") && (
            <WrapItem>
              <Box
                px={2}
                py={0.5}
                borderRadius="md"
                bg={healthBadgeBg}
                color={healthBadgeColor}
                fontSize="2xs"
                fontWeight="medium"
              >
                🌱 Vegan
              </Box>
            </WrapItem>
          )}

          {recipe.healthLabels.includes("Vegetarian") && (
            <WrapItem>
              <Box
                px={2}
                py={0.5}
                borderRadius="md"
                bg={healthBadgeBg}
                color={healthBadgeColor}
                fontSize="2xs"
                fontWeight="medium"
              >
                🥦 Vegetarian
              </Box>
            </WrapItem>
          )}

          {recipe.healthLabels.includes("Pescatarian") && (
            <WrapItem>
              <Box
                px={2}
                py={0.5}
                borderRadius="md"
                bg={healthBadgeBg}
                color={healthBadgeColor}
                fontSize="2xs"
                fontWeight="medium"
              >
                🐟 Pescatarian
              </Box>
            </WrapItem>
          )}
        </Wrap>
      </Box>

      {/* DIET LABELS */}
      <Box minH="32px" mb={2}>
        {recipe.dietLabels.length > 0 && (
          <Wrap justify="center" spacing={2}>
            {recipe.dietLabels.map((label) => (
              <WrapItem key={label}>
                <Box
                  px={2}
                  py={0.5}
                  borderRadius="md"
                  bg={dietBadgeBg}
                  color={dietBadgeColor}
                  fontSize="2xs"
                  fontWeight="medium"
                >
                  {label}
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        )}
      </Box>

      {/* DISH */}
      <Box minH="24px" mb={2}>
        <Text fontSize="sm" color="gray.500">
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
      </Box>

      {/* CAUTIONS */}
      <Box minH="60px">
        {recipe.cautions.length > 0 && (
          <>
            <Text fontSize="sm" fontWeight="bold" mb={1}>
              Cautions:
            </Text>

            <Wrap justify="center" spacing={2}>
              {recipe.cautions.map((caution) => (
                <WrapItem key={caution}>
                  <Box
                    px={2}
                    py={0.5}
                    borderRadius="md"
                    bg={cautionBadgeBg}
                    color={cautionBadgeColor}
                    fontSize="2xs"
                    fontWeight="medium"
                  >
                    ⚠️ {caution}
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </>
        )}
      </Box>
    </Box>
  );
};

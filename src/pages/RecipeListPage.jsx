import { Center, Flex, Heading, Input, SimpleGrid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard";
import { useState } from "react";
import { ColorModeButton } from "../components/ui/color-mode";

export const RecipeListPage = ({ setSelectedRecipe }) => {
  const [searchField, setSearchField] = useState("");

  const search = searchField.toLowerCase();

  const filteredRecipes = data.hits.filter((item) => {
    const recipeName = item.recipe.label.toLowerCase();
    const healthLabels = item.recipe.healthLabels.join(" ").toLowerCase();

    return recipeName.includes(search) || healthLabels.includes(search);
  });
  return (
    <Center flexDir="column" p={4}>
      <Flex
        w="100%"
        maxW="1100px"
        align="center"
        justify="center"
        position="relative"
        mb={6}
      >
        <Heading textAlign="center">Your Recipe App</Heading>

        <ColorModeButton position="absolute" right="0" />
      </Flex>
    <Input
  placeholder="Search recipes or health labels"
  value={searchField}
  onChange={(event) => setSearchField(event.target.value)}
  mb={6}
  maxW="400px"
  borderWidth="1px"
  borderColor="gray.300"
  _dark={{ borderColor: "gray.600" }}
  _focus={{
    borderColor: "blue.400",
    boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)",
  }}
/>
      <SimpleGrid
        minChildWidth="200px"
        spacingX={6}
        spacingY={6}
        w="100%"
        maxW="1100px"
      >
        {filteredRecipes.map((item) => (
          <RecipeCard
            key={item.recipe.label}
            recipe={item.recipe}
            onClick={() => setSelectedRecipe(item.recipe)}
          />
        ))}
      </SimpleGrid>
    </Center>
  );
};

import { Center, Heading, Input, SimpleGrid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard";
import { useState } from "react";

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
      <Heading mb={6}>Your Recipe App</Heading>
      <Input
        placeholder="Search recipes or health labels"
        value={searchField}
        onChange={(event) => setSearchField(event.target.value)}
        mb={6}
        maxW="400px"
      />

      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
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

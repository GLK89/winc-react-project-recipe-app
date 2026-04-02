import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard";

export const RecipeListPage = ({ setSelectedRecipe }) => {
  // You can play around with the console log,
  // but ultimately remove it once you are done
  console.log(data.hits[0].recipe.label);

  return (
    <Center flexDir="column" p={4}>
      <Heading mb={6}>Your Recipe App</Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {data.hits.map((item) => (
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

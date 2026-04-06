import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard";
import { useState } from "react";
import { ColorModeButton } from "../components/ui/color-mode";

export const RecipeListPage = ({ setSelectedRecipe }) => {
  const [searchField, setSearchField] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const search = searchField.toLowerCase();

  const filteredRecipes = data.hits.filter((item) => {
    const recipeName = item.recipe.label.toLowerCase();
    const healthLabels = item.recipe.healthLabels.join(" ").toLowerCase();

    const matchesSearch =
      recipeName.includes(search) || healthLabels.includes(search);

    const matchesFilter =
      selectedFilter === "" ||
      item.recipe.healthLabels.includes(selectedFilter);

    return matchesSearch && matchesFilter;
  });

  return (
    <Center
      flexDir="column"
      p={4}
      w="100%"
      minH="100vh"
      bg="#FBE8CE"
      _dark={{ bg: "gray.900" }}
    >
      <Flex
        w="100%"
        maxW="1100px"
        align="center"
        justify="center"
        position="relative"
        mb={6}
      >
        <Heading
          textAlign="center"
          color="#5F6F52"
          _dark={{ color: "green.100" }}
        >
          Your Recipe App
        </Heading>
        <ColorModeButton position="absolute" right="0" />
      </Flex>

      <Input
        placeholder="Search recipes or health labels"
        value={searchField}
        onChange={(event) => setSearchField(event.target.value)}
        mb={6}
        maxW="400px"
        bg="white"
        borderWidth="1px"
        borderColor="#C3CC9B"
        _dark={{ bg: "gray.800", borderColor: "gray.600" }}
        _focus={{
          borderColor: "#9AB17A",
          boxShadow: "0 0 0 1px #9AB17A",
        }}
      />

      <HStack spacing={3} mb={6} wrap="wrap" justify="center">
        <Button
          size="sm"
          variant={selectedFilter === "" ? "solid" : "outline"}
          onClick={() => setSelectedFilter("")}
        >
          All
        </Button>

        <Button
          size="sm"
          variant={selectedFilter === "Vegan" ? "solid" : "outline"}
          onClick={() => setSelectedFilter("Vegan")}
        >
          Vegan
        </Button>

        <Button
          size="sm"
          variant={selectedFilter === "Vegetarian" ? "solid" : "outline"}
          onClick={() => setSelectedFilter("Vegetarian")}
        >
          Vegetarian
        </Button>

        <Button
          size="sm"
          variant={selectedFilter === "Pescatarian" ? "solid" : "outline"}
          onClick={() => setSelectedFilter("Pescatarian")}
        >
          Pescatarian
        </Button>
      </HStack>

      <SimpleGrid
        columns={[1, 2, 3]}
        gap={8}
        w="100%"
        maxW="1100px"
        justifyItems="center"
      >
        {filteredRecipes.map((item) => (
          <Box key={item.recipe.label} w="100%" maxW="280px">
            <RecipeCard
              recipe={item.recipe}
              onClick={() => setSelectedRecipe(item.recipe)}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
};

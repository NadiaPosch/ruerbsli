import { RecipeData } from "../../src/data/recipes";

export const getFilteredRecipes = (term: string, recipes: RecipeData[]) =>
  recipes.reduce<RecipeData[]>((acc, recipe) => {
    const searchTerm = term.toLowerCase();
    const includesZutat =
      recipe.zutaten
        .flatMap(({ zutat }) => zutat.toLowerCase())
        .filter((zutat) => zutat.includes(searchTerm)).length > 0;
    const includesTitle = recipe.name.toLocaleLowerCase().includes(searchTerm);

    return includesZutat || includesTitle ? [...acc, recipe] : acc;
  }, []);

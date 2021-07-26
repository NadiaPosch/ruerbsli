const fs = require("fs");
const path = require("path");

export type RecipeData = {
  id: string;
  name: string;
  zutaten: {
    einheit: string;
    zutat: string;
  }[];
  dauer: string;
  schritte: string[];
  portionen: number;
  nutrition: {
    protein: string;
    carbs: string;
    fat: string;
  };
  bild: string;
};

export const getRecipes = (): RecipeData[] => {
  const dir = "./src/data";
  return fs
    .readdirSync(dir)
    .filter((name: string) => path.extname(name) === ".json")
    .map((name: string) => {
      const fileData = fs.readFileSync(path.join(dir, name));
      return JSON.parse(fileData.toString());
    });
};

export const getRecipeParams = () =>
  getRecipes().map((recipe) => ({
    params: {
      id: recipe.id,
    },
  }));

export const getRecipe = (id: string) =>
  getRecipes().find((recipe) => recipe.id === id) || null;

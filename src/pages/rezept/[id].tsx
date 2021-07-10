import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getRecipe, getRecipeParams, RecipeData } from "../../data/recipes";
import { Recipe } from "../../elements/recipe";

type Props = {
  recipe: RecipeData | null;
};

const Rezept: NextPage<Props> = ({ recipe }) => {
  if (recipe === null) {
    return <div>not found</div>;
  }

  return <Recipe recipe={recipe} />;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getRecipeParams(),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: {
    recipe: getRecipe(params?.id?.toString() || ""),
  },
});

export default Rezept;

import { motion } from "framer-motion";
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

  return (
    <motion.div
      key={recipe.id}
      initial={{ opacity: 0, translateY: "10px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      transition={{ duration: 1 }}
    >
      <Recipe recipe={recipe} />
    </motion.div>
  );
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

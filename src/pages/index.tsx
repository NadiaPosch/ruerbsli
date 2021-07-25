import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getRecipes, RecipeData } from "../data/recipes";
import { Card } from "../elements/card";
import { Title } from "../elements/title";
type Props = {
  recipes: RecipeData[];
};

const Home: NextPage<Props> = ({ recipes }) => {
  return (
    <div className="flex flex-wrap gap-8">
      {recipes.map((recipe) => (
        <Link key={recipe.name} href={`/rezept/${recipe.id}`}>
          <a className="">
            <Card className="w-32 h-32 flex justify-center items-center text-center hover:text-yellow-500 hover:border-yellow-500 transition-colors">
              <Title>{recipe.name}</Title>
            </Card>
          </a>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    recipes: getRecipes(),
  },
});

export default Home;

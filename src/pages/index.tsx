import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getRecipes, Recipe } from "../data/recipes";
import { Card } from "../elements/card";
import { Title } from "../elements/title";
import { Page } from "../layout/page";
type Props = {
  recipes: Recipe[];
};

const Home: NextPage<Props> = ({ recipes }) => {
  return (
    <Page>
      <div className="flex flex-wrap gap-8 max-w-lg">
        {recipes.map((recipe) => (
          <Link key={recipe.name} href={`/rezept/${recipe.id}`}>
            <a className="hover:opacity-80 transition-opacity">
              <Card className="w-32 h-32 flex justify-center items-center">
                <Title>{recipe.name}</Title>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    recipes: getRecipes(),
  },
});

export default Home;

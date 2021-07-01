import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { getRecipes, Recipe } from "../data/recipes";

type Props = {
  recipes: Recipe[];
};

const Home: NextPage<Props> = ({ recipes }) => {
  return (
    <div className="container">
      <Head>
        <title>Ruerbsli</title>
        <meta name="description" content="Ruebli + Erbsli = Ruerbsli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main grid">
        {recipes.map((recipe) => (
          <Link key={recipe.name} href={`/rezept/${recipe.id}`}>
            <a>
              <div className="card">{recipe.name}</div>
            </a>
          </Link>
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    recipes: getRecipes(),
  },
});

export default Home;

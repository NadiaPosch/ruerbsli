import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getFilteredRecipes } from "../../public/helper/get-filtered-recipes";
import { getRecipes, RecipeData } from "../data/recipes";
import { Card } from "../elements/card";
import { Title } from "../elements/title";

type Props = {
  recipes: RecipeData[];
};

const Home: NextPage<Props> = ({ recipes }) => {
  const [currentRecipes, setCurrentRecipes] = useState(recipes);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCurrentRecipes(
      searchTerm.length > 0 ? getFilteredRecipes(searchTerm, recipes) : recipes
    );
  }, [searchTerm, recipes]);

  return (
    <>
      <input
        className="w-full px-4 py-2 mb-8 rounded-md"
        placeholder="Suchen..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
        {currentRecipes.map(({ name, id }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, translateY: "10px" }}
            animate={{ opacity: 1, translateY: "0px" }}
            transition={{
              type: "spring",
              delay: index / 10,
              mass: 2,
            }}
          >
            <Link href={`/rezept/${id}`}>
              <a>
                <Card className="w-32 h-32 flex justify-center items-center text-center hover:text-yellow-500 hover:border-yellow-500 transition-colors">
                  <Title>{name}</Title>
                </Card>
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    recipes: getRecipes(),
  },
});

export default Home;

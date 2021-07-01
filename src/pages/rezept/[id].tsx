import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { getRecipe, getRecipeParams, Recipe } from "../../data/recipes";
import { Card } from "../../elements/card";
import { Page } from "../../layout/page";

type Props = {
  recipe: Recipe | null;
};

const Rezept: NextPage<Props> = ({ recipe }) => {
  if (recipe === null) {
    return <div>not found</div>;
  }

  return (
    <Page>
      <Card>
        <h1 className="text-2xl font-bold text-white text-center mb-8">
          {recipe.name}
        </h1>
        <Image
          src={recipe.bild}
          alt="Chilli"
          objectFit="cover"
          height={300}
          width={300}
          className="rounded-md"
        />
      </Card>
    </Page>
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

import { FC } from "react";
import { RecipeData } from "../data/recipes";

type Props = {
  recipe: RecipeData;
};

export const Recipe: FC<Props> = ({ recipe }) => (
  <div>
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
      {recipe.zutaten.map((zutat) => (
        <>
          <div className="text-right">{zutat.einheit}</div>
          <div>{zutat.zutat}</div>
        </>
      ))}
    </div>
    <div className="grid grid-flow-row gap-4">
      {recipe.schritte.map((schritt, i) => (
        <div key={schritt}>
          <span>{i + 1}. </span>
          {schritt}
        </div>
      ))}
    </div>
  </div>
);

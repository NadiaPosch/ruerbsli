import Image from "next/image";
import { FC } from "react";
import { RecipeData } from "../data/recipes";
import { Card } from "./card";
import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { Clock, Cutlery } from "./icons";

type Props = {
  recipe: RecipeData;
};

export const Recipe: FC<Props> = ({ recipe }) => {
  const {
    bild,
    name,
    portionen,
    dauer,
    schritte,
    zutaten,
    nutrition: { protein, fat, carbs },
  } = recipe;

  return (
    <div>
      <Card className="pb-8">
        <Image
          src={bild}
          alt=""
          objectFit="cover"
          height={400}
          width={768}
          className="rounded-t-md"
        />

        <Heading1>{name}</Heading1>
        <div className="flex justify-center gap-x-6 items-center text-white text-lg">
          <div className="flex gap-x-2 text-xl items-center">
            <Cutlery width={24} height={24} />
            <div>
              {portionen}
              <span> {portionen === 1 ? "Portion" : "Portionen"}</span>
            </div>
          </div>

          <div className="flex gap-x-2 text-xl items-center">
            <Clock width={20} height={20} />
            <div>{dauer}</div>
          </div>
        </div>

        <Heading2>Zutaten</Heading2>
        <div className="grid grid-cols-custom gap-x-4 gap-y-2 md:mx-auto">
          {zutaten.map((zutat, index) => (
            <>
              <div key={`einheit-${index}`} className="text-right">
                {zutat.einheit}
              </div>
              <div key={`zutat-${index}`}>{zutat.zutat}</div>
            </>
          ))}
        </div>

        <Heading2>Schritte</Heading2>
        <ol className="list-decimal grid grid-flow-row gap-4 px-8">
          {schritte.map((schritt, i) => (
            <li key={schritt}>{schritt}</li>
          ))}
        </ol>

        <Heading2>Nährwerte</Heading2>
        <div className="flex text-right gap-x-4 justify-center">
          <div>
            <div>Protein</div>
            <div>{protein}</div>
          </div>
          <div>
            <div>Carbs</div>
            <div>{carbs}</div>
          </div>
          <div>
            <div>Fett</div>
            <div>{fat}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

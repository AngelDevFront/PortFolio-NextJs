import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, ChefHat, Film, KeyRound, Utensils } from "lucide-react";
import { Spacing } from "./Spacing";

export const CardsProjects = () => {
  const cardProjects = [
    {
      logo: <Building />,
      title: "L'Atelier Bernard",
      description:
        "Création d'un site internet pour une entreprise de rénovation d'appartement fait en Html, CSS, Sass/css",
      link: "https://angeldevfront.github.io/L-Atelier-Bernard.github.io/",
    },
    {
      logo: <Utensils />,
      title: "Le Resto",
      description:
        "Projet d'un restaurant fictif effectuer pendant ma formation en autodidacte en Html, CSS et Sass/Scss ",
      link: "https://angeldevfront.github.io/Projet4-Le-resto.github.io/",
    },
    {
      logo: <KeyRound />,
      title: "Générateur de mot de passe",
      description:
        "Petit projet sympa effectuer pendant ma formation en autodidacte en Html, CSS et JavaScript ",
      link: "https://angeldevfront.github.io/Generateur-MDP.github.io/",
    },
    {
      logo: <ChefHat />,
      title: "Cooking App",
      description:
        "Petite application de cuisine pour avoir des recette en écrivant un ingrédient en anglais fais en Html, CSS et JavaScript ",
      link: "https://angeldevfront.github.io/Application-de-cuisine-github-io/",
    },

    // {
    //   logo: <Film />,
    //   title: "Ciné App",
    //   description:
    //     "Petite application de cuisine pour avoir des recette en écrivant un ingrédient en anglais fais en Html, CSS et react ",
    //   link: "https://cine-app-react.netlify.app",
    // },
    // {
    //   logo: <Film />,
    //   title: "Ciné App",
    //   description:
    //     "Petite application de cuisine pour avoir des recette en écrivant un ingrédient en anglais fais en Html, CSS et react ",
    //   link: "https://cine-app-react.netlify.app",
    // },

    {
      logo: <Film />,
      title: "Ciné App",
      description:
        "Petite App de cinéma qui permet de classer les films du meilleurs au moins bon et inversement, de rechercher des films, et aussi de faire une liste de coup de coeur fait en React, JavaScript",
      link: "https://cine-app-react.onrender.com",
    },
  ];

  return (
    <div className="flex-[3] w-full">
      <Card className="w-full p-4 flex flex-col gap-2">
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          {cardProjects.map((data, index) => (
            <div key={index}>
              {data.logo}
              <h3>{data.title}</h3>
              <p className="text-lg text-muted-foreground">
                {data.description}
              </p>
              <a
                href={data.link}
                className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
              >
                Lien vers le projet
              </a>
              <Spacing size="sm" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

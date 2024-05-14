import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spacing } from "./Spacing";

export const CardsExperience = () => {
  const cardsExperience = [
    {
      Entreprise: "L'Atelier Bernard",
      Date: "de janvier 2024 à mars 2024",
    },
    // {
    //   Entreprise: "",
    //   Date:,
    // },
    // {
    //   Entreprise:,
    //   date:,
    // },
  ];

  return (
    <Card className="p-4 flex-1">
      <CardHeader>
        <CardTitle>Expérience</CardTitle>
      </CardHeader>
      <CardContent>
        {cardsExperience.map((data, index) => (
          <div key={index}>
            <h3>{data.Entreprise}</h3>
            <p>{data.Date}</p>
            <Spacing />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

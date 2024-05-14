import { CardsExperience } from "./CardsExperience";
import { CardsProjects } from "./CardsProjects";
import { CardsReseauxSociaux } from "./CardsRéseaux-Sociaux";

export const Section2 = () => {
  return (
    <section className="flex flex-wrap  items-start justify-center gap-4">
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <CardsProjects />
      </div>
      <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-4">
        <CardsExperience />
        <CardsReseauxSociaux />
      </div>
    </section>
  );
};

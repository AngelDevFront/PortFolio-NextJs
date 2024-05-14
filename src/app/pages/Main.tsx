import { Section1 } from "../components/Section1";
import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";
import { Spacing } from "../components/Spacing";
import { Section4 } from "../components/section4";

export const Main = () => {
  return (
    <div>
      <div className="flex flex-wrap items-start  justify-center gap-4">
        <Section1 />
      </div>
      <Spacing size="md" />

      <Section2 />

      <Spacing size="md" />

      <Section3 />

      <Spacing size="md" />

      <Section4 />
    </div>
  );
};

import Image from "next/image";
import logoImage from "../assets/img/Moi-logo.png";
import { Code } from "./Code";
export const Section1 = () => {
  return (
    <section className="flex justify-center max-md:flex-col items-center gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-Ubu font-bold text-5xl text-primary">
          Fontaine David
        </h2>
        <h3 className="font-Ubu text-3xl">
          Développeur Front-End / Intégrateur-Web
        </h3>
        <p className="text-base">
          Passionné depuis longtemps par les métiers de
          <Code className="inline-flex item-center gap-1">
            Développeur Front-End
          </Code>
          et
          <Code className="inline-flex item-center gap-1">Intégrateur Web</Code>
          I Love Create and Redesign
          <Code className="inline-flex item-center gap-1">Web-Site</Code> and
          <Code className="inline-flex item-center gap-1">Application</Code>
        </p>
      </div>
      <div className="flex-[2] max-md m-auto ml-auto">
        <Image
          src={logoImage}
          className="w-full h-auto max-w-xs max-md-w-56"
          alt="Fontaine David Logo"
          loading="lazy"
        />
      </div>
    </section>
  );
};

import { Code } from "./Code";
import { Spacing } from "./Spacing";
import { NextJSLogo } from "./icons/NextJSLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";

export const Section3 = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Skills
      </h2>
      <h3 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J-aime travaillé avec ...
      </h3>
      <Spacing size="sm" />
      <div>
        <div className="flex max-md:flex-col gap-4">
          <div className="flex flex-col gap-2 flex1">
            <ReactLogo
              size={42}
              className="animate-spin"
              style={{
                animationDuration: "10s",
              }}
            />
            <h3 className="text-2xl font-semibold tracking-tight">React</h3>
            <p className="text-sm text-muted-foreground">
              Mon Framework principal est <Code>React</Code>.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <TailwindLogo size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
            <p className="text-sm text-muted-foreground">
              Je peux créer une belle <u>application</u> en{" "}
              <i>quelques secondes</i> en utilisant <Code>TailwindCSS</Code>
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <NextJSLogo width={140} height={42} />
            <h3 className="text-2xl font-semibold tracking-tight">NextJS</h3>
            <p className="text-sm text-muted-foreground">
              J-utilise également <Code>NextJS</Code>
              comme Framework Frontend et Backend
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

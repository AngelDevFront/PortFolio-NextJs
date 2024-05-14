import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { ReactElement } from "react";
import { Spacing } from "./Spacing";
import { GithubIcons } from "./icons/GithubIcons";
import { InstaIcons } from "./icons/InstaIcons";
import { LinkedinIcon } from "./icons/LinkedinIcons";

type ContactSection = {
  Image: ReactElement;
  Link: string;
};

export const ContactSection = () => {
  const contactSection = [
    {
      Image: (
        <GithubIcons className="w-5 h-5 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20" />
      ),
      Link: "https://github.com/AngelDevFront",
    },
    {
      Image: (
        <LinkedinIcon className="w-5 h-5 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20" />
      ),
      Link: "https://www.linkedin.com/in/david-fontaine-991922206/",
    },
    {
      Image: (
        <InstaIcons className="w-5 h-5 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20" />
      ),
      Link: "https://www.instagram.com/angeldevfont/",
    },
    {
      Image: (
        <Mail className="w-5 h-5 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20" />
      ),
      Link: "mailto:fontaine.david291823@gmail.com",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Contact Me
      </h2>
      <h3 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Je serai heureux de travailler avec vous
      </h3>
      <Spacing size="sm" />
      <Card className="p-4 flex-1">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent>
          {contactSection.map((data, index) => (
            <div key={index}>
              {data.Image}
              <Spacing size="sm" />{" "}
              <p className="hover:bg-accent/30 transition-colors group-hover:translate-x-2 group-hover:translate-y-2">
                <a href={data.Link} target="_blank" rel="noopener noreferrer">
                  {data.Link}
                </a>
              </p>
              <Spacing size="sm" />
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubIcons } from "../components/icons/GithubIcons";
import { InstaIcons } from "../components/icons/InstaIcons";
import { LinkedinIcon } from "../components/icons/LinkedinIcons";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 h-full">
      <section className="flex items-baseline max-w-3xl px-4 m-auto">
        <h1 className="text-lg font-bold text-primary">
          FontaineDavid-Portfolio.netlify.app
        </h1>
        <div className="flex-1">
          <ul className="flex justify-end">
            <Link
              href="https://github.com/AngelDevFront"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <GithubIcons size={12} className="text-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/david-fontaine-991922206/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <LinkedinIcon size={12} className="text-foreground" />
            </Link>
            <Link
              href="https://www.instagram.com/angeldevfont/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <InstaIcons size={12} className="text-foreground" />
            </Link>
          </ul>
        </div>
      </section>
    </header>
  );
};

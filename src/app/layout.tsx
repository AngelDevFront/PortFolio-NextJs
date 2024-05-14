import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Paprika, Ubuntu } from "next/font/google";
import { Spacing } from "./components/Spacing";
import { Footer } from "./pages/Footer";
import { Header } from "./pages/Header";
import { Main } from "./pages/Main";
import "./styles/globals.css";

const Ubu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubu",
  weight: "400",
});
const Pap = Paprika({
  subsets: ["latin"],
  variable: "--font-ubu",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Fontaine David PortFolio",
  description:
    "Développeur Front-End et Intégrateur web passionné par la création de sites web et d'applications. Expérience dans le métier de développeur Web, avec une spécialisation en Développement Front-End React, TypeScript, Tailwind.",
};

export default function RootLayout() {
  return (
    <html lang="fr">
      <body
        className={cn(
          Ubu.variable,
          Pap.variable,
          "font-Pap h-full bg-background text-foreground"
        )}
      >
        <Header />

        <Spacing />

        <Main />

        <Spacing />

        <Footer />
      </body>
    </html>
  );
}

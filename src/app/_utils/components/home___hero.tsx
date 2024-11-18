import Link from "next/link";
import BG___HomeHero from "./bg-homehero";
import HeadingOne from "@/components/typography/heading___one";
import Anim___FadeUp from "@/components/anims/anim___fadeup";
import { ShinyButton } from "@/components/molecules/shiny-button";

const Home___Hero = () => {
  return (
    <section className="bg-gradient-to-t from-white via-white to-secondary section hero-gap relative overflow-hidden">
      <BG___HomeHero className="absolute top-0 left-0 w-auto min-[1380px]:w-full h-full min-[1380px]:h-auto object-contain object-bottom" />
      <div className="container py-16 flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 font-semibold">
          <p className="text-primary text-center text-sm">
            Emerging tools for the future
          </p>
          <HeadingOne>Your Ultimate</HeadingOne>
          <HeadingOne
            className="text-primary"
            delay={0.75}
            shine={true}
            color="hsl(var(--primary))"
          >
            RESUME PARSING
          </HeadingOne>
          <HeadingOne delay={1}>Tool</HeadingOne>
        </div>
        <Anim___FadeUp key={1} delay={1} className="text-center max-w-2xl">
          <span className="font-semibold">
            Parse resumes and predict the best fit candidates offering salary
            expectations effortlessly
          </span>{" "}
          with our cutting-edge technology. Simplify your hiring process and
          save time with our powerful parsing tool.
        </Anim___FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto">
          <Link href="/how-it-works">
            <ShinyButton className="w-full sm:w-auto">Get Started</ShinyButton>
          </Link>
          <Link href="/contact">
            <ShinyButton
              variant="outline"
              delay={0.5}
              className="w-full sm:w-auto"
            >
              Explore more
            </ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home___Hero;

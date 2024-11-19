import Link from "next/link";
import BG___HomeHero from "./bg-homehero";
import HeadingOne from "@/components/typography/heading___one";
import Anim___FadeUp from "@/components/anims/anim___fadeup";
import { ShinyButton } from "@/components/molecules/shiny-button";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

const Home___Hero = () => {
  return (
    <section className="bg-gradient-to-t from-white via-white to-secondary section hero-gap relative overflow-hidden">
      <BG___HomeHero className="absolute top-0 left-0 w-auto min-[1380px]:w-full h-full min-[1380px]:h-auto object-contain object-bottom" />
      <div className="container py-16 flex flex-col gap-8 items-center justify-center">
        <Anim___FadeUp
          delay={0.2}
          key={1}
          className="flex flex-col items-center justify-center gap-4 font-semibold"
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing Blaze Parser</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
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
        </Anim___FadeUp>
        <Anim___FadeUp key={1} delay={1} className="text-center max-w-2xl">
          <span className="font-semibold">
            Parse resumes and predict the best fit candidates offering salary
            expectations effortlessly
          </span>{" "}
          with our cutting-edge technology. Simplify your hiring process and
          save time with our powerful parsing tool.
        </Anim___FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full sm:w-auto">
          <Link href="/dashboard/settings">
            <ShinyButton className="w-full sm:w-auto">Get Started</ShinyButton>
          </Link>
          <Link href="/contact-us">
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

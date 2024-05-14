import { Button } from "@/components/ui/button";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeatureSection from "./_utils/components/feature.section";

const Home = () => {
  return (
    <>
      <section className="container section flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            The Ultimate Resume/CV Parsing Tool
          </h1>
          <p className="text-lg md:text-xl mb-3">
            Parse resumes effortlessly with our cutting-edge technology.
            Simplify your hiring process and save time with our powerful parsing
            tool.
          </p>
          <div className="flex gap-4">
            <Link href="/dashboard/recruiter">
              <Button className="uppercase">Get Started</Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                variant="outline"
                className="items-center gap-2 uppercase"
              >
                Know more <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0">
          <Image
            src="/heroimage.png"
            alt="Resume Parser"
            width={1000}
            height={1000}
            className="w-full h-auto my-auto"
          />
        </div>
      </section>
      <FeatureSection />
    </>
  );
};

export default Home;

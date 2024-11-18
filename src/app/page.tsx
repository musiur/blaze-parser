import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeatureSection from "./_utils/components/feature.section";

const Home = () => {
  return (
    <>
      <section className="bg-green-900 section [&>*]:text-center">
        <div className="section space-y-8 max-w-xl mx-auto px-4 md:px-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">
            The&nbsp;Ultimate
            <br />
            <span className="text-4xl md:text-6xl font-bold text-primary">
              Resume/CV Parsing
            </span>
            &nbsp;Tool
          </h1>
          <p className="text-lg md:text-xl mb-3 text-white">
            Parse resumes effortlessly with our cutting-edge technology.
            Simplify your hiring process and save time with our powerful parsing
            tool.
          </p>
          <div className="flex gap-4">
            <Link href="/dashboard">
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
      </section>
      <FeatureSection />
    </>
  );
};

export default Home;

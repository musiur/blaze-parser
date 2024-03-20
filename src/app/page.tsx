import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container section">
      <section className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
            Welcome to Resume Parser
          </h1>
          <p className="text-lg md:text-xl mb-3">
            Parse resumes effortlessly with our cutting-edge technology.
            Simplify your hiring process and save time with our powerful parsing
            tool.
          </p>
          <div>
            <Link href="/tokenizer">
              <Button>Get Started</Button>
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
    </div>
  );
};

export default Home;

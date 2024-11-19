import Anim___FadeUp from "@/components/anims/anim___fadeup";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { Badge, BadgeCheck, Twitter } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
    twitterLink: "https://twitter.com/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
    twitterLink: "https://twitter.com/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
    twitterLink: "https://twitter.com/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
    twitterLink: "https://twitter.com/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
    twitterLink: "https://twitter.com/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
    twitterLink: "https://twitter.com/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full min-w-12 min-h-12 w-12 h-12"
          width={100}
          height={100}
          alt=""
          src={img}
        />
        <div className="flex flex-col relative w-full">
          <Twitter className="absolute top-0 right-0 fill-blue-400 stroke-blue-400 w-5 h-5" />
          <figcaption className="text-sm font-medium dark:text-white flex items-center gap-2">
            {name} <BadgeCheck className="fill-blue-400 stroke-white w-5 h-5" />
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Home___Review() {
  return (
    <section className="section space-y-8">
      <Anim___FadeUp delay={0.2} key={1} className="space-y-4 container">
        <h2 className="text-center">What People Are Saying</h2>
        <p className="text-center max-w-lg mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what{" "}
          <span className="font-semibold">real people</span> are saying about
          Blaze Parser on Twitter.
        </p>
      </Anim___FadeUp>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}

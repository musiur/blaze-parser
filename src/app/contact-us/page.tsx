import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Have a question or want to work together? Fill out the form below
            and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[120px]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

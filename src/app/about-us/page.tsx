import Image from "next/image";

export default function AboutUs() {
  const TeamMembers = [
    {
      id: 1,
      name: "Musiur Alam Opu",
      designation: "Tech Lead",
      image:
        "https://utfs.io/f/Tqz4CHeTuQcdtLdXXRzTNaiov94M81jt0G2dFSgHkpn7UEwP",
    },
    {
      id: 2,
      name: "Md. Jahidul Islam",
      designation: "Project Manager",
      image: "https://github.com/shadcn.png",
    },
    {
      id: 3,
      name: "Shamimur Rahaman",
      designation: "Research & Development",
      image: "https://github.com/shadcn.png",
    },
    {
      id: 4,
      name: "Sumaiya Haque Bithy",
      designation: "Research & Development",
      image: "https://github.com/shadcn.png",
    },
  ];
  return (
    <div className="w-full min-h-screen section hero-gap bg-gradient-to-t from-white via-white to-secondary">
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              About
            </h1>
            <p>
              Resume Parser is a powerful web application that helps you quickly
              and accurately extract key information from resumes. Our advanced
              natural language processing technology analyzes the content of
              resumes, identifying and structuring crucial details like work
              experience, education, skills, and more.
            </p>
            <p>
              With Resume Parser, you can streamline your hiring process, save
              time, and make more informed decisions about potential candidates.
              Our user-friendly interface and customizable settings make it easy
              to integrate Resume Parser into your existing workflow.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {TeamMembers.map((member: any) => {
              const { id, name, designation, image } = member;
              return (
                <div key={id}>
                  <Image
                    alt="Team Member 1"
                    className="h-auto w-full rounded-3xl object-cover"
                    height={300}
                    src={image}
                    style={{
                      aspectRatio: "300/300",
                      objectFit: "cover",
                    }}
                    width={300}
                    placeholder="blur"
                    quality={80}
                    blurDataURL={"https://github.com/shadcn.png"}
                  />
                  <h3 className="mt-4 font-semibold">
                    {name}
                  </h3>
                  <p>
                    {designation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import Anim___FadeUp from "@/components/anims/anim___fadeup";
import {
  BarChartIcon,
  BoldIcon,
  BriefcaseIcon,
  CogIcon,
  LockIcon,
  RocketIcon,
} from "lucide-react";

const features = [
  {
    icon: <BoldIcon />,
    title: "Automation",
    description:
      "Streamline your hiring workflows with our powerful automation tools.",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Collaboration",
    description: "Collaborate seamlessly with your team on the hiring process.",
  },
  {
    icon: <RocketIcon />,
    title: "Scalability",
    description:
      "Scale your hiring process with our reliable and flexible platform.",
  },
  {
    icon: <BarChartIcon />,
    title: "Analytics",
    description: "Gain valuable insights with our powerful analytics tools.",
  },
  {
    icon: <LockIcon />,
    title: "Security",
    description: "Keep your data safe with our robust security measures.",
  },
  {
    icon: <CogIcon />,
    title: "Customization",
    description: "Tailor our platform to fit your unique hiring needs.",
  },
];

const Home___Feature = () => {
  return (
    <section className="container section">
      <div className="space-y-6 text-center">
        <Anim___FadeUp delay={0.5} key={1} className="space-y-3">
          <h2>
            Features that you might get interesting
          </h2>
          <p className="max-w-xl mx-auto">
            Our resume/CV parser offers a range of features to streamline your
            hiring process and boost your productivity.
          </p>
        </Anim___FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => {
            const { icon, title, description } = feature;
            return (
              <Anim___FadeUp
                key={index}
                delay={0.5 + index * 0.1}
                className="flex flex-col items-start bg-gradient-to-tl from-secondary via-white to-white p-6 transition ease-in-out duration-300 rounded-lg space-y-4 group grayscale hover:grayscale-0 "
              >
                <div className="[&>svg]:h-6 [&>svg]:w-6 group-hover:text-green-700">
                  {icon}
                </div>
                <div className="space-y-2 text-left">
                  <h3 className="font-semibold">{title}</h3>
                  <p>{description}</p>
                </div>
              </Anim___FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home___Feature;

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
    icon: <BoldIcon className="h-6 w-6 group-hover:text-green-700" />,
    title: "Automation",
    description:
      "Streamline your hiring workflows with our powerful automation tools.",
  },
  {
    icon: <BriefcaseIcon className="h-6 w-6 group-hover:text-green-700" />,
    title: "Collaboration",
    description: "Collaborate seamlessly with your team on the hiring process.",
  },
  {
    icon: <RocketIcon className="h-6 w-6 group-hover:text-green-700" />,
    title: "Scalability",
    description:
      "Scale your hiring process with our reliable and flexible platform.",
  },
  {
    icon: <BarChartIcon className="h-6 w-6 group-hover:text-green-700" />,
    title: "Analytics",
    description: "Gain valuable insights with our powerful analytics tools.",
  },
  {
    icon: <LockIcon className="h-6 w-6 group-hover:text-green-700" />,
    title: "Security",
    description: "Keep your data safe with our robust security measures.",
  },
  {
    icon: <CogIcon className="h-6 w-6 group-hover:text-green-700" />,
    title: "Customization",
    description: "Tailor our platform to fit your unique hiring needs.",
  },
];

const FeatureSection = () => {
  return (
    <section className="container section">
      <div className="space-y-6 text-center">
        <div className="space-y-3">
          <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
            Resume/CV Parser Features
          </h2>
          <p className="max-w-xl mx-auto">
            Our resume/CV parser offers a range of features to streamline your
            hiring process and boost your productivity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => {
            const { icon, title, description } = feature;
            return (
              <div
                key={index}
                className="flex flex-col items-start bg-white p-6 transition-all duration-300 hover:bg-gray-100 rounded-lg space-y-4 group"
              >
                {icon}
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

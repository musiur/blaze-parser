import {
  File,
  List,
  MessageCircle,
  Mouse,
  Settings,
  Target,
} from "lucide-react";
import Assets___ParserModal from "../assets/assets___parser_modal";
import Assets___RightLeaf from "../assets/assets___right_leaf";
import Assets___PredictionModal from "../assets/assets___prediction_modal";
import Assets___LeftLeaf from "../assets/assets___left_leaf";
import clsx from "clsx";
import Anim___FadeUp from "@/components/anims/anim___fadeup";

const Home___HowItWorks = () => {
  const twoSidesData = [
    {
      id: 1,
      list: [
        {
          icon: <File />,
          title: "Upload your resume/CV",
          description: "Start the parsing process to analyze your document.",
        },
        {
          icon: <Settings />,
          title: "Customize your settings",
          description:
            "Adjust the parsing process to extract relevant information.",
        },
        {
          icon: <List />,
          title: "Review the parsed data",
          description: "Verify the accuracy of the parsed data.",
        },
      ],
      modal: <Assets___ParserModal className="max-w-[400px]" />,
      leaf: <Assets___RightLeaf className="max-h-[400px] my-auto" />,
    },
    {
      id: 2,
      list: [
        {
          icon: <Mouse />,
          title: "Apply to jobs",
          description: "Read the job description and apply to jobs.",
        },
        {
          icon: <Target />,
          title: "Get predicted salary",
          description:
            "Prediction of salary expectations based on your resume/CV with our AI model.",
        },
        {
          icon: <MessageCircle />,
          title: "Get personalized feedback",
          description:
            "Personalized feedback on your resume/CV and job applications.",
        },
      ],
      modal: <Assets___PredictionModal className="max-w-[400px]" />,
      leaf: <Assets___LeftLeaf className="max-h-[400px] my-auto" />,
    },
  ];
  return (
    <section className="section bg-gradient-to-br from-primary to-secondary animate-gradient-direction">
      <div className="container bg-white/90 backdrop-blur-sm rounded-[32px] md:rounded-[64px] px-6 md:px-16 section space-y-12">
        <Anim___FadeUp delay={0.2} key={1} className="space-y-4">
          <h2 className="text-center">
            The way we parse and <br /> predict salary expectations
          </h2>
          <p className="text-center max-w-lg mx-auto">
            Our resume/CV parser offers a range of features to streamline your
            hiring process and boost your productivity. Now, let&apos;s see how it
            works.
          </p>
        </Anim___FadeUp>
        <div className="space-y-8">
          {twoSidesData.map((item) => {
            const { id, list, modal, leaf } = item;
            return (
              <div
                key={id}
                className={clsx("flex flex-col md:flex-row gap-10 relative", {
                  "flex-col-reverse md:flex-row-reverse": id === 2,
                })}
              >
                <div
                  className={clsx("absolute top-0 w-full h-full flex z-[-1]", {
                    "left-0 items-start justify-start": id === 2,
                    "right-0 items-end justify-end": id === 1,
                  })}
                >
                  {leaf}
                </div>
                <div className="flex-1 flex flex-col gap-6 my-auto">
                  {list.map((listItem, index) => {
                    const { icon, title, description } = listItem;
                    return (
                      <Anim___FadeUp delay={0.2 * index} key={index} className="flex gap-4 w-full">
                        <div className="min-h-12 min-w-12 w-12 h-12 rounded-full text-white bg-gradient-to-tr from-secondary to-primary flex items-center justify-center">
                          {icon}
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">{title}</h3>
                          <p>{description}</p>
                        </div>
                      </Anim___FadeUp>
                    );
                  })}
                </div>
                <Anim___FadeUp
                  delay={0.2 * id}
                  key={id}
                  className={clsx("flex-1 flex", {
                    "justify-start": id === 1,
                    "justify-end": id === 2,
                  })}
                >
                  {modal}
                </Anim___FadeUp>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home___HowItWorks;

import Home___Feature from "./_utils/components/home___feature";
import { Fragment } from "react";
import Home___Hero from "./_utils/components/home___hero";
import Home___HowItWorks from "./_utils/components/home___how_it_works";

const Home = () => {
  return (
    <Fragment>
      <Home___Hero />
      <Home___Feature />
      <Home___HowItWorks />
    </Fragment>
  );
};

export default Home;

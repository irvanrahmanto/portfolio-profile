/** import components */
import Layout from "../Layout";
import Hero from "../section/Hero";
import About from "../section/About";
import Portfolio from "../section/Porfolio";
import Certificate from "../section/Certificate";

const Main = () => {
  return(
    <Layout>
        <Hero />
        <About />
        <Portfolio />
        <Certificate />
    </Layout>
  );
};

export default Main;

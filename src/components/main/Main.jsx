/** import components */
import Layout from "../Layout";
import Hero from "../section/Hero";
import About from "../section/About";
import Portfolio from "../section/Porfolio";

const Main = () => {
  return(
    <Layout>
        <h1>This is content brodie!</h1>
        <Hero />
        <About />
        <Portfolio />
    </Layout>
  );
};

export default Main;

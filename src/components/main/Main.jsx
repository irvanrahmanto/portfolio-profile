/** import components */
import Layout from "../Layout";
import Hero from "../section/Hero";
import About from "../section/About";
import Portfolio from "../section/Portfolio";
import Certificate from "../section/Certificate";
import BlogPost from "../section/BlogPost";

const Main = () => {
  return(
    <Layout>
        <Hero />
        <About />
        <Portfolio />
        <Certificate />
        <BlogPost />
    </Layout>
  );
};

export default Main;

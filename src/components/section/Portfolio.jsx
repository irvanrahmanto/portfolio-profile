import { useState } from "react";

/** import components */
import InfoCard from "../common/card/InfoCard";
/** import JSON static data */
import portfolioData from "../../json/Portfolio";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(portfolioData);
  
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className="text-center mr-auto place-self-center lg:col-span-7" style={{justifyContent: "center", border: "1px solid red"}}>
          <h1 className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-xl dark:text-white uppercase"
            style={{ color: "#2C88D9" }}>Portfolio</h1>
          <h3 className="max-w-4xl mb-6 font-medium lg:mb-8 md:text-lg lg:text-xl" style={{ color: "#2C88D9" }}>My Latest Project</h3>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 flex">
            {portfolio.map((key) => (
              <div key={key.id} className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                <InfoCard urlImg={key.urlImg} urlHeading={key.urlHeading} urlContent={key.urlContent} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

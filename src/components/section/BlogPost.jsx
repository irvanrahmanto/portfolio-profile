import { useState } from "react";
/** import components */

import InfoCard from "../common/card/InfoCard";
/** import JSON static data */
import Article from "../../json/Article";
// import myImg from "../../assets/example-hero.jpg";
import myImg from "../../assets/certificate/Sertfikat-PMMB-Telkom-Irvan-1.png";

const BlogPost = () => {
  const [articlePost, setArticlePost] = useState(Article);

  return (
    <section className="bg-white" id="article">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
        <div className="text-center mr-auto place-self-center lg:col-span-7">
          <h1
            className="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white uppercase"
            style={{ color: "#2C88D9" }}
          >
            Article
          </h1>
          <h3
            className="mb-6 font-medium lg:mb-8 md:text-lg lg:text-xl"
            style={{ color: "#2C88D9", fontFamily: "Poppins" }}
          >
            My Latest Article
          </h3>
          <div className="flex flex-wrap mx-auto text-center md:max-w-fit md:gap-3 lg:max-w-fit lg:gap-3">
            {articlePost.map((item) => (
              // <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg" >
              //   <img
              //     className="w-full"
              //     src={myImg}
              //     alt={item.articleName}
              //   />
              //   <div className="px-6 py-4">
              //     <div className="font-bold text-xl mb-2">
              //       {item.articleName}
              //     </div>
              //     <p className="text-gray-700 text-base">
              //       {item.articleTitle}
              //     </p>
              //   </div>
              //   <div className="px-6 pt-4 pb-2">
              //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              //       #photography
              //     </span>
              //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              //       #travel
              //     </span>
              //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              //       #winter
              //     </span>
              //   </div>
              // </div>
              <InfoCard
                key={item.id}
                articleName={item.articleName}
                articleTitle={item.articleTitle}
                articlePost={item.articlePost}
                urlImage={item.urlImage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;

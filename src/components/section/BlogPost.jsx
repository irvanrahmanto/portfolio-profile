import {useState} from "react";
/** import components */
import InfoCard from "../common/card/InfoCard";
/** import JSON static data */
import Article from "../../json/Article";

const BlogPost = () => {
    const [articlePost, setArticlePost] = useState(Article);

    return (
        <section className="bg-white" id="article">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <div className="text-center mr-auto place-self-center lg:col-span-7">
                <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white uppercase"
                    style={{ color: "#2C88D9" }}>Article</h1>
                <h3 className="mb-6 font-medium lg:mb-8 md:text-lg lg:text-xl" style={{ color: "#2C88D9" }}>My Latest Article</h3>
                <div className="flex flex-wrap mx-auto text-center md:max-w-screen-xl lg:max-w-screen-xl">
                    {articlePost.map((key, idx) => (
                    <div key={key.id} className="justify-center mx-auto items-center mt-8 text-gray-500 sm:justify-between">
                        <InfoCard articleName={key.articleName} articlePost={key.articlePost} articleTitle={key.articleTitle} />
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPost;
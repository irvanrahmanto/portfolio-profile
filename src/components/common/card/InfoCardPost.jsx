import { PropTypes } from "prop-types";

const InforCardPost = ({ id, articleName, articleTitle, articlePost, urlImage }) => {
  return (
    <div
      className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 mx-4"
      key={id}
    >
      <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden blur-md hover:blur-none">
        <img
          src={urlImage}
          alt={articleTitle}
          className="h-full w-full rounded-md md:rounded-lg object-cover"
        />
      </div>
      <div className="text-left p-6">
        <div
          className="mb-4 rounded-full py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-30 text-center"
          style={{ background: "#2C88D9" }}
        >
          {articleName}
        </div>
        <h4 className="mb-2 text-slate-800 text-md font-semibold">
          {articleTitle}
        </h4>
        <p className="mb-8 text-slate-600 leading-normal font-light">
          {articleName}
        </p>
        <div>
          <a
            href={articlePost}
            className="text-slate-800 font-semibold text-sm hover:text-[#2C88D9] hover:underline flex items-center"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

InforCardPost.propTypes = {
  id: PropTypes.string,
  articleName: PropTypes.string,
  articleTitle: PropTypes.string,
  artilePost: PropTypes.string,
};

export default InforCardPost;

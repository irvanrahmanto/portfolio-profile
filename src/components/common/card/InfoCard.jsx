import { PropTypes } from "prop-types";
import {IoRocketSharp} from "react-icons/io5";

const InfoCard = ({ urlImg, urlHeading, urlContent, urlProject, articleTitle, articlePost, articleName }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-2xl" style={{backgroundColor: "#D5E7F7"}}>
      <a href="#">
        <img
          className="rounded-t-lg"
          src={urlImg}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {urlHeading || articleName}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {urlContent || articleTitle}
        </p>
        <a
          href={urlProject || articlePost}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read More
          <IoRocketSharp size={20} className="ml-2"/>
        </a>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  urlImg: PropTypes.string,
  urlHeading: PropTypes.string,
  urlContent: PropTypes.string,
  urlProject: PropTypes.string,
  articleName: PropTypes.string,
  articleTitle: PropTypes.string,
  articlePost: PropTypes.string
};

export default InfoCard;

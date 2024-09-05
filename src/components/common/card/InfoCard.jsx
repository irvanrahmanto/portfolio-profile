import { PropTypes } from "prop-types";

const InfoCard = ({
  id,
  articleName,
  articleTitle,
  articlePost,
  urlImg,
  urlImage,
  urlHeading,
  urlContent,
  urlProject,
  imgLink,
  alt,
  techStackOne,
  techStackTwo,
  techStackThree,
}) => {
  return (
    <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg">
      <a href={urlProject || articlePost || urlImg} target="_blank">
        <img
          className="w-full"
          src={urlImg || urlImage || imgLink}
          alt={articleName || urlHeading || alt}
        />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {articleName || urlHeading}
        </div>
        <p className="text-gray-700 text-base">{articleTitle || urlContent}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {techStackOne}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {techStackTwo}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {techStackThree}
        </span>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  id: PropTypes.string,
  articleName: PropTypes.string,
  articleTitle: PropTypes.string,
  articlePost: PropTypes.string,
  urlImg: PropTypes.string,
  urlImage: PropTypes.string,
  urlHeading: PropTypes.string,
  urlContent: PropTypes.string,
  urlProject: PropTypes.string,
  imgLink: PropTypes.string,
  alt: PropTypes.string,
  techStackOne: PropTypes.string,
  techStackTwo: PropTypes.string,
  techStackThree: PropTypes.string,
};

export default InfoCard;

import { PropTypes } from "prop-types";

const Carousel = ({ id, urlImg, imgLink, altImg }) => {
  return (
    <div
      key={id}
      className="hidden duration-700 ease-in-out"
      data-carousel-item
    >
      <a href={urlImg} target="_blank">
        <img
          src={imgLink}
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 blur-sm hover:blur-none"
          alt={altImg}
        />
      </a>
    </div>
  );
};

Carousel.protoTypes = {
  id: PropTypes.string,
  urlImg: PropTypes.string,
  imgLink: PropTypes.string,
  altImg: PropTypes.string,
};

export default Carousel;

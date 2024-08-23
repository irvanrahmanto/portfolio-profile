import { PropTypes } from "prop-types";

const Carousel = ({id, urlImg, altImg}) => {
  return (
    <div key={id} className="hidden duration-700 ease-in-out" data-carousel-item>
      <a href={urlImg} target="_blank">
        <img
          src={urlImg}
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt={altImg}
        />
      </a>
    </div>
  );
};

Carousel.protoTypes = {
  id: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
}

export default Carousel;

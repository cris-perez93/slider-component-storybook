/* eslint-disable no-sequences */
/* eslint-disable react/no-typos */
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Style.css";

const ArrowButton = ({ position, onNext, size, hover,  }) => {

  return (
    <div
      className={classNames("arrow", {
        [`position-${position}`]: position,
        [`size-${size}`] : size,
        [`hover-${hover}`] : hover,
      })}
      onClick={onNext}
    >
      
    </div>
  );
};

ArrowButton.propTypes = {
  position: PropTypes.oneOf(['left','right']),
  onNext: PropTypes.func,
  size: PropTypes.oneOf(['sm','md','lg']),
  hover: PropTypes.oneOf(['green','tenue']),
  
};

ArrowButton.defaultProps = {
  size:'md'
}

export default ArrowButton;
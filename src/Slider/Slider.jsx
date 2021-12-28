/* eslint-disable react/no-typos */
import ArrowButton from './componentes/ArrowButton'
import PropTypes from "prop-types";
import BackgroundLogo from './assets/vector-background.svg'
import Avatar from './componentes/Avatar/Avatar';
import classNames from 'classnames';
import './Style.css'


const Slider = ({ onNext, user, quote, typo }) => {
  const { picture, name } = user;
  const { content } = quote;

  return (
    <div className="slider">
      <ArrowButton hover='green' onNext={onNext} position="left" />

      <div className={classNames("slider-content", {
          [`typo-${typo}`]: typo,
        })}>
        <div className="slider-content-header">
          <Avatar
            src={picture.medium}
            alt={name}
           />
          <h3>
            {name.first} <span>{name.last}</span>
          </h3>
        </div>
        <p>{content}</p>
        <img className="back-logo" src={BackgroundLogo} alt="nuwe" />
      </div>

      <ArrowButton hover='green' onNext={onNext} position="right" />
    </div>
  );
};

Slider.propTypes = {
  quote: PropTypes.object,
  error: PropTypes.bool,
  profile: PropTypes.array,
  typo: PropTypes.oneOf(["dark", "clear"]),
  imgSize: PropTypes.oneOf(["sm", "md", "lg"]),
  src: PropTypes.element
};




export default Slider;
/* eslint-disable react/no-typos */
/* eslint-disable no-sequences */
import PropTypes from 'prop-types'
import classNames from 'classnames';
import './Style.css'



const Avatar = ({imgSize,src}) => {

    return (
        <img className={classNames("img", {
            [`img-${imgSize}`]: imgSize,
          })} src={src} alt="avatar"/>
      );
};

Avatar.propTypes = {

    imgSize: PropTypes.oneOf(['sm','md','lg']),
    src: PropTypes.any


};

Avatar.defaultProps = {
    imgSize :'sm'
}
 
export default Avatar;
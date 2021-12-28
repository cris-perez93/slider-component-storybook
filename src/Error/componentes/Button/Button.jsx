/* eslint-disable no-sequences */
/* eslint-disable react/no-typos */
import classNames from "classnames";
import PropTypes from 'prop-types'
import './Style.css'

const Button = ({children, size, color}) => {
    return (
        <button className={classNames('button', {
            [`color-${color}`] : color,
            [`size-${size}`] : size,
        })}>{children}</button>
      );
}

Button.propTypes = {
    size: PropTypes.oneOf['sm','md','lg'],
    color: PropTypes.oneOf['btn-primary','btn-secondary'],
}
 
export default Button;
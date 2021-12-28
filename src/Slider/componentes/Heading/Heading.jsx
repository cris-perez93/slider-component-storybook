/* eslint-disable no-sequences */
/* eslint-disable react/no-typos */
import PropTypes from 'prop-types'
import './Style.css'
import classNames from 'classnames';



const Heading = ({children, color, size}) => {
    return (
        <heading className={classNames('heading', {
            [`color-${color}`]: color,
            [`size-${size}`]: size,
        })}>{children}
        </heading>
      );
}

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['text-primary','text-secondary']),
    size: PropTypes.oneOf(['sm', 'md', 'lg','big'])
}

Heading.defaultProps = {
    size: 'md'
}
  
export default Heading;
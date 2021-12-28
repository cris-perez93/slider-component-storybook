/* eslint-disable no-sequences */
/* eslint-disable react/no-typos */
import './Style.css'
import classNames from 'classnames';
import PropTypes from 'prop-types'

const Spinner = ({color}) => {
  return (
    <div className='spinner'>
      <div className={classNames('bounce1',{
      [`color-${color}`]: color,
     
    })}></div>
      <div className={classNames('bounce2',{
      [`color-${color}`]: color,
      
    })}></div>
      <div className={classNames('bounce3',{
      [`color-${color}`]: color,
      
    })}></div>
    </div>
  );
};

Spinner.propTypes = {
  color: PropTypes.oneOf(['primary','secondary'])

}

Spinner.defaultProps = {
  color: 'primary'
}


export default Spinner;
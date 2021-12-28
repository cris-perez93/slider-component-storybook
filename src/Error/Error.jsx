import './Style.css'
import  Heading  from '../Slider/componentes/Heading';
import Button from './componentes/Button';

const Error = () => {
    return (
        <div className='container-error'>
            <Heading size='big' color='text-primary'>Oops!</Heading>
            <h3 className='text-error'>Page not found!</h3>
            <Button color='primary'>Home</Button>
        </div>
      );
}
 
export default Error;
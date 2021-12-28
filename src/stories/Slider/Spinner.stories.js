import Spinner from './../../Slider/componentes/Spinner'

export default {
  title: 'Components/Slider/Spinner',
  component: Spinner,
 
}

const Template = args => <Spinner {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  
 color:'primary'
  
}
export const Secondary = Template.bind({})
Secondary.args = {
  
 color:'secondary'
  
}


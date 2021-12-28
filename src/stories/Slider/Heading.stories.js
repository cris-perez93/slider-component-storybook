
import Heading from "../../Slider/componentes/Heading/Heading"


export default {
  title: 'Components/Slider/Heading',
  component: Heading,
  
}

const Template = args => <Heading {...args}/>

export const Large = Template.bind({})
Large.args = {
  size:'lg',
  children: 'Heading',
  
}
export const Medium = Template.bind({})
Medium.args = {
  size:'md',
  children: 'Heading'
  
}
export const Small = Template.bind({})
Small.args = {
  size:'sm',
  children: 'Heading'
  
  
}
export const Primary = Template.bind({})
Primary.args = {
  size:'lg',
  color:'text-primary',
  children: 'Heading'
}
export const SecondaryWhite = Template.bind({})
SecondaryWhite.args = {
  size:'lg',
  color:'text-secondary',
  children: 'Heading'
}

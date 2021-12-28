import ArrowButton from "../../Slider/componentes/ArrowButton"


export default {
  title: 'Components/Slider/ArrowButton',
  component: ArrowButton,
  argTypes: {onNext:{action: 'onNext'}},
}

const Template = args => <ArrowButton {...args}/>

export const Default = Template.bind({})
Default.args = {
  
}
export const Right = Template.bind({})
Right.args = {
  position:'right'
  
}
export const HoverGreen = Template.bind({})
HoverGreen.args = {
  hover:'green'
  
}
export const HoverTenue = Template.bind({})
HoverTenue.args = {
  hover:'tenue'
  
}





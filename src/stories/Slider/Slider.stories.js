import Slider from './../../Slider/Slider'

export default {
  title: 'Components/Slider/Slider',
  component: Slider,
 
}

const Template = args => <Slider {...args}/>

export const SliderDark = Template.bind({})
SliderDark.args = {
  typo:'dark', 

}

export const SliderClear = Template.bind({})
SliderClear.args = {

  typo:'clear', 
}


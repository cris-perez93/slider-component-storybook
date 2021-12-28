import Avatar from "../../Slider/componentes/Avatar/Avatar";

export default {
    title: 'Components/Slider/Avatar',
  component: Avatar,
}

const Template = args => <Avatar {...args}/>

export const AvatarSlider = Template.bind({})
AvatarSlider.args = {
  
  imgSize: 'sm',
  src : 'https://i.pravatar.cc/300'

}
export const AvatarLogin = Template.bind({})
AvatarLogin.args = {
  
  imgSize: 'md',
  src : 'https://i.pravatar.cc/300'

}
export const AvatarProfile = Template.bind({})
AvatarProfile.args = {
  
  imgSize: 'lg',
  src : 'https://i.pravatar.cc/300'

}




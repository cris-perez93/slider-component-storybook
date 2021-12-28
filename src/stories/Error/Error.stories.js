import Error from './../../Error/'

export default {
  title: 'Components/Error/Error',
  component: Error,
 
}

const Template = args => <Error {...args}/>

export const Error404 = Template.bind({})
Error404.args = {
  
}


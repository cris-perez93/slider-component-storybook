
import Button from "../../Error/componentes/Button"

export default {
  title: 'Components/Error/Button',
  component: Button,
 
}

const Template = args => <Button {...args}/>

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
    color:'btn-primary',
    children: 'Primary'
  
}
export const ButtonSecondary = Template.bind({})
ButtonSecondary.args = {
    color:'btn-secondary',
    children: 'Primary'
  
}


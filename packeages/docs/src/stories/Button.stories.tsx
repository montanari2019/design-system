import { StoryObj, Meta } from "@storybook/react"

import {  Button, ButtonProps } from "@ignite-montanari-ui/react"
import { ArrowRight } from "phosphor-react"


export default {
    title: 'Form/Button',
    component: Button,
    args:{
      children: 'Send',
    }

} as Meta<ButtonProps>

export const Primary:StoryObj<ButtonProps> = {
   
}


export const Secondary:StoryObj<ButtonProps> = {
      args: {
         variant: 'secondary',
         children: 'Create New',
      },
}


export const Tertiary:StoryObj<ButtonProps> = {
   args: {
      variant: 'tertiary',
      children: 'Cancel',
   },
}


export const WithIcon:StoryObj<ButtonProps> = {
   args: {
      children: (
         <>
            Próximo Passo
            <ArrowRight/>
         </>
      )
   },
}

export const Small:StoryObj<ButtonProps> = {
   args: {
      size: 'sm',
   },
}



export const Disabled:StoryObj<ButtonProps> = {
   args: {
      disabled: true,
   },
}







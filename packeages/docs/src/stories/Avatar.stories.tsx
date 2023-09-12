import { StoryObj, Meta } from "@storybook/react"

import {  Avatar, AvatarProps } from "@ignite-montanari-ui/react"


export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args:{
       src: 'https://github.com/montanari2019.png',
       alt: 'Ikaro Montanari'
    }

} as Meta<AvatarProps>

export const Primary:StoryObj<AvatarProps> = {
   
}

export const WithFallBack:StoryObj<AvatarProps> = {
   args:{
    src: undefined,
   }
}





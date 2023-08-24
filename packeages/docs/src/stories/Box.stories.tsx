import { StoryObj, Meta } from "@storybook/react"

import { Box, BoxProps, Text } from "@ignite-montanari-ui/react"


export default {
    title: 'Surfeces/Box',
    component: Box,
    args:{
        children: (
            <>

            <Text>Testando o elementos Box</Text>
            
            </>
        )
    }

} as Meta<BoxProps>

export const Primary:StoryObj<BoxProps> = {
   
}




import { StoryObj, Meta } from "@storybook/react";

import { Heading, HeadingProps } from "@ignite-montanari-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children:
      "Custom Title",
  },
} as Meta<HeadingProps>;


export const Primary: StoryObj<HeadingProps> = {};
export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children:
          "Strong Heading",
          as: 'h1',
      },
      
};
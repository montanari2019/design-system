import { StoryObj, Meta } from "@storybook/react";

import { Text, TextProps } from "@ignite-montanari-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatem praesentium alias est. Porro velit amet temporibus deserunt rem consequatur, itaque dolorem vitae officiis, ipsa cumque obcaecati dolor vero ipsum.",
  },
} as Meta<TextProps>;


export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
    args: {
        children:
          "Strong Text",
          as: 'strong',
      },
      
};
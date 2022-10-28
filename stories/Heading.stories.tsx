import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "../components";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {},
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}> Welcome to OnlyCoachs</Heading>
);

export const Primary = Template.bind({});
Primary.args = {
  size: "6xl",
};

export const Small = Template.bind({});
Small.args = {
  size: "8xl",
};

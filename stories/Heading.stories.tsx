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

export const Big = Template.bind({});
Big.args = {
  size: "text-6xl",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "text-3xl",
};

export const Small = Template.bind({});
Small.args = {
  size: "text-xl",
};

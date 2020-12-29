import { Meta, Story } from "@storybook/react";
// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { Rating } from "./Rating";
import { IRatingProps } from "./Rating.props";
import { argTypes } from "./Rating.argTypes";
import { sizes } from "./__fixtures__/sizes";

export default {
  argTypes,
  component: Rating,
  title: "Components/Rating",
} as Meta;

const Template : Story<IRatingProps> = (args: IRatingProps) => <Rating id={args.id} {...args} />;

export const Playground : Story<IRatingProps> = Template.bind({});
Playground.args = {
  id: "rating",
  size: sizes.small,
  rate: 3
};
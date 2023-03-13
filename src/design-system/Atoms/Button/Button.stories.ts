import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Default button',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Button',
  },
};

export const Contained: Story = {
  args: {
    variant: 'contained',
    label: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Button',
  },
};

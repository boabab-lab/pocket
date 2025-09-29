import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { CircleDashed } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    design: {
      control: 'select',
      options: ['default', 'secondary'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
    size: 'medium',
    design: 'default',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    size: 'medium',
    design: 'secondary',
    disabled: false,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

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
      options: [
        'outline_light',
        'outline_dark',
        'filled_light',
        'filled_dark',
        'filled_pink',
        'neutral_dark',
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const LargeOutlineDark: Story = {
  args: {
    label: 'A Text',
    size: 'large',
    design: 'outline_dark',
    disabled: true,
  },
};
export const LargeOutlineLight: Story = {
  args: {
    label: 'A Text',
    size: 'large',
    design: 'outline_light',
    disabled: true,
  },
};

export const MediumFilledLightWithIcon: Story = {
  args: {
    label: 'A Text dsfg gf sdgh sghsgdh h',
    size: 'medium',
    design: 'filled_light',
    disabled: true,
  },
};

export const MediumFilledPinkWithIcon: Story = {
  args: {
    label: 'A Text dsfg gf sdgh sghsgdh h',
    size: 'medium',
    design: 'filled_pink',
    disabled: true,
  },
};

export const MediumFilledDarkWithIcon: Story = {
  args: {
    label: 'A Text dsfg gf sdgh sghsgdh h',
    size: 'medium',
    design: 'filled_dark',
    disabled: true,
  },
};

export const SmallNeutralDark: Story = {
  args: {
    label: 'A Text sdkfjhsdkfnjsid',
    size: 'small',
    design: 'neutral_dark',
    disabled: true,
  },
};

export const NeutralLight: Story = {
  args: {
    label: 'A Text sdkfjhsdkfnjsid',
    size: 'small',
    design: 'neutral_light',
    disabled: true,
  },
};

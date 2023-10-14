import 'twin.macro';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components';
import { ButtonProps } from '@/components/Button/types';

const ButtonVariantList: ButtonProps['variant'][] = [
  'primary',
  'gray100',
  'gray200',
  'grayText',
  'black',
  'outlined',
  'ghost',
];

const ButtonSizeList: ButtonProps['size'][] = ['medium', 'big', 'none'];

const meta = {
  title: 'atoms/Button',
  component: Button,
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger', 'alert', 'success', 'transparent', 'transparent-border'],
      },
    },
  },
  render: (args) => (
    <div tw="flex gap-2">
      {ButtonVariantList.map((value) => (
        <Button key={value} variant={value} {...args}>
          {value}
        </Button>
      ))}
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div tw="flex gap-2">
      {ButtonSizeList.map((value) => (
        <Button key={value} variant="black" size={value} {...args}>
          {value}
        </Button>
      ))}
    </div>
  ),
};

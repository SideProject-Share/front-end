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

/**
 * 다양하게 버튼을 커스텀 할 수 있습니다.
 */

const meta = {
  title: 'atoms/Button',

  component: Button,

  argTypes: {
    variant: {
      description: 'type `primary` | `gray[xxx]` | `black` | `outlined` | `ghost`',
    },
    size: { description: 'type `medium` | `big` | `none`' },
    selected: { description: 'type `boolean` `true` | `false`' },
    disabled: { description: 'type `boolean` `true` | `false`' },
    isLoading: { description: 'type `boolean` `true` | `false`' },
    children: { description: 'type `string 원하는 텍스트를 입력하세요.`' },
  },

  parameters: {
    docs: {
      story: { inline: true },
      source: { type: 'code' },
    },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본 메인 버튼 입니다.
 */

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'button',
    selected: false,
    disabled: false,
    isLoading: false,
  },
  argTypes: {
    variant: {
      options: ButtonVariantList,
      control: {
        type: 'select',
      },
    },
    size: {
      options: ButtonSizeList,
      control: {
        type: 'radio',
      },
    },
  },

  render: (args) => (
    <Button
      variant={args.variant}
      size={args.size}
      selected={args.selected}
      disabled={args.disabled}
      isLoading={args.isLoading}
      {...args}
    >
      {args.children}
    </Button>
  ),
};

/**
 * 한눈에 버튼의 테마를 볼 수 있습니다.
 */

export const Variant: Story = {
  args: {
    size: 'medium',
    selected: false,
    disabled: false,
    isLoading: false,
  },
  argTypes: {
    size: {
      options: ButtonSizeList,
      control: {
        type: 'radio',
      },
    },
  },
  decorators: [
    (Story) => (
      <div tw="flex gap-2">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <>
      {ButtonVariantList.map((value) => (
        <Button key={value} variant={value} {...args}>
          {value}
        </Button>
      ))}
    </>
  ),
};

/**
 * 한눈에 버튼의 사이즈를 볼 수 있습니다.
 */

export const Size: Story = {
  args: {
    variant: 'primary',
    selected: false,
    disabled: false,
    isLoading: false,
  },
  argTypes: {
    variant: {
      options: ButtonVariantList,
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    (Story) => (
      <div tw="flex gap-2">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <>
      {ButtonSizeList.map((value) => (
        <Button key={value} size={value} variant={args.variant} {...args}>
          {value}
        </Button>
      ))}
    </>
  ),
};

/**
 * 로딩시에 보여지는 버튼입니다.
 */

export const Loading: Story = {
  args: {
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: ButtonVariantList,
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    (Story) => (
      <div tw="flex flex-col gap-2">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <>
      <div tw="flex gap-2">
        <Button isLoading size="big" variant={args.variant} {...args}>
          Not Loading
        </Button>
      </div>
    </>
  ),
};

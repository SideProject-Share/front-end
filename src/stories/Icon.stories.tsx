import 'twin.macro';

import type { Meta, StoryObj } from '@storybook/react';

import LogoIcon from '@/assets/icons/logo.svg';
import CheveronUpIcon from '@/assets/icons/chevron_up_16.svg';
import CheveronRightIcon from '@/assets/icons/chevron_right_16.svg';
import CheveronDownIcon from '@/assets/icons/chevron_down_16.svg';
import CheveronLeftIcon from '@/assets/icons/chevron_left_16.svg';

/**
 * 다양하게 버튼을 커스텀 할 수 있습니다.
 */

const meta = {
  title: 'atoms/Icons',
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
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본 메인 버튼 입니다.
 */

export const Default: Story = {
  decorators: [
    (Story) => (
      <div tw="flex flex-col gap-2">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <>
      <LogoIcon color={args.color} />
      <CheveronUpIcon color={args.color} />
      <CheveronRightIcon color={args.color} />
      <CheveronDownIcon color={args.color} />
      <CheveronLeftIcon color={args.color} />
      <CheveronUpIcon color={args.color} />
      <CheveronRightIcon color={args.color} />
      <CheveronDownIcon color={args.color} />
      <CheveronLeftIcon color={args.color} />
    </>
  ),
};

/**
 * 한눈에 버튼의 테마를 볼 수 있습니다.
 */

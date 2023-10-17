import 'twin.macro';
import type { Meta, StoryObj } from '@storybook/react';

import { NavigationHeader } from '@/components';

/**
 * 글로벌 네이게이션 헤더에 쓰이는 컴포넌트를 확인 할 수 있습니다.
 */

const meta = {
  title: 'molecules/NavigationHeader',
  component: NavigationHeader,
  parameters: {
    docs: {
      story: { inline: true },
      source: { type: 'code' },
    },
  },
} as Meta<typeof NavigationHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 로고가 있는 글로벌 네이게이션 헤더
 */

export const Type1: Story = {
  render: () => (
    <NavigationHeader>
      <NavigationHeader.Logo />
      <NavigationHeader.SettingButton />
    </NavigationHeader>
  ),
};

/**
 * 뒤로가기 버튼이 있는 글로벌 네이게이션 헤더
 */

export const Type2: Story = {
  args: {
    title: '',
  },
  render: (args) => (
    <NavigationHeader>
      <NavigationHeader.BackButton title={args.title} />
      <NavigationHeader.PinButton />
    </NavigationHeader>
  ),
};

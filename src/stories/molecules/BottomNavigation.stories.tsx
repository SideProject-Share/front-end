import 'twin.macro';
import type { Meta, StoryObj } from '@storybook/react';

import { BottomNavigation } from '@/components';

import { TabList } from '@/components/NavigationItem';

/**
 * 바텀내비게이션에 쓰이는 컴포넌트를 확인 할 수 있습니다.
 */

const meta = {
  title: 'molecules/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    docs: {
      story: { inline: true },
      source: { type: 'code' },
    },
  },
} as Meta<typeof BottomNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedTab: 'Home',
  },
  argTypes: {
    selectedTab: {
      options: TabList,
      control: {
        type: 'radio',
      },
    },
  },

  render: (args) => <BottomNavigation selectedTab={args.selectedTab} />,
};

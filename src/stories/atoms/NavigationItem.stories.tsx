import 'twin.macro';
import type { Meta, StoryObj } from '@storybook/react';

import { NavigationItem } from '@/components/atoms';
import { TabList } from '@/components/atoms/NavigationItem';

/**
 * 바텀내비게이션에 쓰이는 아이탬을 확인 할 수 있습니다.
 */

const meta = {
  title: 'atoms/NavigationItem',
  component: NavigationItem,
  parameters: {
    docs: {
      story: { inline: true },
      source: { type: 'code' },
    },
  },
} as Meta<typeof NavigationItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tab: 'Home',
    active: false,
  },
  argTypes: {
    tab: {
      options: TabList,
      control: {
        type: 'select',
      },
    },
  },
  render: (args) => <NavigationItem tab={args.tab} active={args.active} />,
};

export const NavigationItems: Story = {
  render: () => (
    <div tw="flex flex-col gap-4">
      <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
        <NavigationItem tab="Home" />
        <NavigationItem tab="Search" />
        <NavigationItem tab="Post" />
        <NavigationItem tab="My" />
      </div>
      <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
        <NavigationItem tab="Home" active />
        <NavigationItem tab="Search" active />
        <NavigationItem tab="Post" active />
        <NavigationItem tab="My" active />
      </div>
    </div>
  ),
};

import 'twin.macro';
import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@/components';
import { IconLists } from '@/components/Icon';

/**
 * 사이트에 쓰이는 아이콘을 확인 할 수 있습니다.
 */

const meta = {
  title: 'atoms/Icon',
  component: Icon,
  parameters: {
    docs: {
      story: { inline: true },
      source: { type: 'code' },
    },
  },
} as Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'LogoIcon',
  },
  argTypes: {
    icon: {
      options: IconLists,
      control: {
        type: 'select',
      },
    },
  },
  render: (args) => <Icon icon={args.icon} />,
};

/**
 * 16px 아이콘 입니다.
 */

export const Regular: Story = {
  render: () => (
    <div tw="flex flex-col gap-4">
      <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
        <Icon icon="LogoIcon" />
      </div>

      <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
        <Icon icon="CheveronUpIcon" />
        <Icon icon="CheveronRightIcon" />
        <Icon icon="CheveronDownIcon" />
        <Icon icon="CheveronLeftIcon" />
      </div>

      <div tw="flex gap-4">
        <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
          <Icon icon="CloseEmptyIcon" />
          <Icon icon="CloseFillIcon" />
        </div>

        <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
          <Icon icon="ErrorEmptyIcon" />
          <Icon icon="ErrorFillIcon" />
        </div>

        <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
          <Icon icon="HeartEmptyIcon" />
          <Icon icon="HeartFillIcon" />
        </div>
      </div>

      <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
        <Icon icon="CalendarIcon" />
        <Icon icon="ChatOnIcon" />
        <Icon icon="CheckIcon" />
        <Icon icon="DealIcon" />
        <Icon icon="FilterIcon" />
        <Icon icon="GraphIcon" />
        <Icon icon="PeopleIcon" />
        <Icon icon="QuestionIcon" />
        <Icon icon="RefreshIcon" />
        <Icon icon="SearchIcon" />
        <Icon icon="SuccessIcon" />
        <Icon icon="TooltipIcon" />
        <Icon icon="ViewIcon" />
      </div>
    </div>
  ),
};

/**
 * 24px 아이콘 입니다.
 */

export const Big: Story = {
  render: () => (
    <div tw="flex flex-col gap-4">
      <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
        <Icon icon="CheveronUpBigIcon" />
        <Icon icon="CheveronRightBigIcon" />
        <Icon icon="CheveronDownBigIcon" />
        <Icon icon="CheveronLeftBigIcon" />
        <Icon icon="CheveronLeftActiveBigIcon" />
      </div>

      <div tw="flex gap-4">
        <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
          <Icon icon="ChatIcon" />
          <Icon icon="ChatActiveIcon" />
        </div>

        <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
          <Icon icon="GraphBigIcon" />
          <Icon icon="GraphAcitveBigIcon" />
        </div>

        <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
          <Icon icon="SearchBigIcon" />
          <Icon icon="SearchActiveBigIcon" />
        </div>

        <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
          <Icon icon="WriteIcon" />
          <Icon icon="WriteActiveIcon" />
        </div>
      </div>

      <div tw="flex gap-4">
        <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
          <Icon icon="HeartEmptyBigIcon" />
          <Icon icon="HeartFillBigIcon" />
          <Icon icon="HeartNavIcon" />
          <Icon icon="HeartNavActiveIcon" />
        </div>
        <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
          <Icon icon="HomeIcon" />
          <Icon icon="HomeActiveIcon" />
          <Icon icon="MyIcon" />
          <Icon icon="MyActiveIcon" />
        </div>
      </div>

      <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
        <Icon icon="LocationIcon" />
        <Icon icon="LocationActiveIcon" />
        <Icon icon="PinIcon" />
        <Icon icon="PinActiveIcon" />
        <Icon icon="ZoomInIcon" />
        <Icon icon="ZoomOutIcon" />
        <Icon icon="SettingIcon" />
        <Icon icon="SearchActiveBigIcon" />
      </div>

      <div tw="w-fit flex gap-4 p-4 border border-gray-100 rounded-sm">
        <Icon icon="AppstoreIcon" />
        <Icon icon="GoolglePlayIcon" />
        <Icon icon="BellIcon" />
        <Icon icon="CloseEmptyBigIcon" />
        <Icon icon="EnterFillIcon" />
        <Icon icon="FilterBigIcon" />
        <Icon icon="FullIcon" />
        <Icon icon="ListIcon" />
        <Icon icon="MoreIcon" />
        <Icon icon="RefreshBigIcon" />
        <Icon icon="ShareIcon" />
      </div>
    </div>
  ),
};

/**
 * 한눈에 버튼의 테마를 볼 수 있습니다.
 */

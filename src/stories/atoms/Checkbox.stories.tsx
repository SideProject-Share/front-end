/* eslint-disable react-hooks/rules-of-hooks */

import 'twin.macro';
import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, Label } from '@/components/atoms';

/**
 * 사이트에 쓰이는 체크박스 버튼 그룹을 확인 할 수 있습니다.
 */

const meta = {
  title: 'atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { description: 'type `boolean`', control: false },
    defaultValue: { control: false },
    onChange: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      source: { type: 'code' },
    },
  },
} as Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [{ value }, setValue] = useArgs();

    return <Checkbox checked={value} onChange={(e) => setValue({ value: e.target.checked })} />;
  },
};

/**
 * 체크박스 버튼(라벨포함)
 */

export const WithLabel: Story = {
  render: () => <Label label="체크박스" control={<Checkbox />} />,
};

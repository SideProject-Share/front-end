/* eslint-disable react-hooks/rules-of-hooks */
import 'twin.macro';
import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '@/components/atoms';

/**
 * 사이트에 쓰이는 스위치버튼을 확인 할 수 있습니다.
 */

const meta = {
  title: 'atoms/Switch',
  component: Switch,
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
} as Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [{ value }, setValue] = useArgs();

    return <Switch checked={value} onChange={(e) => setValue({ value: e.target.checked })} />;
  },
};

import 'twin.macro';
import type { Meta, StoryObj } from '@storybook/react';

import Radio from '@/components/atoms/Radio';

/**
 * 사이트에 쓰이는 라디오 버튼을 확인 할 수 있습니다.
 */

const meta = {
  title: 'atoms/Radio',
  component: Radio,
  argTypes: {
    variant: {
      description: 'type `primary` | `secondary`',
    },
    checked: {
      description: 'type `boolean`',
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      source: { type: 'code' },
    },
  },
} as Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    checked: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'radio',
      },
    },
  },
  render: (args) => <Radio variant={args.variant} checked={args.checked} />,
};

export const RadioButtons: Story = {
  render: () => (
    <div tw="flex gap-4 p-4 border border-gray-100 rounded-sm">
      <Radio variant="primary" checked />
      <Radio variant="primary" checked={false} />
      <Radio variant="secondary" checked />
      <Radio variant="secondary" checked={false} />
    </div>
  ),
};

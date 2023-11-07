import 'twin.macro';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, PersistentBottomBar } from '@/components/atoms';

const meta = {
  title: 'molecules/PersistentBottomBar',
  component: PersistentBottomBar,
  parameters: {
    docs: {
      story: { inline: true },
      source: { type: 'code' },
    },
  },
} as Meta<typeof PersistentBottomBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div tw="h-full">
      <div tw="relative w-full h-full overflow-y-auto">
        <div tw="h-full flex flex-col">
          <div tw="flex-1 min-h-0">hi</div>
          <PersistentBottomBar>
            <Button tw="w-full">Button</Button>
          </PersistentBottomBar>
        </div>
      </div>
    </div>
  ),
};

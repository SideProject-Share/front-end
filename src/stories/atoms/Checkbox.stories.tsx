import 'twin.macro';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Checkbox } from '@/components';

interface IArgs {
  label: string;
  value: string;
  checked: boolean;
}

const meta = {
  title: 'atoms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      story: { inline: true },
      source: { type: 'code' },
    },
  },
} as Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: IArgs) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = () => {
    setChecked(!checked);
  };

  return <Checkbox label={args.label} checked={checked} onChange={handleChange} value={args.value} />;
};

Default.args = {
  label: 'Sample Checkbox',
  value: 'sample',
  checked: false,
};

Default.argTypes = {
  checked: {
    options: true || false,
    control: {
      type: 'boolean',
    },
  },
};

/* eslint-disable react-hooks/rules-of-hooks */
import 'twin.macro';
import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';

import { Radio, Label } from '@/components/atoms';
import { RadioGroup } from '@/components/molecules';

/**
 * 사이트에 쓰이는 라디오 버튼 그룹을 확인 할 수 있습니다.
 */

const meta = {
  title: 'molecules/RadioGroup',
  component: RadioGroup,
  argTypes: {
    value: { control: false },
    defaultValue: { control: false },
    onChange: { control: false },
    variant: {
      description: 'type `primary` | `secondary`',
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      source: { type: 'code' },
    },
  },
} as Meta<typeof RadioGroup & typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본 라디오 버튼 그룹
 */

export const Default: Story = {
  args: {
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'radio',
      },
    },
  },

  render: (args) => {
    const [{ value }, setValue] = useArgs();

    const onChange = (v: number) => {
      setValue({ value: v });
    };

    return (
      <div>
        <RadioGroup value={value} onChange={(e) => onChange(Number(e.target.value))} tw="flex gap-4">
          <Radio value={1} variant={args.variant} />
          <Radio value={2} variant={args.variant} />
          <Radio value={3} variant={args.variant} />
        </RadioGroup>
      </div>
    );
  },
};

/**
 * 라디오 버튼(라벨포함)그룹
 */

export const WithLabel: Story = {
  args: {
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'radio',
      },
    },
  },
  render: (args) => {
    const [{ value }, setValue] = useArgs();

    const onChange = (v: string) => {
      setValue({ value: v });
    };

    return (
      <RadioGroup value={value} onChange={(e) => onChange(e.target.value)} tw="flex gap-2">
        <Label control={<Radio variant={args.variant} />} value="떡볶이" label="떡볶이" />
        <Label control={<Radio variant={args.variant} />} value="튀김" label="튀김" />
        <Label control={<Radio variant={args.variant} />} value="순대" label="순대" />
      </RadioGroup>
    );
  },
};

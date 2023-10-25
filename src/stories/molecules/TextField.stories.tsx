import 'twin.macro';
import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@/components/atoms';
import { TextField } from '@/components/molecules';

/**
 * 글로벌 네이게이션 헤더에 쓰이는 컴포넌트를 확인 할 수 있습니다.
 */

const meta = {
  title: 'molecules/TextField',
  component: TextField,
  parameters: {
    docs: {
      story: { inline: true },
      source: { type: 'code' },
    },
  },
} as Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <TextField>
        <TextField.Input />
      </TextField>
      <TextField variant="outlined">
        <TextField.Input />
      </TextField>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <TextField>
        <TextField.Input />
      </TextField>
      <TextField variant="outlined">
        <TextField.Input />
      </TextField>
      <TextField>
        <TextField.Input placeholder="플레이스홀더" />
      </TextField>
      <TextField variant="outlined">
        <TextField.Input placeholder="플레이스홀더" />
      </TextField>
      <TextField>
        <TextField.Input label="레이블" />
      </TextField>
      <TextField variant="outlined">
        <TextField.Input label="레이블" />
      </TextField>
      <TextField size="medium">
        <TextField.Input />
      </TextField>
      <TextField variant="outlined" size="medium">
        <TextField.Input />
      </TextField>
      <TextField size="medium">
        <TextField.Input placeholder="플레이스홀더" />
      </TextField>
      <TextField variant="outlined" size="medium">
        <TextField.Input placeholder="플레이스홀더" />
      </TextField>
      <TextField size="medium">
        <TextField.Input label="레이블" />
      </TextField>
      <TextField variant="outlined" size="medium">
        <TextField.Input label="레이블" />
      </TextField>
    </>
  ),
};

export const DefaultDisabled: Story = {
  render: () => (
    <>
      <TextField>
        <TextField.Input disabled />
      </TextField>
      <TextField variant="outlined">
        <TextField.Input disabled />
      </TextField>
      <TextField>
        <TextField.Input disabled value="하이" />
      </TextField>
      <TextField variant="outlined">
        <TextField.Input disabled value="하이" />
      </TextField>
    </>
  ),
};

export const Label: Story = {
  render: () => (
    <>
      <TextField>
        <TextField.Input label="라벨" />
      </TextField>
      <TextField variant="outlined">
        <TextField.Input label="라벨" />
      </TextField>
      <TextField>
        <TextField.Input label="라벨" value="하이" />
      </TextField>
      <TextField variant="outlined">
        <TextField.Input label="라벨" value="하이" />
      </TextField>
    </>
  ),
};

export const LabelDisabled: Story = {
  render: () => (
    <div tw="flex flex-col gap-2">
      <TextField>
        <TextField.Input disabled label="라벨" />
      </TextField>
      <TextField variant="outlined">
        <TextField.Input disabled label="라벨" />
      </TextField>
      <TextField>
        <TextField.Input disabled label="라벨" value="하이" />
      </TextField>
      <TextField variant="outlined">
        <TextField.Input disabled label="라벨" value="하이" />
      </TextField>
    </div>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <div tw="flex flex-col gap-2">
      <TextField>
        <TextField.Input placeholder="플레이스홀더" />
      </TextField>
      <TextField variant="outlined">
        <TextField.Input placeholder="플레이스홀더" />
      </TextField>
    </div>
  ),
};

export const PlaceholderDisabled: Story = {
  render: () => (
    <div tw="flex flex-col gap-2">
      <TextField>
        <TextField.Input placeholder="플레이스홀더" disabled />
      </TextField>
      <TextField variant="outlined">
        <TextField.Input placeholder="플레이스홀더" disabled />
      </TextField>
    </div>
  ),
};

export const Leading: Story = {
  render: () => (
    <div tw="flex flex-col gap-2">
      <TextField>
        <TextField.Leading>Leading</TextField.Leading>
        <TextField.Input placeholder="플레이스홀더" />
      </TextField>
      <TextField>
        <TextField.Leading>Leading</TextField.Leading>
        <TextField.Input label="리딩" />
      </TextField>
    </div>
  ),
};

export const Trailing: Story = {
  render: () => (
    <TextField>
      <TextField.Input placeholder="플레이스홀더" />
      <TextField.Trailing tw="flex items-center">
        <button type="button" tw="inline-flex items-center justify-center w-5 h-5 mr-4">
          <Icon icon="CloseFillIcon" />
        </button>
        <button type="button" tw="inline-flex items-center justify-center w-9 h-9 rounded-lg">
          <Icon icon="SearchIcon" />
        </button>
      </TextField.Trailing>
    </TextField>
  ),
};

export const Error: Story = {
  render: () => (
    <div tw="flex flex-col gap-2">
      <TextField hasError>
        <TextField.Input placeholder="하이" />
      </TextField>
      <TextField hasError variant="outlined">
        <TextField.Input label="하이" />
      </TextField>
    </div>
  ),
};

export const Multiline: Story = {
  render: () => (
    <div tw="flex flex-col gap-2">
      <TextField>
        <TextField.TextArea placeholder="플레이스홀더" />
      </TextField>
      <TextField variant="outlined">
        <TextField.TextArea placeholder="플레이스홀더" />
      </TextField>
      <TextField size="medium">
        <TextField.TextArea placeholder="플레이스홀더" />
      </TextField>
      <TextField variant="outlined" size="medium">
        <TextField.TextArea placeholder="플레이스홀더" />
      </TextField>
    </div>
  ),
};

export const MultilineError: Story = {
  render: () => (
    <div tw="flex flex-col gap-2">
      <TextField hasError>
        <TextField.TextArea placeholder="플레이스홀더" />
      </TextField>
      <TextField hasError variant="outlined">
        <TextField.TextArea placeholder="플레이스홀더" />
      </TextField>
    </div>
  ),
};

export const MultilineDisabled: Story = {
  render: () => (
    <>
      <TextField>
        <TextField.TextArea disabled placeholder="플레이스홀더" />
      </TextField>
    </>
  ),
};

export const HelperMessages: Story = {
  render: () => (
    <>
      <TextField>
        <TextField.Input label="라벨" />
      </TextField>
      <TextField.ErrorMessage>안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요</TextField.ErrorMessage>
      <TextField>
        <TextField.Input label="라벨" />
      </TextField>
      <TextField.SuccessMessage>
        안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
      </TextField.SuccessMessage>
    </>
  ),
};

import tw, { styled } from 'twin.macro';

import { cloneElement } from 'react';

import { LabelProps } from './types';

const LabelRoot = styled.label<{ labelPlacement: LabelProps['labelPlacement'] }>`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  &:hover {
    cursor: pointer;
  }

  ${({ labelPlacement }) => {
    if (labelPlacement === 'bottom') {
      return tw`flex-col`;
    }

    if (labelPlacement === 'top') {
      return tw`flex-col-reverse`;
    }

    if (labelPlacement === 'start') {
      return tw`flex-row-reverse`;
    }

    return tw`flex-row`;
  }}
`;

const LabelText = styled.span<{ labelPlacement: LabelProps['labelPlacement'] }>`
  ${tw`text-14 leading-5 text-gray-100`}
  vertical-align: middle;
  ${({ labelPlacement }) => {
    if (labelPlacement === 'bottom') {
      return tw`mt-2`;
    }

    if (labelPlacement === 'top') {
      return tw`mb-2`;
    }

    if (labelPlacement === 'start') {
      return tw`mr-2`;
    }

    return tw`ml-2`;
  }}
`;

export default function Label(props: LabelProps) {
  const { control, label, labelPlacement = 'end', checked, onChange, value, ...others } = props;

  const controlProps: { [key: string]: any } = {};

  if (typeof control.props.checked === 'undefined' && typeof checked !== 'undefined') {
    controlProps.checked = checked;
  }

  if (typeof control.props.onChange === 'undefined' && typeof onChange !== 'undefined') {
    controlProps.onChange = onChange;
  }

  if (typeof control.props.value === 'undefined' && typeof value !== 'undefined') {
    controlProps.value = value;
  }

  return (
    <LabelRoot labelPlacement={labelPlacement} {...others}>
      {cloneElement(control, controlProps)}
      <LabelText labelPlacement={labelPlacement}>{label}</LabelText>
    </LabelRoot>
  );
}

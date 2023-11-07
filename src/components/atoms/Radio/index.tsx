import tw, { styled } from 'twin.macro';

import { ChangeEvent, ChangeEventHandler, forwardRef, HTMLProps, useCallback } from 'react';

import useRadioGroup from '@/components/molecules/RadioGroup/useRadioGroup';
import { useControlled } from '@/hooks/utils';

import { RadioProps } from './types';

const variants = {
  primary: tw`border-[6px] border-main-default bg-black`,
  secondary: tw`border-[6px] border-gray-black`,
};

const RadioRoot = tw.span`inline-flex relative`;

const RadioInput = styled.input<RadioProps>`
  appearance: none;
  ${tw`w-5 h-5 border border-line-main bg-white [border-radius: 50%]  hover:cursor-pointer`}
  ${({ variant }) => [variant === 'primary' ? tw`hover:border-main-default` : tw`hover:border-gray-black`]}
  ${({ variant, checked }) => [checked && (variant === 'primary' ? variants.primary : variants.secondary)]}
`;

function areEqualValues(a: any, b: any) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
}

interface Props extends HTMLProps<HTMLInputElement> {
  variant?: RadioProps['variant'];
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: any;
}

export default forwardRef<HTMLInputElement, Props>(
  ({ variant = 'secondary', checked: checkedProp, defaultChecked, onChange: onChangeProp, value }, ref) => {
    const radioGroup = useRadioGroup();
    const radioGroupOnChange = radioGroup?.onChange;

    const onChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        onChangeProp?.(event);
        radioGroupOnChange?.(event);
      },
      [radioGroupOnChange, onChangeProp],
    );

    let contextChecked = checkedProp;

    if (radioGroup) {
      if (typeof contextChecked === 'undefined') {
        contextChecked = areEqualValues(radioGroup.value, value);
      }
    }

    const [checked, setCheckedState] = useControlled({
      controlled: contextChecked,
      default: Boolean(defaultChecked),
    });

    const handleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
      (event) => {
        setCheckedState(event.target.checked);
        if (onChange) {
          onChange(event);
        }
      },
      [onChange, setCheckedState],
    );

    return (
      <RadioRoot>
        <RadioInput
          type="radio"
          variant={variant}
          value={value}
          checked={checked}
          onChange={handleInputChange}
          ref={ref}
        />
      </RadioRoot>
    );
  },
);

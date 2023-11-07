import tw, { styled } from 'twin.macro';

import { ChangeEventHandler, forwardRef, useCallback } from 'react';

import { useControlled } from '@/hooks/utils';

import { CheckboxProps } from './types';

const CheckboxRoot = tw.label`inline-flex relative`;

const CheckboxInput = tw.input`absolute w-full h-full top-0 left-0 opacity-0 z-[1] hover:cursor-pointer`;

const Iconbox = styled.span`
  ${tw`inline-block w-5 h-5 border border-line-main relative hover:border hover:border-gray-black rounded-sm z-[2] hover:cursor-pointer`}

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0;
  }

  input:checked + & {
    ${tw`bg-gray-black border-gray-black`}
  }

  input:checked + &::before {
    opacity: 1;
    background-image: url('assets/icons/regular/check_16.svg');
  }
`;

export default forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked: checkedProp, defaultChecked, onChange, ...others }, ref) => {
    const [checked, setCheckedState] = useControlled({
      controlled: checkedProp,
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
      <CheckboxRoot>
        <CheckboxInput
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={handleInputChange}
          ref={ref}
          {...others}
        />
        <Iconbox />
      </CheckboxRoot>
    );
  },
);

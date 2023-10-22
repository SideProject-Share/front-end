import tw from 'twin.macro';

import { motion } from 'framer-motion';
import { ChangeEventHandler, forwardRef, useCallback } from 'react';

import { useControlled } from '@/hooks/utils';

import Icon from '../Icon';

import { SwitchProps } from './types';

const CheckboxRoot = tw.span`inline-flex relative`;

const CheckboxInput = tw.input`absolute opacity-0 w-full h-full top-0 left-0 z-[1] hover:cursor-pointer`;

const transition = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export default forwardRef<HTMLInputElement, SwitchProps>(
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
        <CheckboxInput type="checkbox" checked={checked} onChange={handleInputChange} ref={ref} {...others} />
        <div
          css={[
            tw`flex w-10 h-6 bg-gray-200 rounded-[34px] justify-start items-center px-0.5`,
            checked && tw`justify-end bg-gray-black`,
          ]}
        >
          <motion.div
            layout
            tw="h-5 w-5 rounded-full bg-white flex items-center justify-center"
            transition={transition}
          >
            <span css={[tw`text-white transition-colors`, checked && tw`text-gray-black`]}>
              <Icon icon="CheckCurrentIcon" />
            </span>
          </motion.div>
        </div>
      </CheckboxRoot>
    );
  },
);

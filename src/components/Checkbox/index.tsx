import React from 'react';

import tw, { styled } from 'twin.macro';

import { Icon } from '..';
import { CheckboxProps } from './types';

const Checkbox = ({ label = '', value, onChange, checked }: CheckboxProps) => {
  return (
    <div tw="flex items-center">
      <input type="checkbox" onChange={onChange} value={value} tw="hidden" id="checkbox" />
      <label htmlFor="checkbox" tw="relative inline-block h-5 w-7 transition duration-300 ease-in-out">
        <div tw="absolute cursor-pointer hover:opacity-0">
          <Icon icon={'CheckboxDefaultIcon'} />
        </div>

        <div tw="absolute opacity-0 transition duration-300 ease-in-out checked:opacity-100 hover:opacity-100">
          <Icon icon={'CheckboxHoverIcon'} />
        </div>

        {checked && (
          <div tw="absolute transition duration-300 ease-in-out">
            <Icon icon={'CheckboxCheckedIcon'} />
          </div>
        )}
      </label>
      <span tw="text-gray-100">{label}</span>
    </div>
  );
};

export default Checkbox;

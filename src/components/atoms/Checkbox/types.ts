import { ChangeEventHandler, HTMLProps } from 'react';

export interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

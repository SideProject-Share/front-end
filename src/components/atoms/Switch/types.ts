import { ChangeEventHandler, HTMLProps } from 'react';

export interface SwitchProps extends HTMLProps<HTMLInputElement> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

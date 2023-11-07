import { HTMLProps, ChangeEventHandler, ReactNode } from 'react';

export interface RadioGroupProps extends HTMLProps<HTMLDivElement> {
  value?: any;
  defaultValue?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
}

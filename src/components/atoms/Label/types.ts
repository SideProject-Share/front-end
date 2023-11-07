import { HTMLProps, ReactElement, ChangeEventHandler } from 'react';

export type LabelPlacement = 'bottom' | 'top' | 'start' | 'end';

export interface LabelProps extends Omit<HTMLProps<HTMLLabelElement>, 'onChange' | 'label' | 'as'> {
  label: string | ReactElement;
  control: ReactElement;
  labelPlacement?: LabelPlacement;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: any;
}

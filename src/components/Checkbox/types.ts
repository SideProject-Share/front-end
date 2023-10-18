import { ChangeEvent } from 'react';

export interface CheckboxProps {
  label?: string;
  name?: string;
  id?: string;
  value: string;
  size?: 'medium' | 'large';
  onChange: any;
  checked: boolean;
}

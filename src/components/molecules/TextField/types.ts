import { ChangeEventHandler, HTMLProps, ReactNode } from 'react';

export type VariantType = 'ghost' | 'outlined';

export type SizeType = 'small' | 'big' | 'medium';

export interface TextFieldProps extends Omit<HTMLProps<HTMLDivElement>, 'theme' | 'as' | 'size'> {
  variant?: VariantType;
  size?: SizeType;
  hasError?: boolean;
}

export interface InputProps
  extends Omit<HTMLProps<HTMLInputElement>, 'as' | 'theme' | 'size' | 'type' | 'value' | 'onChange'> {
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {}

export interface LeadingProps extends HTMLProps<HTMLSpanElement> {}

export interface TrailingProps extends HTMLProps<HTMLSpanElement> {}

export interface ErrorMessageProps {
  children?: ReactNode;
}

export interface SuccessMessageProps {
  children?: ReactNode;
}

export type StyledInputProps = InputProps & { inSize: SizeType; hasError: boolean };

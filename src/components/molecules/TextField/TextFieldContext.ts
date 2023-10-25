import { createContext, Dispatch, SetStateAction } from 'react';

import { VariantType, SizeType } from './types';

interface ITextFieldContext {
  variant: VariantType;
  size: SizeType;
  focused: boolean;
  disabled: boolean;
  hasError: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
  setFocused: Dispatch<SetStateAction<boolean>>;
}

export const TextFieldContext = createContext<ITextFieldContext>({
  variant: 'ghost',
  size: 'big',
  focused: false,
  disabled: false,
  hasError: false,
  setDisabled: () => {},
  setFocused: () => {},
});

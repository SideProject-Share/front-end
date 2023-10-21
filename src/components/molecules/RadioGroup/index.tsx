import { ChangeEvent, useMemo } from 'react';

import { useControlled } from '@/hooks/utils';

import RadioGroupContext from './RadioGroupContext';
import { RadioGroupProps } from './types';

export default function RadioGroup({ value: valueProp, defaultValue, onChange, children, ...others }: RadioGroupProps) {
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
  });

  const context = useMemo(
    () => ({
      value,
      onChange(event: ChangeEvent<HTMLInputElement>) {
        setValueState(event.target.value);

        if (onChange) {
          onChange(event);
        }
      },
    }),
    [onChange, setValueState, value],
  );

  return (
    <RadioGroupContext.Provider value={context}>
      <div {...others}>{children}</div>
    </RadioGroupContext.Provider>
  );
}

import { useState } from 'react';

import { BottomSheetStatus } from '../types';

export default function useButtonHandler() {
  const [bottomSheetStatus, setBottomSheetStatus] = useState<'login' | 'register' | 'none'>('none');

  const buttonHandler = (value: BottomSheetStatus) => {
    switch (value) {
      case 'none':
        setBottomSheetStatus(value);
        break;

      case 'login':
        setBottomSheetStatus(value);
        break;

      case 'register':
        setBottomSheetStatus(value);
        break;

      default:
        break;
    }
  };

  return {
    bottomSheetStatus,
    buttonHandler,
  };
}

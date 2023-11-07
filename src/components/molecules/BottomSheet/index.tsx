import React from 'react';

import Bezel from './Bezel';
import Body from './Body';
import Header from './Header';
import { BottomSheetProps } from './types';

function BottomSheetComponent({ children }: BottomSheetProps) {
  return <>{children}</>;
}

const BottomSheet = Object.assign(BottomSheetComponent, {
  Bezel,
  Header,
  Body,
});

export default BottomSheet;

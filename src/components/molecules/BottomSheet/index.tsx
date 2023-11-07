import React from 'react';

import Bezel from './Bezel';
import Body from './Body';
import Header from './Header';
import { BottomSheetProps } from './types';

function BottomSheetComponent({ children }: BottomSheetProps) {
  return <div>{children}</div>;
}

const BottomSheet = Object.assign(BottomSheetComponent, {
  Bezel,
  Header,
  Body,
});

export default BottomSheet;

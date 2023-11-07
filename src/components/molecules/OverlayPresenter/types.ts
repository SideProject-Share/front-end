import { ReactNode } from 'react';

export interface OverlayPresenterProps {
  position?: 'center' | 'top-left' | 'bottom';
  dropShadow?: boolean;
  animationType?: 'none' | 'scale';
  children?: ReactNode;
  type?: 'modal' | 'bottomSheet';
}

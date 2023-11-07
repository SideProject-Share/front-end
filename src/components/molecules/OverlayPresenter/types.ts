import { ReactNode } from 'react';

export interface OverlayPresenterProps {
  position?: 'center' | 'top-left';
  dropShadow?: boolean;
  animationType?: 'none' | 'scale';
  children?: ReactNode;
}

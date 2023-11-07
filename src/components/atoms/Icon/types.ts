import * as icons from '@/assets/icons/index';

export type IconType = keyof typeof icons;

export interface IconProps {
  icon: IconType;
}

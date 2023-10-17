import React from 'react';
import * as icons from '@/assets/icons/index';
import { IconProps, IconType } from './types';

export const IconLists: IconType[] = Object.keys(icons) as any[];

const Icon = ({ icon }: IconProps) => {
  const SVGIcon = icons[icon];

  return <SVGIcon />;
};
export default Icon;

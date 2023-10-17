import tw from 'twin.macro';

import React from 'react';

import { NavigationItemProps, NavigationTab } from './types';

import Icon from '../Icon';

const Tab = {
  Home: '홈',
  Search: '검색',
  Post: '글작성',
  My: '마이페이지',
};

export const TabList: NavigationTab[] = Object.keys(Tab) as any[];

const NavigationItem = ({ tab, active = false }: NavigationItemProps) => (
  <div tw="w-fit flex flex-col flex-1 justify-center items-center gap-1 ">
    {tab === 'Home' && (active ? <Icon icon="HomeActiveIcon" /> : <Icon icon="HomeIcon" />)}
    {tab === 'Search' && (active ? <Icon icon="SearchActiveBigIcon" /> : <Icon icon="SearchBigIcon" />)}
    {tab === 'Post' && (active ? <Icon icon="WriteActiveIcon" /> : <Icon icon="WriteIcon" />)}
    {tab === 'My' && (active ? <Icon icon="MyActiveIcon" /> : <Icon icon="MyIcon" />)}

    <p tw="text-grayText-100 text-10 leading-3 [letter-spacing: -0.5px]" css={[active && tw`text-main-default`]}>
      {Tab[tab]}
    </p>
  </div>
);

export default NavigationItem;

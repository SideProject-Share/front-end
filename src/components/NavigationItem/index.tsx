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
  <button type="button" tw="w-fit flex flex-col flex-1 justify-center items-center gap-1 ">
    {tab === 'Home' && <Icon icon={active ? 'HomeActiveIcon' : 'HomeIcon'} />}

    {tab === 'Search' && <Icon icon={active ? 'SearchActiveBigIcon' : 'SearchBigIcon'} />}

    {tab === 'Post' && <Icon icon={active ? 'WriteActiveIcon' : 'WriteIcon'} />}

    {tab === 'My' && <Icon icon={active ? 'MyActiveIcon' : 'MyIcon'} />}

    <p tw="text-grayText-100 text-10 leading-3 [letter-spacing: -0.5px]" css={[active && tw`text-main-default`]}>
      {Tab[tab]}
    </p>
  </button>
);

export default NavigationItem;

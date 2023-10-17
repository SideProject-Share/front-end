import 'twin.macro';
import React from 'react';
import BottomNavigation from '../BottomNavigation';
// import Header from '../Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div tw="bg-bg-main [min-width: 360px] [max-width: 428px] min-h-full mx-auto">
      {/* <Header /> */}
      <main>{children}</main>
      <BottomNavigation selectedTab="Home" />
    </div>
  );
}

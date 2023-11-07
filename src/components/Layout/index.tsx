import tw from 'twin.macro';

import React from 'react';

const Container = tw.div`flex flex-col bg-bg-main min-w-mobile max-w-mobile w-full h-full mx-auto`;

const MainWrraper = tw.div`relative w-full flex-1 min-h-0 my-0 [z-index: 1] overflow-hidden mx-auto`;

const BottomWrraper = tw.div`min-w-mobile max-w-mobile w-full mx-auto`;

export default function Layout({ children, bottomNav }: { children: React.ReactNode; bottomNav?: JSX.Element | null }) {
  return (
    <Container>
      <MainWrraper>{children}</MainWrraper>
      {bottomNav && <BottomWrraper>{bottomNav}</BottomWrraper>}
    </Container>
  );
}

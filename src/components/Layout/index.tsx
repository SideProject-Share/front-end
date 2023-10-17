import React from 'react';
import tw from 'twin.macro';

const Container = tw.div`flex flex-col bg-bg-main [min-width: 360px] [max-width: 428px] w-full h-full mx-auto`;

const MainWrraper = tw.div`relative w-full flex-1 min-h-0 my-0 [z-index: 1] overflow-hidden mx-auto`;

const BottomWrraper = tw.div`[min-width: 360px] [max-width: 428px] w-full mx-auto`;

export default function Layout({ children, bottomNav }: { children: React.ReactNode; bottomNav?: JSX.Element | null }) {
  return (
    <Container>
      <MainWrraper>{children}</MainWrraper>
      {bottomNav && <BottomWrraper>{bottomNav}</BottomWrraper>}
    </Container>
  );
}

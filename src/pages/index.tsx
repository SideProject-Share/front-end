import { Button } from '@/components';
import { useState } from 'react';
import tw from 'twin.macro';

export default function Home() {
  const [tab, setTab] = useState(1);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setTab(1);
        }}
      >
        changeTab-1
      </button>
      <button
        type="button"
        onClick={() => {
          setTab(2);
        }}
      >
        changeTab-2
      </button>
      <div css={[tab === 1 ? tw`text-13 bg-main-default` : tw`text-13 bg-main-disabled`]}>index</div>
      <div className="text-main-default">index</div>
      <div className="text-main-disabled">index</div>
      <div tw="text-main-default">index</div>
      <div tw="text-main-disabled">index</div>
      <Button variant="primary" tw="w-24">
        hi
      </Button>
    </>
  );
}

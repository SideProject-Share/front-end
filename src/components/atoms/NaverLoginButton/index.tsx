import { useEffect, useRef } from 'react';

import { loginWithNaver } from '@/libs/naver';

import Button from '../Button';

export default function NaverLoginButton() {
  const naverRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        loginWithNaver();
      }, 100);
    }
  }, []);

  const handleClick = () => {
    // @ts-ignore
    naverRef.current.children[0].click();
  };

  return (
    <>
      <div id="naverIdLogin" ref={naverRef} />
      <Button tw="w-full flex-1 bg-[#03C75A] font-bold text-white" onClick={handleClick} size="big">
        네이버 아이디로 로그인
      </Button>
    </>
  );
}

import { useState } from 'react';

import { KakaoLoginButton, Radio } from '@/components/atoms';
import NaverLoginButton from '@/components/atoms/NaverLoginButton';
import { NavigationHeader, RadioGroup } from '@/components/molecules';
import { loginWithKakao } from '@/libs/kakao';

function Login() {
  const [value, setValue] = useState(1);
  return (
    <div tw="bg-bg-main [min-width: 360px] [max-width: 428px] min-h-full mx-auto relative">
      <NavigationHeader>
        <NavigationHeader.Logo />
      </NavigationHeader>

      <div tw="w-full flex-1 min-h-0 overflow-auto px-5 py-10 items-center justify-center">
        <p tw="text-center">로그인 페이지</p>
      </div>

      <div tw="w-full flex flex-col items-center gap-4 px-5">
        <KakaoLoginButton onClick={loginWithKakao} />

        <div tw="w-[180px]">
          <NaverLoginButton />
        </div>
      </div>
    </div>
  );
}

export default Login;

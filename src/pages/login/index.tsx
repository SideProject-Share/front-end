import { loginWithKakao } from '@/libs/kakao';
import { NaverLoginButton, NavigationHeader } from '@/components';
import Image from 'next/image';

function Login() {
  return (
    <div tw="bg-bg-main [min-width: 360px] [max-width: 428px] min-h-full mx-auto relative">
      <NavigationHeader>
        <NavigationHeader.Logo />
      </NavigationHeader>

      <div tw="w-full flex-1 min-h-0 overflow-auto px-5 py-10 items-center justify-center">
        <p tw="text-center">로그인 페이지</p>
      </div>

      <div tw="w-full flex flex-col items-center gap-4 px-5">
        <button type="button" tw="w-fit flex-1" onClick={() => loginWithKakao()}>
          <Image width={180} height={48} src="/images/kakao_login.png" alt="" />
        </button>

        <div tw="w-[180px]">
          <NaverLoginButton />
        </div>
      </div>
    </div>
  );
}

export default Login;

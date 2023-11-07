import { loginWithKakao } from '@/libs/kakao';

import Button from '../Button';

export default function KakaoLoginButton() {
  return (
    <Button tw="w-full flex-1 bg-[#FEE500] font-bold text-gray-black" onClick={() => loginWithKakao()} size="big">
      카카오 아이디로 로그인
    </Button>
  );
}

import Image from 'next/image';

import { KakaoLoginButtonProps } from './types';

export default function NaverLoginButton({ onClick }: KakaoLoginButtonProps) {
  return (
    <button type="button" tw="w-fit flex-1" onClick={onClick}>
      <Image width={180} height={48} src="/images/kakao_login.png" alt="" />
    </button>
  );
}

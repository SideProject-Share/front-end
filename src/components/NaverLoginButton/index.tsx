import { loginWithNaver } from '@/libs/naver';
import { useEffect } from 'react';

export default function NaverLoginButton() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        loginWithNaver();
      }, 100);
    }
  }, []);

  return <div id="naverIdLogin" />;
}

import { useEffect } from 'react';

import { loginWithNaver } from '@/libs/naver';

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
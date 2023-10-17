import { getNaverAccessToken } from '@/libs/naver/login';

import { useEffect } from 'react';

function Naver() {
  useEffect(() => {
    getNaverAccessToken();
  }, []);
}

export default Naver;

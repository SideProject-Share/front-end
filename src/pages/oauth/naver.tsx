import { useEffect } from 'react';

import { getNaverAccessToken } from '@/libs/naver/login';

function Naver() {
  useEffect(() => {
    getNaverAccessToken();
  }, []);
}

export default Naver;

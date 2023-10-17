import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Kakao() {
  const { replace, query } = useRouter();

  useEffect(() => {
    if (query?.code) {
      // 여기서 서버로 코드를 보낸 후 유효성 검사를 가지고 회원인지 아닌지 판단해서

      // 회원이 아니면 회원가입이 필요하다

      // 회원이면 홈으로

      replace('/');
    }
  }, [replace, query]);

  return null;
}

export default Kakao;

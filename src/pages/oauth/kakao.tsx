import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Kakao() {
  const { replace, query } = useRouter();

  useEffect(() => {
    if (query?.code) {
      const accessToken = query.code as string;

      console.log(accessToken);
    }
  }, [replace, query]);

  return null;
}

export default Kakao;

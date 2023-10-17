/* eslint-disable @next/next/no-img-element */

// import Kakao from '@/libs/kakao';
import { Button } from '@/components';
import Kakao from '@/libs/kakao';
import React from 'react';

function Login() {
  return (
    <div tw="flex flex-col bg-error-main">
      <button type="button" tw="w-fit">
        <img src="images/kakao_login.png" alt="" />
      </button>

      <button type="button" tw="w-fit">
        <img src="images/naver_login.png" alt="" />
      </button>
    </div>
  );
}

export default Login;

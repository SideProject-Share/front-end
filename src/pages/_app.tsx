/* eslint-disable import/named */
import type { AppProps } from 'next/app';

import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';

import GlobalStyles from '@/styles/GlobalStyles';
import '@/styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';
import { initializeKakaoSDK } from '@/libs/kakao';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TWTD</title>
      </Head>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
        integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
        crossOrigin="anonymous"
        onLoad={initializeKakaoSDK}
      />
      <Script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js" />
      <CacheProvider value={cache}>
        <GlobalStyles />
        <Component {...pageProps} />
      </CacheProvider>
    </>
  );
}

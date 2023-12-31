/* eslint-disable import/order */
import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import Head from 'next/head';
import Script from 'next/script';

import { initializeKakaoSDK } from '@/libs/kakao';
import GlobalStyles from '@/styles/GlobalStyles';

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
        <div id="rootOverlay" tw="pointer-events-none [z-index: 1500]" />
        <Component {...pageProps} />
      </CacheProvider>
    </>
  );
}

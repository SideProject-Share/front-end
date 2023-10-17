import type { AppProps } from 'next/app';

import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';

import GlobalStyles from '@/styles/GlobalStyles';
import '@/styles/globals.css';
import Script from 'next/script';
import { Layout } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
        integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
        crossOrigin="anonymous"
      />
    </CacheProvider>
  );
}

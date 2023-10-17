declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare global {
  interface Window {
    Kakao: any;
  }
}

interface KakaoSDK {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Auth: {
    authorize: (options: { redirectUri: string; scope: string; serviceTerms: string }) => void;
  };
}

export const Kakao = window.Kakao;

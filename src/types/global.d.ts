declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare global {
  interface Window {
    naver: any;
  }
}

export const naver = window.naver;

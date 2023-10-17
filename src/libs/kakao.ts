export default class Kakao {
  static setKakaoLogin = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }

    // kakaoRedirectUrl => 내가 모든 로그인이 끝나면 돌아올 페이지의 주소
    // window.Kakao.Auth.authorize 카카오에서 인증이 끝나면 우리쪽 로그인 프로세스를 처리해줄 페이지의 주소
    sessionStorage.setItem(
      'kakaoRedirectUrl',
      window.location.href.split(`${window.location.protocol}//${window.location.host}`)[1],
    );

    window.Kakao.Auth.authorize({
      redirectUri: `${window.location.protocol}//${window.location.host}/oauth/kakao`,
      // scope: 'account_email',
      // serviceTerms: 'account_email',
    });
  };
}

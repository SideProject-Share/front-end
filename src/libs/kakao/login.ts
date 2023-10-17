export default function loginWithKakao(state?: string) {
  if (typeof Kakao !== 'undefined') {
    Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}/oauth/kakao`,
      state: state ?? '',
    });
  }
}

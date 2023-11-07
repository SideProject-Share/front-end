const getToken = () => {
  const token = window.location.href.split('=')[1].split('&')[0];
  console.log(token);
};

export const getNaverAccessToken = () => {
  if (!window) return;

  if (window.location.href.includes('access_token')) {
    getToken();
  }
};

const loginWithNaver = () => {
  if (!window?.naver) {
    return;
  }

  const naverLogin = new window.naver.LoginWithNaverId({
    clientId: process.env.NEXT_PUBLIC_NCP_ClIENT_ID,
    callbackUrl: `${window.location.origin}/oauth/naver`,
    isPopup: false,
    loginButton: { color: 'green', type: 3, height: 48 },
  });

  naverLogin.init();

  naverLogin.getLoginStatus(async (status: any) => {
    console.log(naverLogin);
    if (status) {
      const { user } = naverLogin;

      console.log(user);
    }
  });
};

export default loginWithNaver;

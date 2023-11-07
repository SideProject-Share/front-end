import axios from '@/libs/axios';

interface LoginReq {
  access_token: string;
}

export interface LoginRes {
  status: string;
  /** 성공 시 */
  data: {
    accessToken: string;
    refreshToken: string;
  };
  message: string;
}

export default async function login({ access_token }: LoginReq) {
  try {
    const { data } = await axios.post('/api/v1/login', { access_token });
    return data as LoginRes;
  } catch (e) {
    return null;
  }
}

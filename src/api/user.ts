// api/user.ts

import axios from "./axios";

interface IReqCreateUser {
  Email: string;
  VerificationCode: string;
}
interface IResCreateUser {
  code: number;
  data: { Token: string } | null;
}
export async function createUser(data: IReqCreateUser) {
  const res = await axios.post<IResCreateUser>(`/api/v1/users`, data);
  return res.data;
}

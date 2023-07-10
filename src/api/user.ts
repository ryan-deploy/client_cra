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
export async function CreateUser(data: IReqCreateUser) {
  const res = await axios.post<IResCreateUser>(`/api/v1/users`, data);
  return res?.data;
}

interface IReqReadUser {
  id: number;
}
export async function ReadUser(params: IReqReadUser) {
  const res = await axios.get(`api/v1/users/${params.id}`);
  return res?.data;
}

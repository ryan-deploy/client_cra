// api/user.ts
import axios from "axios";

interface CreateUser {
  id: number;
  name: string;
  email: string;
}
export async function createUser(data: {
  Email: string;
  VerificationCode: string;
}): Promise<CreateUser> {
  const response = await axios.post(`/api/v1/users`, data);
  return response.data;
}

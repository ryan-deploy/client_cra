// api/user.ts

import axios from "./axios";

export function createUser(data: { Email: string; VerificationCode: string }) {
  try {
    axios.post(`/api/v1/users`, data);
  } catch (error) {
    console.error("createUser", error);
  }
}

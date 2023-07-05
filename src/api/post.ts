import axios from "./axios";

export async function ReadPosts() {
  const res = await axios.get("api/v1/posts");
  return res.data;
}

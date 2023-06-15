// api/axios.js
import { Toast } from "antd-mobile";
import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8080",
});

instance.interceptors.request.use((request) => {
  Toast.show({
    icon: "loading",
    content: "Loading",
    duration: 0,
  });
  return request;
});

instance.interceptors.response.use(
  (response) => {
    Toast.clear();
    if (!response.data.code) {
      Toast.show({
        icon: "fail",
        content: response.data.message,
      });
    }
    return response;
  },
  (error) => {
    Toast.clear();
    Toast.show({
      icon: "fail",
      content: "Unknown error occured" + error,
    });
  }
);

export default instance;

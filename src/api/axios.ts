// api/axios.js
import { Toast } from "antd-mobile";
import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "http://api.tangzhenming.com" : "",
});
// 本地开发环境中直接向 http://api.tangzhenming.com 发送请求时，浏览器会阻止这个跨域请求。可以在本地开发环境中继续使用本地代理（setupProxy.js）来解决这个问题，而生产环境用 http://api.tangzhenming.com 发起请求
// 在本地开发环境中使用 npm start 命令启动项目时，create-react-app 会自动将 process.env.NODE_ENV 的值设置为 "development"。当使用 npm run build 命令构建项目时，create-react-app 会自动将 process.env.NODE_ENV 的值设置为 "production"

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
    if (response.status === 401) {
      sessionStorage.setItem("token", "");
    }

    Toast.clear();
    if (!response.data.code) {
      Toast.show({
        icon: "fail",
        content: response.data.message,
      });
    } else {
      Toast.show({
        icon: "success",
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

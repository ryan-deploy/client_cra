# CLIENT-CRA

## Logs

- **2023.06.13**
  - Init project by `npx create-react-app client_cra --template typescript`
  - Use [Ant Design Mobile](https://mobile.ant.design/zh)
  - Use [Axios](https://www.axios-http.cn/docs/intro) to handle requests
  - Proxy all the unknown requests to API server in development
    - use `http-proxy-middleware`
    - make `setupProxy.js`
    - make `.env.development.local` and this file doesn't need to commit, everyone can dynamically switch proxy addresses according to their own cinfiguration. It looks like `REACT_APP_PROXY_ENDPOINT=http://localhost:8080`

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
- **2023.06.27**
  - Use [React Router](https://reactrouter.com/en/main)
    - Don't forget using `npm install @types/react-router-dom` for TypeScript

# CLIENT-CRA

## Proxy

- Proxy all the unknown requests to API server in development
  - use `http-proxy-middleware`
  - make `setupProxy.js`
  - make `.env.development.local` and this file doesn't need to commit, everyone can dynamically switch proxy addresses according to their own cinfiguration. It looks like `REACT_APP_PROXY_ENDPOINT=http://localhost:8080`

## React Router

- Use [React Router](https://reactrouter.com/en/main)
  - Don't forget using `npm install @types/react-router-dom` for TypeScript
  - Navigate to login page when someone unauthenticated; send them to the page they tried to visit if they login successfuly. [Check this commit out](https://github.com/ryan-deploy/client_cra/commit/aa5d13fb707ffb9d245bafa7f3852a86aecd18e2)

## Tree

`tree -I 'node_modules|build'`

`tree -I 'node_modules|build' -L 1`

FROM node:18-alpine as builder

WORKDIR /code

ADD package.json /code/
ADD tsconfig.json /code/
RUN npm i

ADD public /code/public
ADD src /code/src
RUN npm run build

# 选择更小体积的基础镜像
FROM nginx:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder code/build /usr/share/nginx/html
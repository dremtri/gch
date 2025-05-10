# node 构建
FROM node:22-alpine AS build-stage
# 设置工作目录
WORKDIR /app  
# 将当前目录下的所有文件和目录复制到工作目录中
COPY . . 
# 设置 node 阿里镜像
RUN npm config set registry https://registry.npmmirror.com
# 设置阿里镜像、pnpm、依赖、编译
RUN npm install pnpm -g && \
  pnpm install --frozen-lockfile && \
  pnpm build:docker
# node部分结束
RUN echo "🎉 编 🎉 译 🎉 成 🎉 功 🎉"

# nginx 部署
FROM nginx:1.23.3-alpine AS production-stage
ENV LANG=en_US.UTF-8
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /var/www/html
COPY --from=build-stage /app/app/dist/ /var/www/html
EXPOSE 80
EXPOSE 443
RUN echo "🎉 架 🎉 设 🎉 成 🎉 功 🎉"
# gch

## 项目介绍

```
学习工程化，CI, CD，自动化部署等。
```

## 技术栈

- Vue 生态
- Docker
- Git
- Monorepo
- turbo
- eslint@9.25.0 + prettier + stylelint 格式化
- commitlint + Husky + lint-staged 规范提交

## 分支说明

```
1. develop：开发分支,显示最新开发状态;
2. master：主干分支,保持和生产环境一致；禁止push
3. feature-xxx：个人开发分支，可merge到develop分支；
4. bugfix-xxx：bug修复分支，可merge到develop分支；
```

## 部署示意图

无

## 项目结构

无

## 设置

## 构建镜像

```bash
docker build --no-cache -t gch .
```

## 使用镜像构建容器

```bash
docker run --name gch-demo -d -p 9999:80 gch
```

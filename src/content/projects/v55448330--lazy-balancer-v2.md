---
repo: "v55448330/lazy-balancer-v2"
name: "lazy-balancer-v2"
description: "Caddy Reverse Proxy Balancer WebUI"
readmeQualityOk: true
url: "https://github.com/v55448330/lazy-balancer-v2"
language: "Go"
languages: ["Go"]
languagePcts: [85]
stars: 38
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-14T10:21:11Z"
lastCommitAt: "2026-09-15T08:55:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["v55448330"]
openGraphImageUrl: "https://opengraph.githubassets.com/584f4e28034896e2357df704681914ec2026a5811724bd46392754bf1d210d55/v55448330/lazy-balancer-v2"
---

# Lazy Balancer V2

[English](https://github.com/v55448330/lazy-balancer-v2/blob/HEAD/README.en.md) | 简体中文

基于 **Caddy v2.11** 的可视化负载均衡管理平台，内置 WAF 安全防护，单容器交付。

## 功能一览

| 功能 | 说明 |
|---|---|
| 负载均衡 | HTTP/HTTPS/TCP 四层代理，多种策略，健康检查，路径路由 |
| WAF 防护 | OWASP CRS + 自定义规则 + IP 控制 + 地域拦截 + 限流 |
| 免费证书 | ACME 自动签发（DNS-01），自动续签 |
| 主从集群 | 增量同步，防篡改签名，从节点只读，一键提升 |
| 监控告警 | 流量/延迟 P50-99，上游健康，安全事件总览 |
| MCP 服务 | AI 代理可通过 127 个工具操作全部功能 |

## 快速开始

```bash
docker run -d --name lazy-balancer --network host \
  --ulimit nofile=1048576:1048576 \
  -v $(pwd)/data:/app/data -v $(pwd)/certs:/app/certs \
  -v $(pwd)/logs:/app/logs -v $(pwd)/waf:/app/waf \
  v55448330/lazy-balancer-v2:latest
```

打开 `http://localhost:8000` 进入管理面板。首次访问进入初始化向导，无默认凭据。

<details>
<summary>Docker Compose / 构建源码</summary>

```bash
# Docker Compose
docker compose up -d

# 从源码构建
cd web && npm install && npm run build && cd ..
docker buildx build --platform linux/amd64,linux/arm64 \
  --build-arg VERSION=v2.2.10 \
  -t v55448330/lazy-balancer-v2:v2.2.10 --push .
```
</details>

## 文档

| 文档 | 内容 |
|---|---|
| [部署指南](https://github.com/v55448330/lazy-balancer-v2/blob/HEAD/docs/deployment.zh-CN.md) | 挂载目录、环境变量、端口、生产参数 |
|…

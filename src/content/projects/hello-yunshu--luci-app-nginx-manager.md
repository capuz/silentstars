---
repo: "hello-yunshu/luci-app-nginx-manager"
name: "luci-app-nginx-manager"
description: "Nginx Manager for OpenWrt LuCI"
readmeQualityOk: true
url: "https://github.com/hello-yunshu/luci-app-nginx-manager"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [55, 38]
stars: 13
forks: 5
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-02T08:12:10Z"
lastCommitAt: "2026-11-23T12:12:14Z"
lastReleaseAt: "2026-06-11T18:51:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 52
maintainers: ["hello-yunshu", "Lyapnev", "PedroFlores199"]
openGraphImageUrl: "https://opengraph.githubassets.com/1195b1761a386313aca9775a63bc22b296475e8bf505a7438d824a611c4a3f09/hello-yunshu/luci-app-nginx-manager"
---

# luci-app-nginx-manager

[English](https://github.com/hello-yunshu/luci-app-nginx-manager/blob/HEAD/README.en.md) | **中文**

  通过 LuCI Web 界面管理 Nginx 站点、证书、日志与配置，无需命令行操作。

---

## 功能特性

### 站点管理

支持四种站点模式，覆盖常见使用场景：

| 模式 | 说明 |
|------|------|
| **反向代理** | 将请求转发到后端服务，支持 WebSocket、自定义代理头 |
| **静态文件** | 托管本地文件，自动生成 `try_files` 规则 |
| **自定义配置** | 直接编写 server 块，完全自由 |
| **重定向** | 301 永久重定向到目标地址 |

每个站点支持：
- 多个 listen 端口（含 SSL）
- 自动 HTTP→HTTPS 跳转
- gRPC 透传（gRPC Path + gRPC Backend Address）
- 站点级 HSTS（max-age 自定义）
- 独立的访问日志与错误日志控制
- 一键启用/禁用，禁用后配置文件保留但不会被 nginx 加载
- 站点复制（一键复制已有站点配置）

### SSL 证书管理

- **手动上传** — 粘贴证书和私钥内容，自动存储并设置权限
- **自签名生成** — 一键生成自签名证书，适合内网测试
- **ACME 自动签发** — 基于 OpenWrt `acme`，支持 HTTP-01 Webroot、HTTP-01 Standalone 与 DNS-01 验证
- 证书到期检测，30 天内自动标记为「即将过期」

### 实时日志

- 在线查看访问日志和错误日志
- 支持按站点筛选
- 关键词过滤，快速定位问题
- 最多显示 500 行，防止浏览器卡顿

### 配置安全机制

所有配置变更都经过安全流程：

```
修改 UCI 配置 → 生成 nginx conf → nginx -t 测试 → 通过则 reload → 失败则自动回滚
```

- **自动回滚** — 配置测试失败时，自动恢复到上一个可用状态
- **危险编辑模式** — 高级用户可开启，直接编辑 nginx.conf 和模板文件
- **配置预览** — 保存前可预览将要生成的 nginx 配置

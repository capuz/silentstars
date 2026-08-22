---
repo: "KincaidYang/whois"
name: "whois"
description: "Self-hosted WHOIS/RDAP API and MCP server for domains, IPv4/IPv6, CIDRs and ASNs."
readmeQualityOk: true
url: "https://github.com/KincaidYang/whois"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["api", "domain", "golang", "ip", "whois", "whois-lookup", "asn", "docker", "ipv6", "mcp"]
stars: 64
forks: 13
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-09-20T03:18:52Z"
lastCommitAt: "2026-08-22T04:07:03Z"
lastReleaseAt: "2024-03-26T12:47:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 53
maintainers: ["KincaidYang", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9946150fcd276be6d48a19db41c90b78e15fa941542f53af733ddf80b91ce888/KincaidYang/whois"
---

[English](https://github.com/KincaidYang/whois/blob/HEAD/README_EN.md)

## 介绍
基于 Golang 实现的域名 Whois 查询工具，支持所有允许公开查询的 TLD 后缀的域名、IPv4/v6、ASN 的 Whois 信息查询。
根据 ICANN 《通用顶级域名注册数据临时政策细则（Temporary Specification for gTLD Registration Data）》和欧盟《通用数据保护条例》合规要求，在查询域名信息时，程序只返回了部分必要的信息（详见下方返回结果示例），不会返回所有者的`联系方式`、`地址`、`电话`、`邮箱`等字段。

演示站点：
- [https://whois.ddnsip.cn](https://whois.ddnsip.cn)
- [https://whois.mmoke.com](https://whois.mmoke.com/) By [immoke](https://github.com/immoke)

## 使用方法
### Docker部署
```bash
# 安装 Redis
docker run -d --name redis -p 6379:6379 redis:latest
# 运行 whois
docker run -d --name whois -p 8043:8043 --link redis:redis jinzeyang/whois
# 运行 whois（大陆推荐）
docker run -d --name whois -p 8043:8043 --link redis:redis docker.cnb.cool/kincaidyang/whois
```

### 下载
#### 使用二进制文件
您可从 [Release](https://github.com/KincaidYang/whois/releases) 页面下载对应平台的二进制文件。
#### 从源码编译
```bash
git clone https://github.com/KincaidYang/whois.git
cd whois
go build
```
### 安装依赖
本程序默认使用内存缓存，可直接运行；生产环境或多实例部署建议搭配 Redis 使用，您可参照 https://redis.io/docs/install/install-redis/install-redis-on-linux/ 进行安装。

### 编辑配置文件
```bash
vim config.yaml
```
> ⚠️ 配置项按功能分组，键名为 **camelCase**（与 API 响应字段风格一致）。未知键或旧版（v0.9…

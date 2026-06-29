---
repo: "Yulinanami/my-xhttp-cdn-config"
name: "my-xhttp-cdn-config"
description: "XHTTP+CDN上下行分离快速搭建步骤"
url: "https://github.com/Yulinanami/my-xhttp-cdn-config"
language: "Shell"
languages: ["Shell", "Go Template"]
languagePcts: [67, 33]
topics: ["vless-reality-vision", "vless-xhttp-reality", "vless-xhttp-cdn"]
stars: 70
forks: 18
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-03-29T13:18:16Z"
lastCommitAt: "2026-06-29T07:21:51Z"
lastReleaseAt: "2026-06-29T07:24:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 32
maintainers: ["Yulinanami", "yuan1238y"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fae91e64c98dc605fd12e5175a7fa35091854d958d4bb61e30fc247fbb4c371/Yulinanami/my-xhttp-cdn-config"
---

# XHTTP + CDN 上下行分离配置指南

> **强烈建议**：关于XHTTP的原理，上下行分离，以及带来的抗审查优势：https://habr.com/en/articles/990208/

这个仓库用于整理一套443端口上基于 Xray-core 的 XHTTP + CDN 搭建方案，覆盖环境准备、服务端配置和客户端模板三部分内容。
支持小火箭、Xray和Mihomo客户端，支持IPv4和IPv6。

> **提示**：推荐使用全新未搭建过类似服务的机器，这样可以避免很多隐形冲突。
>
> **注意**：教程使用 VLESS Encryption，客户端（V2rayN、Mihomo客户端）也需要更新到支持 vlessenc / xhttp 的版本。
>
> **注意**：V2rayN v7.19.5+版本 TUN 模式下链路不稳定，可能需要启用旧版TUN保护选项。
> PR：https://github.com/2dust/v2rayN/pull/9005

## 模式

仓库文档用于搭建包含以下 5 种模式：

1. Reality Vision 直连
2. XHTTP + Reality 上下行不分离
3. 上行 XHTTP + TLS + CDN，下行 XHTTP + Reality
4. XHTTP + TLS 双向 CDN
5. 上行 XHTTP + Reality，下行 XHTTP + TLS + CDN

## 安全性

- VLESS Encryption：启用 VLESS Encryption，防止 CDN 中间人解密流量内容
- 对 XHTTP 入站启用 vlessenc（因为只有它过 CDN），Vision 直连不需要
- 默认转发自主动探测请求到斯坦福和哈佛的官网（建议根据自己VPS的所在地区来修改，改成你VPS所在地的大学官网伪装能力会更好）
- 配置 `xpadding` 以绕过 CDN 的潜在检测
- 配置 `ECH` 以加密 TLS 握手时的 SNI
- 为了保证vps其它服务的安全和正常工作，不建议在已经部署其它服务的服务器上搭建代理服务，最好用专门用来代理的vps搭建代理

## 流程图（去程 + 回程）

客户端与服务器连接流程图请看：[流程图.md](./docs/5.流程图.md)

## 手动部署（以Ubuntu24.04为例）

按下面的顺序阅读和执行：

1. [环境配置.md](./docs/1.环境配置.md)，完成 Cloudflare 设置、Xray 安装、证书申请和 Nginx 安装。
2. [文件配置.md](./docs/2.文件配置.md)，完成 Nginx 与 Xray 配置，并执行测试与重启命令。
3.…

---
repo: "ByLsPro/JxPan"
name: "JxPan"
description: "CloudFlare Workes网盘直链解析，目前支持: 阿里云盘(alipan.com) | 小飞机网盘(feijipan.com) | 蓝奏云优享版(ilanzou.com) | 蓝奏云(lanzou*.com) | 夸克网盘(quark.cn) | UC网盘(drive.uc.cn)  | 移动云盘(yun.139.com) | 光鸭云盘(guangyapan.com)"
readmeQualityOk: true
url: "https://github.com/ByLsPro/JxPan"
homepage: "https://jx.fsapk.xx.kg"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 65
forks: 29
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-02-05T07:35:56Z"
lastCommitAt: "2026-07-31T06:31:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 27
maintainers: ["ByLsPro"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff9ec15fa3183cdc6c57949ce642be95f4971cd29c555432d2759128b8e0fefc/ByLsPro/JxPan"
---

## 📖 项目简介

**JxPan** 是一个基于 Cloudflare Workers 平台的网盘直链解析工具。它能够解析主流网盘分享链接，提取文件真实下载地址，并通过 JSON 格式输出或 302 重定向直接下载，有效绕过网盘客户端限制。

- 🖥️ **Demo 演示站点**：<https://jx.fsapk.xx.kg>

### ✨ 核心特性

- 🔗 **直链解析**：支持解析网盘分享链接，获取文件真实下载直链
- 📡 **JSON 输出**：标准化 API 响应，方便二次开发集成
- 🔄 **302 重定向**：支持直接重定向到下载地址，实现无缝下载体验
- 🛡️ **边缘计算**：基于 Cloudflare Workers 平台，避免 IP 封禁
- ⚡ **高速稳定**：利用 CF 全球网络，解析速度快、可用性高
- 🌍 **全球访问**：自动选择最优节点，无视地域限制
- 📊 **统计功能**：记录解析次数、成功/失败次数
- 💾 **D1 数据库存储**：使用 Cloudflare D1 SQL 数据库存储数据
- 🔐 **数据加密**：所有敏感数据 AES 加密存储

***

## 🚀 支持平台

| 平台     | 域名                           | 状态    | 扫码登录  |
| ------ | ---------------------------- | ----- | ----- |
| 阿里云盘   | alipan.com / aliyundrive.com | ✅ 已支持 | ✅ 支持  |
| 夸克网盘   | pan.quark.cn                 | ✅ 已支持 | ✅ 支持  |
| UC网盘   | drive.uc.cn / fast.uc.cn     | ✅ 已支持 | ✅ 支持  |
| 移动云盘   | yun.139.com / caiyun.139.com | ✅ 已支持 | ❌ 不支持 |
| 天翼云盘   | cloud.189.cn                 | ✅ 已支持 | ✅ 支持  |
| 小飞机网盘  | feijipan.com                 | ✅ 已支持 | -     |
| 蓝奏云优享版 | ilanzou.com                  | ✅ 已支持 | -     |
| 蓝奏云    | lanzou\*.com                 | ✅ 已支持 | -     |
| 光鸭云盘   | guangyapan.com               | ✅ 已支持 | ✅ 支持  |

> **注意**：\
>…

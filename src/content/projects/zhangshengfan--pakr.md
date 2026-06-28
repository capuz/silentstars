---
repo: "ZhangShengFan/Pakr"
name: "Pakr"
description: "将任意网址打包成 Android APK，无需本地环境"
url: "https://github.com/ZhangShengFan/Pakr"
homepage: "https://apk.091224.xyz"
language: "HTML"
languages: ["HTML", "Kotlin"]
languagePcts: [60, 24]
topics: ["android", "apk", "cloudflare-pages", "cloudflare-workers", "github-actions", "kotlin", "webview"]
stars: 62
forks: 45
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-19T04:06:14Z"
lastCommitAt: "2026-06-28T06:56:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 40
maintainers: ["ZhangShengFan"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c1103e5d105ac97c2d7a458738ed2c133502afb239b638fec30a92ed3766ae6/ZhangShengFan/Pakr"
---

# Pakr — 网页一键打包 APK

**填写网址和应用信息，3~5 分钟自动生成可安装的 Android APK。**  
无需本地环境，全程云端完成编译、签名、打包。

**中文** · [English](README.en.md)

**[🚀 在线体验](https://apk.091224.xyz)　·　[📖 使用文档](https://apk.091224.xyz/Docs)　·　[📖 Docs (EN)](https://apk.091224.xyz/Docs/en/)**

</div>

---

## 功能特性

| 功能 | 说明 |
|------|------|
| 全自动构建 | 触发 GitHub Actions，自动完成编译 → 签名 → 打包 |
| 实时进度 | 显示精确百分比和当前步骤，随时掌握构建进展 |
| 全屏 WebView | 沉浸式全屏 |
| Release 签名 | 自动 Keystore 签名，支持版本升级覆盖安装 |
| 多架构输出 | 同时生成 arm64-v8a + armeabi-v7a 两个 APK，体积约 4MB |
| 支持任意网址 | HTTP / HTTPS 均可，支持 Cookie、文件上传、摄像头权限 |
| 系统下载 | 网页触发的下载通过系统 DownloadManager 保存到本地 |
| 下拉刷新 | 滚动到顶部时下拉刷新页面 |
| 键盘适配 | 软键盘弹出时页面自动上移，表单不被遮挡 |
| 深色模式 | 跟随系统深色/浅色模式，支持手动切换 |

---

## 架构说明

前后端合并部署在 **Cloudflare Pages**，无需单独部署 Worker。

```
浏览器
  │
  ▼
Cloudflare Pages（index.html + _worker.js）
  │  前端页面 + API 接口合二为一
  ▼
GitHub Actions ── 触发构建 / 查询进度 / 下载 APK
```

---

## 项目结构

```
Pakr/
├── .github/workflows/
│   ├── build.yml              # 主构建流程
│   └── gen-keystore.yml       # 生成签名 Keystore
├── Scripts/
│   └── process_icon.py        # 图标处理脚本
├── Docs/
│   └── index.html             # 使用文档站
├── index.html                 # 前端页面
├── _worker.js                 # API 接口（Cloudflare…

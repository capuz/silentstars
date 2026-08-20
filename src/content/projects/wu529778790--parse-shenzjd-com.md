---
repo: "wu529778790/parse.shenzjd.com"
name: "parse.shenzjd.com"
description: "短视频解析服务：支持抖音、快手、微博、哔哩哔哩、小红书、QQ音乐等多平台视频解析与下载。基于 Next.js + React，可一键部署到 Vercel、Cloudflare Workers 或 Docker。"
readmeQualityOk: true
url: "https://github.com/wu529778790/parse.shenzjd.com"
homepage: "https://parse.shenzjd.com"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 35]
topics: ["bilibili", "cloudflare-workers", "docker", "douyin", "kuaishou", "media-downloader", "nextjs", "qqmusic", "react", "short-video-downloader"]
stars: 67
forks: 39
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-08T12:36:56Z"
lastCommitAt: "2026-08-20T04:08:17Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 85
undervaluedScore: 54
maintainers: ["wu529778790"]
openGraphImageUrl: "https://opengraph.githubassets.com/b85e3dc734aa8a0405695f9e06bab80c29aafa3cbf82efac818463722849d2a8/wu529778790/parse.shenzjd.com"
---

# 神族九帝 短视频解析站点

一个短视频解析服务，支持 24+ 平台的视频解析与下载。

在线体验：<https://parse.shenzjd.com>

> 免责声明：本项目仅用于技术学习与搜索聚合演示，不存储、不传播任何受版权保护的内容。请勿用于商业或侵权用途。

## 支持平台

抖音、快手、微博、哔哩哔哩、小红书、皮皮虾、皮皮搞笑、汽水音乐、绿洲、火山、微视、西瓜视频、最右、度小视、梨视频、虎牙、AcFun、美拍、逗拍、全民K歌、六间房、新片场、好看视频、X（Twitter）。

> 注：平台解析能力依赖各站实时接口，部分平台可能受风控/地区影响暂时不可用。

## 特点

- 高转化着陆页：简洁表单、即贴即得，降低用户流失
- 多平台覆盖：抖音/快手/B站/微博/小红书/西瓜/虎牙/X 等 24+ 平台
- 轻维护低成本：静态资源+Serverless/容器均可部署
- SEO 友好：Next.js 架构，天然利于索引与收录
- 可私有化：一键 Docker 部署，独立域名与数据可控

## 一键部署

### Vercel

### Cloudflare（Workers / OpenNext）

点击上方按钮，按向导授权 GitHub 并确认后即可一键部署（Cloudflare 会自动克隆仓库到你的账户并配置 Workers Builds 自动 CI/CD；若向导未自动识别构建命令，请填 `npm run build:cf`）。

本项目通过 [OpenNext](https://opennext.js.org/cloudflare) 适配器部署到 **Cloudflare Workers 免费层**（无需付费计划）。部署内容为静态页面 + 解析 API；视频不再走代理，解析结果直链播放/下载。

**推送即自动部署（Cloudflare Git 集成，无需 GitHub Actions）**：将本仓库关联到 Cloudflare Worker 后，每次 push 到 `main`（或合并 PR），Cloudflare 会自动拉取代码、构建并部署，全程由 Cloudflare 托管，仓库内不写任何 workflow 文件。

**首次配置（一次性，约 5 分钟）**：

1. 打开 Cloudflare Dashboard → **Workers & Pages** → **Create** → **Worker** → 选择 **Import a repository**（首次使用按引导授权 GitHub）。
2. 选择仓库 `wu529778790/parse.shenzjd.com`，进入构建设置，配置两个命令：
   - **Build command（构建命令）**：`npm run build:cf`
   - **Deploy…

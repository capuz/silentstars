---
repo: "FreeNowOrg/PixivNow"
name: "PixivNow"
description: "Provide Pixiv backend proxy & frontend service based on serverless technology"
readmeQualityOk: true
url: "https://github.com/FreeNowOrg/PixivNow"
homepage: "https://pixiv.js.org"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [57, 40]
topics: ["pixiv", "pixiv-api", "proxy", "serverless", "vue3", "vite"]
stars: 282
forks: 64
openIssues: 4
closedIssues: 39
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2021-06-05T15:42:30Z"
lastCommitAt: "2026-09-29T10:04:37Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 42
maintainers: ["renovate[bot]", "dragon-fish", "Hoshino-Yumetsuki"]
openGraphImageUrl: "https://opengraph.githubassets.com/6353731447d0885b52ec1280ec31ae53194b9bec6617e41086a25e1914cfab38/FreeNowOrg/PixivNow"
discussionCount: 2
---

PixivNow - Now, everyone can enjoy Pixiv!

</div>

## Deploy / 部署

### Docker (推荐)

```bash
git clone https://github.com/FreeNowOrg/PixivNow.git
cd PixivNow
docker compose up -d
```

服务将在 `http://localhost:3000` 启动。

代码更新后重新构建：

```bash
git pull && docker compose up -d --build
```

### Vercel

点击上方按钮一键部署，或 Fork 后在 Vercel 导入项目。

如果打算公开你的部署，请小心你的账单。PixivNow 可能会被滥用来大量下载图片，导致流量激增和高额费用。

### 手动构建

需要 [Node.js](https://nodejs.org/) LTS 和 [pnpm](https://pnpm.io/)。

```bash
pnpm install
pnpm build
node .output/server/index.mjs
```

## Environment Variables / 环境变量

| 变量                              | 说明                       | 默认值 |
| --------------------------------- | -------------------------- | ------ |
| `NUXT_PUBLIC_PXIMG_BASEURL_I`     | i.pximg.net 图片代理地址   | `/-/`  |
| `NUXT_PUBLIC_PXIMG_BASEURL_S`     | s.pximg.net 图片代理地址   | `/~/`  |
| `NUXT_PUBLIC_GOOGLE_ANALYTICS_ID` | Google Analytics ID        | —      |
| `NUXT_UA_BLACKLIST`               | 屏蔽的 UA 模式 (JSON 数组) | —      |

Docker 部署时可在 `docker-compose.yml` 中添加 `environment` 配置。

## API

> AJAX API 的请求格式与示例：[pixiv-web-api.md](https://github.com/FreeNowOrg/PixivNow/blob/HEAD/docs/pixiv-web-api.md)

### 鉴权

通过以下方式传递用户 token…

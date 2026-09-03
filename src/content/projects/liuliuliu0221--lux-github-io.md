---
repo: "liuliuliu0221/Lux.github.io"
name: "Lux.github.io"
description: "PES Explorer — AI 产品经理个人作品集"
readmeQualityOk: true
url: "https://github.com/liuliuliu0221/Lux.github.io"
homepage: "https://liuliuliu0221.github.io/Lux.github.io/"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [57, 30]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-27T16:21:51Z"
lastCommitAt: "2026-09-03T07:22:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 26
maintainers: ["liuliuliu0221"]
openGraphImageUrl: "https://opengraph.githubassets.com/36be1de53250fc2323f66b63b3350ab8f0b753fdf492de505274938025cd7553/liuliuliu0221/Lux.github.io"
---

# Lux Portfolio

刘芯羽（Lux）的个人作品集。页面采用深色电影感与暖奶油色视觉系统，展示个人介绍、AI 产品能力、代表项目、文章、学术论文与联系方式。

## 本地运行

环境要求：Node.js >= 22.13。

```bash
npm ci
npm run dev
```

默认地址为 `http://localhost:3000/`；如果端口已被占用，开发服务会自动使用下一个可用端口。

## 质量检查

```bash
npm run typecheck
npm run lint
npm run build
node --test tests/rendered-html.test.mjs
```

## 环境变量

- `NEXT_PUBLIC_SITE_URL`：正式站点地址。
- `NEXT_PUBLIC_SITE_ENV=preview`：保持全站 `noindex`。
- `NEXT_PUBLIC_SITE_ENV=production`：允许搜索引擎索引，仅在内容和正式域名确认后使用。

## 内容状态

姓名、教育经历、项目、文章、论文与联系入口均来自当前项目中的已确认资料。下载简历仍为占位文件，正式公开前需要替换。

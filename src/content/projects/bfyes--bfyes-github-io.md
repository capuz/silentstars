---
repo: "bfyes/bfyes.github.io"
name: "bfyes.github.io"
description: "bfyes"
readmeQualityOk: true
url: "https://github.com/bfyes/bfyes.github.io"
homepage: "https://bfyes.github.io"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-16T02:07:57Z"
lastCommitAt: "2026-08-26T04:17:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 53
maintainers: ["bfyes"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f4c93d9fa2a55c2d7748a1fed46a09927ee413f515096dc775df148bc3e954c/bfyes/bfyes.github.io"
discussionCount: 6
---

# [bfyes.github.io](https://bfyes.github.io)

bfyes 的个人文档站，使用 Zensical/MkDocs 构建，主题层基于 GitHub 风格深度定制。

## 快速开始

```bash
git clone https://github.com/<你的用户名>/bfyes.github.io.git
cd bfyes
uv sync    # 安装依赖
make       # 本地预览 http://127.0.0.1:8000
make deploy # 构建并部署到 GitHub Pages
```

Fork 后需修改 `zensical.toml`（site_name/site_url/repo_url/nav）和 `docs/index.md`（首页内容）。

> 部分功能依赖 macOS（`sips` 图片预览、`gs` PDF 压缩）。

## 主要特性

- 明暗主题适配，Giscus 评论区主题同步
- GitHub 风格正文排版（[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)）
- highlight.js 运行时代码高亮，明暗主题切换
- GitHub 贡献图静态烘焙 + 前端渲染
- PDF 内联阅读器（进度条 + iOS/iPadOS PDF.js 降级）
- 图片低清预览渐进加载
- 主页终端打字机动画 + 交互命令
- 页面更新时间、浏览量、Stars 展示

## 项目结构

```text
docs/              # 站点内容
  theme/css/       # variables → main → theme → home
  theme/js/        # site(核心+主题) → mathjax → highlight → home → pdf-viewer
  theme/data/      # 贡献图 JSON、页面 metadata
overrides/         # main.html + partials（comments/page-info/logo）
scripts/           # 构建期脚本（metadata/contributions/previews/compress/patch）
zensical.toml      # 站点配置
```

## 构建链路

```text
metadata → contributions → compress_pdfs → compress_images → zensical build → previews → patch_image_src → push…

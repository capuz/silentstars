---
repo: "ckckh2023/Xiao-Blog"
name: "Xiao-Blog"
description: "A personal tech blog site deployed on Cloudflare Pages. It includes modules such as a documentation knowledge base, project showcase, tool sharing, a guestbook, and a friends page."
originalDescription: "个人技术博客站点，部署于 Cloudflare Pages。内置文档知识库、项目展示、工具分享、留言板与好友页等模块。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ckckh2023/Xiao-Blog"
homepage: "https://xiao-blog.top/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [54, 26]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-12T14:34:13Z"
lastCommitAt: "2026-10-25T08:39:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 55
maintainers: ["ckckh2023"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1332125412/cd87a576-98c3-480c-b3d5-32ae28d9a122"
fundingLinks: ["CUSTOM:https://ifdian.net/a/ckckh2023"]
discussionCount: 1
---

# Xiao-Blog

Chinese | [English](https://github.com/ckckh2023/Xiao-Blog/blob/HEAD/README.en.md)

A personal tech blog site deployed on Cloudflare Pages, **this project has zero build and zero dependencies: the source code is the artifact**.

> Live site: <https://xiao-blog.top>

## Directory Structure

```
├── index.html               # Home page
├── wrangler.toml            # Cloudflare Pages configuration
├── schema.sql               # SQL table creation for the guestbook
├── assets/
│   ├── css/                 # All project CSS
│   ├── js/                  # All project JS
│   ├── icons/               # Site images
│   └── vendor/              # Third-party JS libraries
├── docs/                    # Documentation pages
├── repo/                    # Project pages
├── share/                   # Sharing pages
├── guestbook/               # Guestbook page
├── friend/                  # Friends page
├── about/                   # About page
├── functions/api/
│   ├── article.js           # Article content API
│   ├── docs-count.js        # Documentation read counter
│   ├── guestbook.js         # Guestbook API
│   └── github/[[path]].js   # GitHub API proxy
├──…

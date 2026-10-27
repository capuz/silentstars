---
repo: "Finderlzy/writing"
name: "writing"
description: "My personal writing website: thoughts, drafts, blog posts, and works. Written in Obsidian, generated with a Python script I wrote myself, and published to GitHub Pages."
originalDescription: "我的个人文章网站：思考、初稿、博客和作品。在 Obsidian 里写，用自写的 Python 脚本生成，发布到 GitHub Pages。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Finderlzy/writing"
homepage: "https://finderlzy.github.io/writing/"
language: "Python"
languages: ["Python"]
languagePcts: [66]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-08-19T04:58:44Z"
lastCommitAt: "2026-10-27T12:39:51Z"
lastReleaseAt: "2026-10-20T06:14:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["Finderlzy"]
openGraphImageUrl: "https://opengraph.githubassets.com/1208ca417067827aa6aef6d3e11699277a3e2f3f74f6b0631827390e8e8aa952/Finderlzy/writing"
discussionCount: 7
---

This is where I keep my thoughts, drafts, blog posts, and literary works. Everything is written in Obsidian, the site is generated with the Python scripts included in the repository, and pushing to GitHub automatically publishes it to GitHub Pages.

Current version: **5.3.1**. For the version history, see [开发文档/DEVELOPMENT.md](https://github.com/Finderlzy/writing/blob/HEAD/开发文档/DEVELOPMENT.md).

## Daily writing workflow

```text
Jot down ideas in Obsidian's docs/00收集/
        ↓ Write them in my own words as thoughts or drafts, then consolidate into blog posts or polish into works, each newly created in its folder; the originals stay where they are
        ↓ For which folder to use, see 01系统/分类标准.md (Inbox Filer plugin, or Claude does it for me)
Push to GitHub's main branch (Obsidian Git auto-backup also pushes)
        ↓ GitHub Actions: run tests → download source fonts → convert and build → check pages and links
Publish to GitHub Pages
```

## Site pages

| Page | Content |
| --- | --- |
| Home | The speech bubble holds the first paragraph of the body of `docs/index.md`, followed by the rest of the text; two cards show the two lines “Idea → Thought → Blog” and “Inspiration →…

---
repo: "lm-sys/lm-sys.github.io"
name: "lm-sys.github.io"
description: "The source of LMSYS website and blogs"
readmeQualityOk: true
url: "https://github.com/lm-sys/lm-sys.github.io"
homepage: "https://lmsys.org/"
language: "HTML"
languages: ["HTML"]
languagePcts: [99]
stars: 101
forks: 116
openIssues: 1
closedIssues: 3
watchers: 6
contributors: 122
recentReleases: 0
createdAt: "2023-03-24T05:46:15Z"
lastCommitAt: "2026-11-02T17:56:52Z"
lastReleaseAt: "2025-11-06T09:23:03Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 93
undervaluedScore: 56
maintainers: ["unseenmars", "Ccyest", "Oasis-Git"]
openGraphImageUrl: "https://opengraph.githubassets.com/a22f9758493a44bd10b184e7ebcbed8cc5b2c01beefdfb439669985dfc277e94/lm-sys/lm-sys.github.io"
---

# lmsys.org

This repo hosts all the content within https://lmsys.org. 

## Develop and Deploy
See the [package.json](https://github.com/lm-sys/lm-sys.github.io/blob/HEAD/package.json)

1. Install `npm` and `node.js`

2. Develop:
```bash
npm i
npm run build
npm run dev
```

3. Deploy:

```bash
npm i
npm run build
npm run export
```

## Adding Blog Posts
Add a markdown file to `/blog` for it to be added in the blog feed. Make sure your frontmatter contains the entries `title`, `author`, `date`, and `previewImg`.

## Editing Content
Some content is not sourced through Javascript, such as the about page, impressum, FAQ, and team list. For those, you can find their respective markdown and json files in `/content`

# Acknowledgement

The website is modified from the [laion.ai](https://github.com/LAION-AI/laion.ai.git), fully respecting [their license](https://github.com/LAION-AI/laion.ai/blob/main/LICENSE).

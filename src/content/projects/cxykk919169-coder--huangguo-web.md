---
repo: "cxykk919169-coder/huangguo-web"
name: "huangguo-web"
description: "Permission testing"
originalDescription: "权限测试"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cxykk919169-coder/huangguo-web"
language: "JavaScript"
languages: ["JavaScript", "HTML", "Python"]
languagePcts: [40, 30, 25]
stars: 6
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-05T05:34:46Z"
lastCommitAt: "2026-11-04T08:04:30Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 70
undervaluedScore: 51
maintainers: ["es-bot", "cxykk919169-coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/2608212990de98da5746e29c284cbcd38794751ce38df21bfdc95bdcccb594f7/cxykk919169-coder/huangguo-web"
---

# Huangguo Video · Web Client

> **Personal learning and technical research project · Non-commercial use**
>
> This project **contains no audiovisual content** and does not store, upload, transcode, or distribute any video files. All data displayed on the pages comes from third-party public web pages and is used only for **indexing and redirection**.
> All content copyright belongs to the original authors and rights holders.
>
> ⚠️ **Any commercial use is strictly prohibited.** See [DISCLAIMER.md](https://github.com/cxykk919169-coder/huangguo-web/blob/HEAD/DISCLAIMER.md) for details.

---

## What is this

A hands-on project for learning web technologies, covering web page parsing, Serverless, PWA, automated deployment, and related techniques.

- `index.html` — front-end interface (single file, works on mobile and desktop)
- `worker.js` — back-end proxy (deployed to Cloudflare Workers, **free**)
- `site.json` — site rules (upstream changes or domain changes only require editing this file)

Architecture:

```
User browser  ->  Cloudflare Worker (proxy)  ->  third-party public web pages
```

---

## Tech stack (learning value of this project)

| Technology | Description |
|---|---|…

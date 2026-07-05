---
repo: "Mareixcode/Cloudflare-ioDrive"
name: "Cloudflare-ioDrive"
description: "Lightweight file upload and sharing platform powered by Cloudflare Workers, R2 and Hono."
originalDescription: "☁️ 基于 Cloudflare Workers + R2 + Hono 的轻量级文件上传与分享系统。☁️ Lightweight file upload and sharing platform powered by Cloudflare Workers, R2 and Hono."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Mareixcode/Cloudflare-ioDrive"
homepage: "https://demo.iodevo.com"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [51, 47]
stars: 26
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-06-26T14:37:26Z"
lastCommitAt: "2026-07-05T06:33:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 32
maintainers: ["Mareixcode"]
openGraphImageUrl: "https://opengraph.githubassets.com/913b7befe078f907d1eef48f2a576b7df121b363e10fe43d3dedbdb66f803227/Mareixcode/Cloudflare-ioDrive"
---

# ioDrive

</p>

<h3 align="center">
  Lightweight Cloudflare file sharing system
</h3>

</div>

  A high-performance file management and sharing platform built on Cloudflare Workers + Hono + S3 compatible storage
</p>

</p>

</p>

**中文** | [English](https://github.com/Mareixcode/Cloudflare-ioDrive/blob/HEAD/docs/README_EN.md) | [日本語](https://github.com/Mareixcode/Cloudflare-ioDrive/blob/HEAD/docs/README_JA.md)

</p>

---

## 👋 Introduction

I have always struggled to find a suitable cloud storage service that allows multiple users to upload and download files without logging in. Most cloud storage services require login to download, have strict speed limits, and I have not found a good file collection system, which led to the birth of this project.

ioDrive is a lightweight file management system that runs entirely on the Cloudflare edge network. You only need a Cloudflare account to deploy your own file sharing platform in minutes—no servers, no databases, no maintenance required.

### Why choose ioDrive?

- **Zero server cost**: Runs entirely within the free tier of Cloudflare Workers (100,000 requests per day)
- **Flexible storage**: Supports any S3 compatible storage such as…

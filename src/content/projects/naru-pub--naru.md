---
repo: "naru-pub/naru"
name: "naru"
description: "Personal homepage hosting platform"
originalDescription: "개인 홈페이지 호스팅 플랫폼"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/naru-pub/naru"
homepage: "https://naru.pub"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 21
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2024-06-07T12:25:52Z"
lastCommitAt: "2026-10-25T08:40:55Z"
lastReleaseAt: "2026-10-17T16:33:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 70
maintainers: ["limeburst"]
openGraphImageUrl: "https://opengraph.githubassets.com/14727f77058b5eeab50dd79f2152adbffcc8bb4debb3398d887eb88ed4e50e77/naru-pub/naru"
---

# Naru (나루)

> Launch your space on Naru.

Naru is a personal website hosting platform that lets anyone create and manage their own personal homepage.

## 🚀 Key Features

- **Personal website hosting**: Personal websites served through per-user subdomains
- **File management**: Upload, edit, and delete files through a web-based file browser
- **Real-time editing**: Real-time code editor based on CodeMirror
- **Multiple file format support**: HTML, CSS, JavaScript, JSON, Markdown, and more
- **User authentication**: Secure user authentication system via Lucia Auth
- **Statistics dashboard**: Monitoring of service usage and metrics
- **Custom domains**: Paying users receive a domain via Cloudflare for SaaS, served from an edge Worker
- **Payments (결제)**: A payment model based on Toss Payments auto-billing that sustains operations

## 🏗️ Architecture

Naru consists of three parts: the control plane and site database running on a Mac mini in Seoul (kr-seongsu-m4), and Cloudflare's edge Worker. Requests from Korea to Cloudflare pass through Los Angeles, so the control plane (`naru.pub`) and the Data SDK (`sdk.naru.pub`) bypass Cloudflare and connect directly to Caddy on the Mac mini.…

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
languagePcts: [93]
stars: 21
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2024-06-07T12:25:52Z"
lastCommitAt: "2026-10-18T08:17:06Z"
lastReleaseAt: "2026-10-17T16:33:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 65
maintainers: ["limeburst"]
openGraphImageUrl: "https://opengraph.githubassets.com/104a030072befcaeea08257c1330d3348f2e4a379fcdbedca23808f970367eb8/naru-pub/naru"
---

# Naru (나루)

> Float your space on Naru.

Naru is a personal website hosting platform that lets anyone create and manage their own personal homepage.

## 🚀 Key Features

- **Personal website hosting**: Personal websites served through per-user subdomains
- **File management**: Upload, edit, and delete files through a web-based file browser
- **Real-time editing**: A real-time code editor based on CodeMirror
- **Support for various file formats**: HTML, CSS, JavaScript, JSON, Markdown, and more
- **User authentication**: A secure user authentication system via Lucia Auth
- **Statistics dashboard**: Monitoring of service usage and metrics
- **Custom domains**: Paid users receive a domain through Cloudflare for SaaS, and it is served from an edge Worker
- **Payments**: A payment model using Toss Payments automatic billing that sustains operations

## 🏗️ Architecture

Naru consists of three parts: the control plane and site database running on a Mac mini in Seoul (kr-seongsu-m4), and Cloudflare's edge Workers. Requests from Korea to Cloudflare pass through Los Angeles, so the control plane (`naru.pub`) and the Data SDK (`sdk.naru.pub`) connect directly to the Mac mini's Caddy…

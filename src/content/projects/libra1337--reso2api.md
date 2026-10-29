---
repo: "Libra1337/Reso2api"
name: "Reso2api"
description: "Multi-channel account aggregation OpenAI-compatible gateway (WorkBuddy + TraeWork + Qoder), web console + Docker deployment. Derived from rockswang/wild-work"
originalDescription: "多渠道账号聚合 OpenAI 兼容网关（WorkBuddy + TraeWork + Qoder），Web 控制台 + Docker 部署。衍生自 rockswang/wild-work"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Libra1337/Reso2api"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [75, 20]
stars: 5
forks: 7
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-10T18:45:00Z"
lastCommitAt: "2026-10-29T14:07:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 59
undervaluedScore: 55
maintainers: ["Libra1337"]
openGraphImageUrl: "https://opengraph.githubassets.com/baad029de33ebd886f71fe4ec6dbe7231fea906c35fb2cfeb86da35f031adada/Libra1337/Reso2api"
---

# Reso

> Aggregate multiple accounts from WorkBuddy (CodeBuddy), TraeWork, and Qoder into a single **OpenAI-compatible API**, with a built-in web management console and one-click Docker deployment.

## Project Introduction

Reso (wild-work2api) is a self-hosted multi-channel account aggregation gateway:

- **Three-channel aggregation**: WorkBuddy (Tencent CodeBuddy) + TraeWork (ByteDance) + Qoder (Alibaba). Model IDs are routed with channel prefixes (`workbuddy/<model>`, `traework/<model>`, `qoder/<model>`)
- **Web console**: Add accounts in the browser (automatic import via OAuth authorization), check in, refresh credits, disable, delete, and view rates and logs. Everything is self-service, with no command line needed
- **Account pool governance**: Sticky routing preferentially reuses the same account to take advantage of session caching, scheduled daily check-ins to claim quota, token keep-alive, and a cooldown state machine
- **OpenAI compatible**: `/v1/chat/completions` and `/v1/models`, with streaming and non-streaming support. Existing SDKs connect with zero changes. Also includes a **`/v1/responses` (Responses API) compatibility layer**, so clients that use the Responses…

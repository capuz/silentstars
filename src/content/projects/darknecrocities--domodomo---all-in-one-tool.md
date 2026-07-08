---
repo: "darknecrocities/DomoDomo---All-in-one-Tool"
name: "DomoDomo---All-in-one-Tool"
description: "DomoDomo is a 100% client-side, offline-first web utility application. Built as a high-performance, private, zero-server architecture toolbox, all operations run completely inside your browser sandbox. Your data, images, PDFs, and files never leave your computer—no servers, no APIs, and no external clouds are ever touched."
readmeQualityOk: true
url: "https://github.com/darknecrocities/DomoDomo---All-in-one-Tool"
homepage: "https://domodomo.site"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 50
forks: 8
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 6
createdAt: "2026-06-19T10:36:19Z"
lastCommitAt: "2026-07-08T05:41:27Z"
lastReleaseAt: "2026-07-05T16:23:40Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 41
maintainers: ["darknecrocities", "kuraigu"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9ea30339754b0e64e17dcfd3bc3f9902f1bf7dd9d139f527881cdf5a8c85aba/darknecrocities/DomoDomo---All-in-one-Tool"
discussionCount: 2
---

# 🐼 DomoDomo — All-in-One Local Toolbox

DomoDomo is a 100% client-side, offline-first web utility application. Built as a high-performance, private, zero-server architecture toolbox, all operations run completely inside your browser sandbox. Your data, images, PDFs, and files never leave your computer—no servers, no APIs, and no external clouds are ever touched.

---
## 🛠️ Codebase Architecture & Design Philosophy

DomoDomo operates on a **zero-leak mandate**. Standard SaaS utilities require uploading sensitive business contracts or personal photos to remote cloud servers. DomoDomo compiles and processes all assets locally on your CPU/GPU using modern browser sandboxing.

### Component-Based Architecture
- **`/src/engine`**: Contains the core registry (`registry.ts`) registering all 100 functional tools.
- **`/src/pages`**: Handles routing, the primary tool frame containers, and the main visual dashboard.
- **`/src/tools`**: Categorized directory holding React/TypeScript components for all utility modules.
- **`/src/utils`**: Core service files containing brand tokens, helpers, and singleton API layers.
- **`/backend`**: FastAPI Python server providing local persistence, vector…

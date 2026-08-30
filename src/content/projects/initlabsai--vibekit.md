---
repo: "initlabsai/vibekit"
name: "vibekit"
description: "The agentic stack for Algorand builders."
readmeQualityOk: true
url: "https://github.com/initlabsai/vibekit"
homepage: "https://getvibekit.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["agent-skills", "algorand", "mcp"]
stars: 27
forks: 9
openIssues: 6
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-10T19:14:05Z"
lastCommitAt: "2026-08-30T00:42:07Z"
lastReleaseAt: "2026-02-26T05:01:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 46
maintainers: ["gabrielkuettel"]
openGraphImageUrl: "https://opengraph.githubassets.com/29390ae0f4533c022ab10f9fd31bf16b68605e0d9039bd3087a45d0ef7526ed4/initlabsai/vibekit"
---

```
█ █ █ █▄▄ █▀▀ █▄▀ █ ▀█▀
▀▄▀ █ █▄█ ██▄ █ █ █  █
```

VibeKit gives your AI agent the skills and tools to build on Algorand, and
gives you a terminal Explorer to watch it work.

Works with **Claude Code**, **Codex**, **Cursor**, **Copilot**, **Grok**,
**opencode**, and **pi**.

Alpha release — [feedback welcome](https://github.com/initlabsai/vibekit/issues).

## Requirements

| For | You need |
| --- | --- |
| VibeKit CLI | Nothing — a self-contained binary |
| VibeKit Explorer | Nothing — a self-contained binary |
| Keystore | Node.js, and your OS keychain |
| Starter templates | Node.js 24+ |
| LocalNet | Docker Compose v2 |

The keystore is what signs, so payments, assets, and deploys go through it. Its
daemon runs under Node and is installed once with `npm`. On Linux it needs a
Secret Service keychain; on Windows, the [Visual C++
Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)
(`winget install Microsoft.VCRedist.2015+.x64`).

The starter templates compile and test with `puya-ts`, `tsx`, and `vitest`. On
Linux, LocalNet also needs you in the `docker` group (`sudo usermod -aG docker
$USER`, then log out and back in).

`vibekit doctor`…

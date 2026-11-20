---
repo: "lainisourgod/ml-supply-chain-workshop"
name: "ml-supply-chain-workshop"
description: "funny lab, absolute ai security maxxxing"
originalDescription: "funny lab, absolute ai security maxxxing"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/lainisourgod/ml-supply-chain-workshop"
language: "Python"
languages: ["Python", "Standard ML"]
languagePcts: [67, 33]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-18T18:17:20Z"
lastCommitAt: "2026-11-20T11:58:04Z"
status: "thriving"
tags: []
healthScore: 55
undervaluedScore: 12
maintainers: ["lainisourgod"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1947f3d2c9a848fdabfa23544acd539784430134d03109015e0c0180cb3c34b/lainisourgod/ml-supply-chain-workshop"
---

# 🥒 Poisoned Cucumber · ITMO

You downloaded a ready-made model to save an evening. What gets access to your environment when you load it?

Open a terminal in the `itmo` folder. You will need [uv](https://docs.astral.sh/uv/) and a browser. The commands are written for Bash or Zsh. On Windows, you can open a WSL terminal. For the pinned PyTorch on macOS, you need Apple Silicon and macOS 14 or later.

```bash
uv sync --locked
source .env
```

`uv sync` downloads the versions from `uv.lock`. Run it before the pair. `source .env` activates the environment and disables ModelAudit telemetry in this terminal. In a new terminal, run only `source .env`. If the installation is still running, you can open Pickle VM and review the saved reports.

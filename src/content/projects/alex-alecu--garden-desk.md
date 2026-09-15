---
repo: "alex-alecu/garden-desk"
name: "garden-desk"
description: "Private AI on premise"
readmeQualityOk: true
url: "https://github.com/alex-alecu/garden-desk"
homepage: "https://gardendesk.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["ai-agents", "cowork", "llm", "local-llm", "private"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-29T11:50:59Z"
lastCommitAt: "2026-09-15T08:55:46Z"
lastReleaseAt: "2026-09-07T04:43:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 53
maintainers: ["alex-alecu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/659d190603ccff85c18a267e646079ebd2d972bb78a38a9989a39c10a2d47d88/alex-alecu/garden-desk"
---

# Garden Desk

**Private work should stay private.**

Garden Desk is a local-first desktop agent for working with private files and folders. It is built for people who want useful AI assistance without uploading their work, managing model infrastructure, or becoming an AI developer.

## Run locally with one command

Clone the repository:

```sh
git clone git@github.com:alex-alecu/garden-desk.git
```

Open a terminal in the `garden-desk` folder. Run the setup command for your platform.

**macOS (Apple silicon):**

```sh
bash setup.sh
```

**Windows x64 Pro or Enterprise with Hyper-V enabled:**

Run this in standard PowerShell:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\setup.ps1
```

Setup uses the Node.js version in [.node-version](https://github.com/alex-alecu/garden-desk/blob/HEAD/.node-version), pnpm in [package.json](https://github.com/alex-alecu/garden-desk/blob/HEAD/package.json), and Rust in [rust-toolchain.toml](https://github.com/alex-alecu/garden-desk/blob/HEAD/rust-toolchain.toml). It also checks the [Tauri platform tools](https://v2.tauri.app/start/prerequisites/) and Docker. It lists missing tools and asks before it installs or updates them.…

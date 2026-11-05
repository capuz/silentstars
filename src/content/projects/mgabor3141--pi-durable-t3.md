---
repo: "mgabor3141/pi-durable-t3"
name: "pi-durable-t3"
description: "Use T3 Code, including mobile apps, as a frontend for your pi-durable setup"
readmeQualityOk: true
url: "https://github.com/mgabor3141/pi-durable-t3"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agents", "coding-agent", "pi", "t3code"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-13T21:37:02Z"
lastCommitAt: "2026-11-05T14:05:23Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["mgabor3141"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b5d5a3b2e892c0cae9bda3851a60afef98373d6462729ecddb9e5e28e1cec6a/mgabor3141/pi-durable-t3"
---

# pi-durable-t3

Use [T3 Code](https://github.com/pingdotgg/t3code) as the frontend for a
[pi-durable](https://github.com/earendil-works/pi) agent. Your agent shows up in T3's desktop or web app as
one more computer, with its projects, threads and models. Experimental. Unofficial; not affiliated with T3
Tools or Earendil.

https://github.com/user-attachments/assets/250218eb-9a15-4f99-aa00-cf3c1e75d38e

Turns are durable: kill the host mid-turn, start it again, and the turn finishes.

## Install

Installing from git builds the package on your machine (it fetches T3's web app, then bundles), so pnpm 10 needs
it allowlisted first, in your `pnpm-workspace.yaml` (or `package.json`'s `pnpm` field):

```yaml
onlyBuiltDependencies:
  - "@mgabor3141/pi-durable-t3"
```

```sh
pnpm add github:mgabor3141/pi-durable-t3 @earendil-works/chord @earendil-works/pi-ai @earendil-works/pi-durable
```

Append `#v<version>` to pin a release tag. npm builds git dependencies by default; npm 12 also needs
`--allow-git=root` (supported since npm 11.10).

The build on install needs the package's own devDependencies, so `pnpm install --prod` fails on a fresh git install
(`tsdown: command not found`). For a…

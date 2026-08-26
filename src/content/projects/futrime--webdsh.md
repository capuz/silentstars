---
repo: "futrime/webdsh"
name: "webdsh"
description: "Browser-only build of DeepSeek Harness"
readmeQualityOk: true
url: "https://github.com/futrime/webdsh"
homepage: "https://dsh.zjzh.me/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["deepseek", "deepseek-harness", "dsh", "dsh-plugin"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-16T09:25:23Z"
lastCommitAt: "2026-08-26T04:09:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["futrime", "M1saka10010"]
openGraphImageUrl: "https://opengraph.githubassets.com/494300b90624fc5b826317ce9a6c0a7d27add4761109dc616065007908f04ddc/futrime/webdsh"
---

# webdsh

> DeepSeek Harness in a browser tab — the real agent, real Node, no server to run.

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) is an
agent harness where everything is a plugin. `dsh web` runs a Node host and serves
a browser client to it. **webdsh is that, as static files** — the host runs inside
the page, and the agent's commands run in [WebContainers](https://webcontainers.io):
Node itself, in the tab.

- ⚡ **Nothing to run.** No server, no install, no local Node — the harness boots in the page.
- 🖥️ **Real Node, real Python.** `npm install` and `pip install` both work, and the terminal and the agent share one container.
- 💾 **Or a whole PC.** Settings → Machine swaps the container for [v86](https://github.com/copy/v86) and offers **128 machines** — the whole of v86's catalog, from a 512-byte bootsector game to Windows 2000, **113 of them booting with nothing to set up** — emulated x86, on its own screen, with the tool set that machine actually has.
- 🌐 **The PC is online.** A WISP relay by default, so the guest gets real TCP — `https://`, package managers, `ssh` — and without one the page itself is the router: it answers the guest's…

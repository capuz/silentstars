---
repo: "brynne8/pi-web-bun"
name: "pi-web-bun"
description: "Local browser UI for the pi coding agent, running on Bun with no Node.js toolchain"
readmeQualityOk: true
url: "https://github.com/brynne8/pi-web-bun"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [52, 45]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 172
recentReleases: 0
createdAt: "2026-10-03T09:14:30Z"
lastCommitAt: "2026-11-05T11:24:41Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["brynne8", "agegr", "Zhangs-11"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2839ddf3af36359ffc7a59e26cdaa9ba6e5bf939ec6896bf81e80997a61a3c1/brynne8/pi-web-bun"
---

# Pi Web (Bun)

[中文文档](https://github.com/brynne8/pi-web-bun/blob/HEAD/docs/README.zh-CN.md) | [日本語](https://github.com/brynne8/pi-web-bun/blob/HEAD/docs/README.ja.md) | [Русский](https://github.com/brynne8/pi-web-bun/blob/HEAD/docs/README.ru.md)

> **This is a Bun-focused fork of [agegr/pi-web](https://github.com/agegr/pi-web).** It runs on [Bun](https://bun.sh) with no Node.js, `npm` or `npx` installed, and it has its own opinion about how a coding agent should read in a browser: a long command hands off instead of holding the turn open, a `read` call opens the exact slice it returned, the composer never changes what is under your finger, and a relay dropping its HTTP/2 stream no longer costs you the run. [Differences from upstream](#differences-from-upstream) says what still differs; [Bun setup](#bun-setup) gets it running. Everything else below is upstream's documentation.

Local browser UI for the [pi coding agent](https://github.com/earendil-works/pi). Pi Web uses the same local configuration and session files as pi, so you can browse and resume conversations, run agent turns, configure models and resources, and inspect project files from a browser.

**[Try the interactive…

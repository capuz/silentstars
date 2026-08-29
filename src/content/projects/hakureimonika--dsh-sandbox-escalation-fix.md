---
repo: "HakureiMonika/dsh-sandbox-escalation-fix"
name: "dsh-sandbox-escalation-fix"
description: "Session-aware sandbox escalation compatibility plugin for DeepSeek Harness/DSH第三方模型会话沙箱升级兼容插件"
readmeQualityOk: true
url: "https://github.com/HakureiMonika/dsh-sandbox-escalation-fix"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [71, 24]
topics: ["deepseek-harness", "deepseek-harness-plugin", "deepseek-harness-plugins", "sandbox-escalation", "dsh-plugin", "dsh-plugins", "dsh"]
stars: 35
forks: 5
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-08-16T09:22:58Z"
lastCommitAt: "2026-08-29T17:29:10Z"
lastReleaseAt: "2026-08-28T17:53:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 47
maintainers: ["HakureiMonika", "tappat225"]
openGraphImageUrl: "https://opengraph.githubassets.com/6373ebac7046b12653a7cf0307565bd7dc989092bb3d5ea33275b8f90f48b595/HakureiMonika/dsh-sandbox-escalation-fix"
---

# dsh-sandbox-escalation-fix (DSH 0.1.2-alpha.1 and Desktop 2.0.3 supported)

English | [简体中文](https://github.com/HakureiMonika/dsh-sandbox-escalation-fix/blob/HEAD/README.zh.md)

> [!IMPORTANT]
> This is an independent community plugin. It is not published, maintained, or endorsed by DeepSeek, and it does not modify DeepSeek Harness core packages.

> [!CAUTION]
> DSH `0.1.0-rc8`, `0.1.1-rc.1`, `0.1.1-rc.2`, and `0.1.2-alpha.1` partially improve this issue, but still use registry-global escalation schemas and execution-time validation. **Users should first observe the built-in behavior and install this plugin only after reproducing the same-mode escalation, blank justification, or retry-loop failures described below.**

> *If it's useful, please stars let more people can see it.*

**dsh-sandbox-escalation-fix** is a zero-configuration compatibility plugin that directly resolves the issue of third-party models like GPT failing to call tools such as `bash`, `pwsh`, `write`, and `edit` under DSH All Access, resulting in repeated retries due to incorrect sandbox escalation parameter prompts.

If you've encountered the following errors, this plugin is designed for them:

```text
Error:…

---
repo: "wearetheone777/dumate2api"
name: "dumate2api"
description: "DuMate (Baidu's 'buddy' assistant) / Qianwen Office / TRAE Work / Qoder → OpenAI·Anthropic·Google three-protocol gateway for Codex CLI, Claude Code, and cc-switch; launches the DuMate backend without a GUI and includes a built-in web management console"
originalDescription: "DuMate（百度搭子）/ 千问办公 / TRAE Work / Qoder → OpenAI·Anthropic·Google 三协议网关，供 Codex CLI、Claude Code、cc-switch 使用；无 GUI 拉起搭子后端，自带网页管理端"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wearetheone777/dumate2api"
homepage: "https://github.com/wearetheone777/dumate2api#readme"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [77]
topics: ["anthropic-api", "api-proxy", "baidu", "claude-code", "codex-cli", "dumate", "google-gemini", "llm-gateway", "nodejs", "openai-api"]
stars: 47
forks: 19
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-23T17:16:30Z"
lastCommitAt: "2026-11-23T12:23:37Z"
lastReleaseAt: "2026-11-23T11:53:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 35
maintainers: ["wearetheone777"]
openGraphImageUrl: "https://opengraph.githubassets.com/b497cdb71eeb21b174430341231d79c573aea79c75b73c0b26b8c1ca72656b05/wearetheone777/dumate2api"
---

# dumate2api

> For architecture and detailed code walkthrough, see [ARCHITECTURE.md](https://github.com/wearetheone777/dumate2api/blob/HEAD/ARCHITECTURE.md).

**Five upstreams → three-protocol gateway.** Unifies DuMate (Baidu 搭子), Qianwen Office, TRAE Work, Qoder, and WorkBuddy into **OpenAI / Anthropic / Google-compatible APIs** for clients such as Codex CLI, Claude Code, and cc-switch. Includes a web console for managing accounts, check-ins, points, and request telemetry. For the full usage guide, see **[User Manual](https://github.com/wearetheone777/dumate2api/blob/HEAD/docs/USER_MANUAL.md)**.

```
Codex CLI ──── OpenAI / Responses ─┐
Claude Code ──── Anthropic ────────┼──→ dumate2api ──┬──→ DuMate (Baidu 搭子) (web credentials / local :8980)
any client ──── Google ────────────┘                 ├──→ Qianwen Office (direct in-process)
                                                    ├──→ TRAE Work (direct in-process)
                                                    ├──→ Qoder (direct in-process)
                                                    └──→ WorkBuddy (direct in-process, dual region cn / global)
```

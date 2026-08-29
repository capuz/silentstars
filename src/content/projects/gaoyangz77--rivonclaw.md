---
repo: "gaoyangz77/rivonclaw"
name: "rivonclaw"
description: "RivonClaw is an easy-mode runtime and UI layer built on top of OpenClaw, designed to turn long-lived AI agents into personal digital butlers. Instead of configuring skills or workflows, users interact through natural-language rules and feedback, allowing a single agent to evolve, adapt, and better understand its owner over time."
readmeQualityOk: true
url: "https://github.com/gaoyangz77/rivonclaw"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 6
forks: 2
openIssues: 0
closedIssues: 27
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-07T03:09:07Z"
lastCommitAt: "2026-08-29T10:21:17Z"
lastReleaseAt: "2026-02-10T15:29:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 62
maintainers: ["gaoyangz77"]
openGraphImageUrl: "https://opengraph.githubassets.com/83f8e431e815178b3375fa43e38d827a2fa6a4b23a71e200cd7025427014f2b9/gaoyangz77/rivonclaw"
---

</p>

  English | <a href="README.zh-CN.md">中文</a>
</p>

## Why RivonClaw?

[OpenClaw](https://github.com/openclaw/openclaw) is a powerful agent runtime,
but operating it directly means managing config files, local processes, provider
credentials, channel plugins, and update workflows. RivonClaw packages that
runtime into a desktop application with a local panel, provider management,
mobile/channel integrations, ecommerce workflows, and release infrastructure.

OpenClaw is the engine; RivonClaw is the desktop cockpit and business layer.

## Current Features

- **Desktop runtime manager**: Electron desktop app that owns the OpenClaw
  gateway lifecycle, local HTTP panel server, update checks, and user data.
- **Local panel UI**: React/Vite panel for chat, providers, channels, skills,
  crons, usage, settings, account/billing, and gated ecommerce modules.
- **LLM provider management**: API-key, OAuth, custom OpenAI-compatible, local
  Ollama, subscription/coding-plan, proxy, model catalog, reauth, and usage
  surfaces.
- **Channel integrations**: OpenClaw channel configuration plus RivonClaw-owned
  mobile chat, Weixin wrapper, event bridge, and capability enforcement plugins.
-…

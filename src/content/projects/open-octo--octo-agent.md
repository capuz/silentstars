---
repo: "open-octo/octo-agent"
name: "octo-agent"
description: "Private, self-hosted AI agent — your models and data stay on your machine. A feature-rich coding + assistant toolset across eight interfaces (CLI, Web, desktop, IM, VS Code, Obsidian, SDK, Mobile), all in one fast, zero-dependency Go binary."
readmeQualityOk: true
url: "https://github.com/open-octo/octo-agent"
homepage: "https://octo-agent.dev/"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [59, 27]
topics: ["agent", "ai-agent", "anthropic", "chatbot", "claude", "cli", "golang", "llm", "openai", "tool-use"]
stars: 25
forks: 6
openIssues: 3
closedIssues: 90
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-25T03:09:29Z"
lastCommitAt: "2026-07-18T05:48:16Z"
lastReleaseAt: "2026-06-07T03:59:53Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 55
maintainers: ["Leihb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d532c0dcf3f5c2e2a2bcb5aed044f627e4f4de795458e44adf35cf10575e0f26/open-octo/octo-agent"
---

# octo-agent

</p>

> An **MIT-licensed, single Go binary, zero-runtime** AI agent that combines the two things people usually
> reach for two separate tools to get: a **coding agent on par with Claude Code**, and a **personal
> assistant that's lighter and more stable than OpenClaw** — skills, CLI / Web / desktop / phone-IM / VS Code / Obsidian / a Go SDK (mobile app landing next), browser control,
> an OS-level sandbox, all as an **open, self-contained binary you fully own**, on **any model** (DeepSeek,
> Kimi, Anthropic, OpenAI, or anything compatible), with the server and your data staying on your own
> machine. Reuse your existing Claude Code skills. One binary for both your coding and your everyday
> automation, instead of running two separate tools.

```bash
curl -fsSL https://octo-agent.dev/install.sh | sh     # single binary — no Node / Ruby / Python
octo config                                            # pick a provider, paste a key (DeepSeek / Kimi / …)
octo "Add a --json flag to 'octo config show' and run the tests"   # one prompt → full agentic loop
```

## Why octo — vs Claude Code

octo isn't trying to out-feature the big agents; it's the **open, self-hostable,…

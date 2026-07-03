---
repo: "open-octo/octo-agent"
name: "octo-agent"
description: "A functionality-first AI agent, distributed as a single Go binary."
url: "https://github.com/open-octo/octo-agent"
homepage: "https://octo-agent.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["agent", "ai-agent", "anthropic", "chatbot", "claude", "cli", "golang", "llm", "openai", "tool-use"]
stars: 5
forks: 1
openIssues: 15
closedIssues: 30
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-25T03:09:29Z"
lastCommitAt: "2026-07-03T12:22:20Z"
lastReleaseAt: "2026-06-07T03:59:53Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 93
undervaluedScore: 66
maintainers: ["Leihb"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac74d9dd92b7fd559d712bda3d383e6eafd2750600c2f04f38fef66573a1193d/open-octo/octo-agent"
---

# octo-agent

</p>

> An **MIT-licensed, single Go binary, zero-runtime** AI agent. It does what the big coding agents do —
> skills, CLI / Web / phone-IM, browser control, an OS-level sandbox — but as an **open, self-contained
> binary you fully own**, on **any model** (DeepSeek, Kimi, Anthropic, OpenAI, or anything compatible),
> with the server and your data staying on your own machine. Reuse the skills already in `~/.claude/skills`.
> It's both a **coding agent** (vs Claude Code) and a **general-purpose agent** (vs Hermes) — one binary for
> both your coding and your everyday automation, instead of running two separate tools.

```bash
curl -fsSL https://octo-agent.dev/install.sh | sh     # single binary — no Node / Ruby / Python
octo config                                            # pick a provider, paste a key (DeepSeek / Kimi / …)
octo "Add a --json flag to 'octo config show' and run the tests"   # one prompt → full agentic loop
```

## Why octo — vs Claude Code

octo isn't trying to out-feature the big agents; it's the **open, self-hostable, vendor-neutral** take on
the same idea. If you're happy on a Claude subscription, Claude Code is great. octo is for when you'd…

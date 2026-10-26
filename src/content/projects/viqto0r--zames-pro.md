---
repo: "Viqto0r/zames_pro"
name: "zames_pro"
description: "Terminal coding agent   that drives chat.deepseek.com or chat.qwen.ai through Playwright — no API   key required. Reads/edits files, runs commands, commits   to git."
readmeQualityOk: true
url: "https://github.com/Viqto0r/zames_pro"
homepage: "https://www.npmjs.com/package/zames_pro"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai", "automation", "cli", "coding-agent", "deepseek", "developer-tools", "llm", "playwright", "terminal", "ai-agent"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-18T06:38:13Z"
lastCommitAt: "2026-10-26T20:59:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["Viqto0r"]
openGraphImageUrl: "https://opengraph.githubassets.com/718a135ec6c188530dd37747d62aa5d9ad52434e89990f9dcd615db85603ce39/Viqto0r/zames_pro"
discussionCount: 0
---

A terminal coding agent that works on top of real web chat LLMs
([chat.deepseek.com](https://chat.deepseek.com/), [chat.qwen.ai](https://chat.qwen.ai/), [chat.z.ai](https://chat.z.ai/), …)
through Playwright.
In spirit it is similar to Claude Code / Codex CLI: it starts in the current
directory, reads and edits files, runs commands, and commits to git.

> No API key required — it drives a DeepSeek, Qwen or GLM web chat like a
> regular user through a real (headless) browser.

**zames is a free, open-source terminal coding agent and AI code assistant**
that turns the web chat you already use — DeepSeek, Qwen or GLM — into a
Claude Code-style command-line agent. No API key, no per-token bill, no vendor
lock-in. Install with `npm install -g zames_pro`, run `zames` in any project
folder, and describe the task in plain language.

## Quick start

```bash
npm install -g zames_pro   # Chromium for Playwright is downloaded automatically
cd your-project            # any folder the agent should work in
zames                      # sign in once, then describe your task
```

There is **no API key and no per-token bill**: zames signs in to **your own…

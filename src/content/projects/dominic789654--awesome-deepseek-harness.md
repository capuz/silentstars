---
repo: "Dominic789654/awesome-deepseek-harness"
name: "awesome-deepseek-harness"
description: "A curated list of plugins, skills, MCP servers, patch/profile layers, orchestrators & UIs for DeepSeek Harness (DSH). Visualization · PPT · Coding · Agents · Loops (auto-research) and more. #dsh"
readmeQualityOk: true
url: "https://github.com/Dominic789654/awesome-deepseek-harness"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["agent", "awesome", "awesome-list", "deepseek", "deepseek-harness", "dsh", "llm", "mcp", "plugins", "agent-framework"]
stars: 151
forks: 102
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 96
recentReleases: 0
createdAt: "2026-08-13T13:54:05Z"
lastCommitAt: "2026-08-19T04:09:28Z"
status: "newborn"
tags: ["fork_magnet"]
healthScore: 80
undervaluedScore: 27
maintainers: ["Dominic789654", "chenyinrusi", "null5069"]
openGraphImageUrl: "https://opengraph.githubassets.com/059f463f9fef8ddbc9724f42ae7e960b46e9f4c6f846d46ab2b5250f2843dfee/Dominic789654/awesome-deepseek-harness"
---

</p>

# Awesome DeepSeek Harness [](https://awesome.re)

> A curated list of **plugins, skills, MCP servers, patch/profile layers, orchestrators, aggregators & UIs** for **DeepSeek Harness (DSH)** — DeepSeek's official agent runtime built around the idea **`Model + Harness = Agent`**.

**English** | [简体中文](https://github.com/Dominic789654/awesome-deepseek-harness/blob/HEAD/README.zh-CN.md)

DeepSeek Harness ("DSH") is DeepSeek's agent runtime / harness layer — the "hands" that turn the model's reasoning into real actions (context management, tool-call orchestration, execution sandbox, feedback loop, session persistence). Its defining feature is an **open plugin ecosystem**: the community contributes plugins, skills, MCP servers, orchestrators, aggregators, and UIs.

This list collects the best of that ecosystem. Contributions welcome — see [Contributing](#contributing).

> **Tip for authors:** DeepSeek asks plugin repositories to carry the **`#dsh`** GitHub topic so they can be discovered. Add it to your repo, then open a PR here.

## Quick Start

```bash
# Launch the DSH Web UI
npx @deepseek-ai/dsh web

# Install a community plugin (from this list) into your profile
dsh plugin…

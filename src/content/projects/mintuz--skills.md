---
repo: "mintuz/skills"
name: "skills"
description: "My collection of Claude Code, Codex and OMP Agent Skills for web and iOS Development"
readmeQualityOk: true
url: "https://github.com/mintuz/skills"
language: "Python"
languages: ["Python"]
languagePcts: [50]
topics: ["ai", "ai-agents", "appdevelopment", "llm-agent", "web-development"]
stars: 35
forks: 7
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-12-10T10:57:41Z"
lastCommitAt: "2026-11-13T11:21:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 48
maintainers: ["mintuz", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/cce8282b68727be3b2155cbbeb2bbdc8e67572b0eefc4e5c425547ed3f7e9bc1/mintuz/skills"
---

# Development Skills

Reusable skills, agents and plugin bundles for software development and personal productivity. They work with Codex, Claude Code and OMP. All three harnesses load the same skill directories under `src/`. Each harness manages its own plugin discovery, tool access and installation.

To choose a skill for a task, go to [When to use the main skills](#when-to-use-the-main-skills).

## Install with Codex

Run these commands in your shell:

```bash
codex plugin marketplace add mintuz/skills
codex plugin add core@mintuz-skills
codex plugin add web@mintuz-skills
codex plugin add typescript@mintuz-skills
codex plugin add system-design@mintuz-skills
codex plugin add product-management@mintuz-skills
codex plugin add app@mintuz-skills
codex plugin add life@mintuz-skills
codex plugin add principle@mintuz-skills
```

To install only some bundles, remove the lines that you do not need. To see the available bundles, run `codex plugin list --marketplace mintuz-skills --available`.

To install from the ChatGPT desktop app:

1. Add the marketplace.
2. Restart the app.
3. Open the Plugins Directory and choose **Mintuz Skills**.
4. Install the bundles that you need.

## Install…

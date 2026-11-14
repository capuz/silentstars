---
repo: "pageton/tui-design-skill"
name: "tui-design-skill"
description: "Production-grade AI skill for designing and building polished terminal user interfaces. Works with Claude Code and OpenCode."
readmeQualityOk: true
url: "https://github.com/pageton/tui-design-skill"
language: "Python"
languages: ["Python", "Go", "Rust"]
languagePcts: [39, 34, 22]
topics: ["ai-skill", "bubbletea", "claude-code", "cli", "ink", "opencode", "ratatui", "skill-pack", "terminal", "terminal-ui"]
stars: 30
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-08T15:43:25Z"
lastCommitAt: "2026-11-14T10:44:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 20
maintainers: ["pageton"]
openGraphImageUrl: "https://opengraph.githubassets.com/f375763648739cc5480495e8601d9f7c3ab82d6b8081c56c000c215dac035667/pageton/tui-design-skill"
---

# TUI Design Skill

A production-grade AI skill for designing and building exceptionally polished terminal user interfaces. Works as an expert terminal product designer and senior TUI engineer — opinionated about good design, strong on architecture, and focused on making terminal apps feel modern and delightful.

## What It Does

- **Generate** new TUI apps from a product idea
- **Convert** CLI workflows into interactive TUIs
- **Redesign** existing TUIs to feel modern and polished
- **Review** TUI code with a scored UX assessment
- **Recommend** frameworks, patterns, and components
- **Handle** Unicode/RTL text, terminal compatibility, and testing correctly

## Install

Install each agent once — the Claude Code plugin **or** the skills pack for that agent, not both. Mixing them duplicates the skill and can leave two copies drifting apart.

### Claude Code

Installed as a plugin, through the normal marketplace mechanism. No manual file copying.

**1. Add this repo as a marketplace:**

```
/plugin marketplace add pageton/tui-design-skill
```

**2. Install the plugin:**

```
/plugin install tui-design
```

**3. Invoke with:**

```
/tui-design Build me a dashboard for monitoring…

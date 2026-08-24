---
repo: "ArcadeAI/safeword"
name: "safeword"
description: "Personal AI agent guides, templates, and learnings"
readmeQualityOk: true
url: "https://github.com/ArcadeAI/safeword"
homepage: "https://arcadeai.github.io/safeword/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
stars: 8
forks: 2
openIssues: 1126
closedIssues: 1447
watchers: 0
contributors: 36
recentReleases: 0
createdAt: "2025-10-27T03:36:25Z"
lastCommitAt: "2026-08-24T04:23:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 91
undervaluedScore: 66
maintainers: ["TheMostlyGreat", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2024c37206c6f50531c2ddf768809d77ca52daf94ae088e1e3ee3f7632938956/ArcadeAI/safeword"
---

# SAFEWORD - AI Agent Configuration CLI

**Problem**: AI agents write code without tests, skip design validation, and lack consistency across projects.

**Solution**: Portable patterns and guides that enforce test-first development (BDD/TDD), quality standards, and best practices across all your projects.

**Repository**: <https://github.com/ArcadeAI/safeword>

---

## Quick Start (30 seconds)

**1. Install in your project and native agent profiles:**

```bash
cd /path/to/your/project
bunx safeword@latest install
```

By default, this configures the project and installs both the Claude Code and
Codex plugins. Cursor stays untouched unless you explicitly select it:

```bash
bunx safeword@latest install --agents=cursor
# Or install every integration:
bunx safeword@latest install --agents=claude,codex,cursor
```

**2. Activate the installed profile plugins:**

```bash
# In Claude Code, run: /reload-plugins
# Review hooks in Desktop Settings > Hooks (or /hooks in the TUI), then fully restart Codex and resume this task
```

**3. Verify installation:**

```bash
bunx safeword@latest doctor
```

**Claude activation scope.** `install` records Claude activation for this
project in…

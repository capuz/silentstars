---
repo: "foomakers/pair"
name: "pair"
description: "pair is the process layer for AI-assisted development. It gives your AI assistant the context, guidelines, and skills to work the way your team works."
readmeQualityOk: true
url: "https://github.com/foomakers/pair"
homepage: "https://pair.foomakers.com"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [54, 37]
topics: ["ai", "ai-assistant", "development-process", "vibe-engineering", "context-engineering", "enterprise-solution", "harness", "harness-engineering", "harness-framework", "vibe"]
stars: 7
forks: 0
openIssues: 17
closedIssues: 234
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-08-03T13:41:56Z"
lastCommitAt: "2026-10-08T10:49:13Z"
lastReleaseAt: "2026-04-13T08:26:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 80
maintainers: ["rucka"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1031316660/80d97381-a947-4788-9541-46a82976ca16"
discussionCount: 0
---

# pair

> Code is the easy part.

**AI-assisted software development** — structured Knowledge Base, Agent Skills, and adoption files that give AI coding assistants the context they need to ship quality software.

## Quick Start

```bash
npx @foomakers/pair-cli install
```

This installs the pair Knowledge Base into your project. Your AI assistant reads `.pair/` and `.claude/skills/` to follow your team's standards, process, and architecture decisions.

**In Claude Code?** Skip the command line — install the bootstrap plugin and let it do the above:

```text
/plugin marketplace add foomakers/pair
/plugin install pair@pair
/pair-assistant
```

The plugin ships **one** skill: an assistant that installs `pair-cli` and runs it — so your project ends up with exactly the tree the command above produces — and then keeps helping you drive the CLI and answer questions from your own knowledge base. See [Install Channels](https://pair.foomakers.com/docs/integrations/claude-code#install-channels).

## What You Get

- **Knowledge Base** — guidelines, how-to guides, and templates for every SDLC phase
- **Agent Skills** — 41 idempotent workflows following the…

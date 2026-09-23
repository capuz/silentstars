---
repo: "kangig94/coral"
name: "coral"
description: "Teach Claude Code how you code - conventions, workflow, debate"
readmeQualityOk: true
url: "https://github.com/kangig94/coral"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["claude", "plugin", "ai-agents", "claude-code", "vibe-coding"]
stars: 11
forks: 3
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 4
recentReleases: 9
createdAt: "2026-02-18T12:09:59Z"
lastCommitAt: "2026-09-23T08:46:14Z"
lastReleaseAt: "2026-08-02T08:52:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 62
maintainers: ["kangig94", "coral-release[bot]", "Chad4545"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc1fe24b4d195f850ba041aa5d73c45043bd8fc782882e2bb6fc3d56c522a42d/kangig94/coral"
---

# 🪸 Coral

[Korean](https://github.com/kangig94/coral/blob/HEAD/README.ko.md)

Your coding agent already knows how to code. Coral teaches it how _you_ work.

Coral is a CLI-first plugin backed by a persistent local coordinator for orchestration, sessions, discussion, and knowledge-base workflows.

## Install

**Requirements:** Linux or macOS, and Node.js 26. Older Node releases from 24 up are likely to work but are not tested. Windows is not supported.

```bash
# Claude Code:
/plugin marketplace add https://github.com/kangig94/coral
/plugin install coral

# Codex (also enables --delegate cross-model delegation):
npm install -g @openai/codex
codex plugin marketplace add kangig94/coral
# Restart Codex, then run /plugins and install Coral from the Coral marketplace.

# Update the Codex marketplace and installed plugin cache:
codex plugin marketplace upgrade coral

# GitHub Copilot CLI:
npm install -g @github/copilot
copilot plugin marketplace add kangig94/coral
copilot plugin install coral@coral   # <plugin>@<marketplace>

# Optional — enables --delegate from Copilot (Copilot delegates to Codex):
npm install -g @openai/codex

# Update the installed Copilot plugin:
copilot plugin…

---
repo: "danielvm-git/bigpowers"
name: "bigpowers"
description: "70 agent skills for spec-driven, test-first software development by solo developers"
url: "https://github.com/danielvm-git/bigpowers"
homepage: "https://github.com/danielvm-git/bigpowers"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [48, 29]
topics: ["ai-agents", "automation", "bmad", "claude-code", "clean-code", "cursor-rules", "devops", "documentation-as-code", "gemini-cli", "productivity"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-24T21:03:16Z"
lastCommitAt: "2026-06-27T00:46:04Z"
lastReleaseAt: "2026-06-02T16:49:16Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 61
maintainers: ["danielvm-git", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/998f49d91533d43552ed30f010ade13e320ac0fb91664086f8f31ba181f55ddb/danielvm-git/bigpowers"
---

# bigpowers — Best-in-Class Agentic Skills

**70 agent skills for high-integrity, spec-driven, test-first software development by solo developers.**

`bigpowers` provides a prescriptive, vertical-slice methodology for building software with AI agents (Claude Code, Gemini CLI, Cursor, pi). It bridges the gap between raw LLM capabilities and professional engineering standards.

Published on npm: [bigpowers@2.0.0](https://www.npmjs.com/package/bigpowers)

---

## 🚀 Quick Start

### npm (recommended)

```bash
# One-shot setup — downloads, syncs artifacts, and links skills to your tools
npx bigpowers

# Or install globally and run the setup command anytime
npm install -g bigpowers
bigpowers
```

Both commands sync skill artifacts and link them to Claude Code, Gemini CLI, and Cursor (see [Prerequisites](#-prerequisites)).

### From source (contributors)

```bash
git clone https://github.com/danielvm-git/bigpowers.git && cd bigpowers
npm install          # runs postinstall: sync + link
# or manually:
bash scripts/install.sh
npm run sync
```

---

## 🛠 Prerequisites

- **Bash**: Required for all scripts.
- **Node.js**: v14+ (required for npm/npx).
- **jq**: (Highly Recommended) Used for…

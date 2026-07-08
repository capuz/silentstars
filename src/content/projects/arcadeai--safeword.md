---
repo: "ArcadeAI/safeword"
name: "safeword"
description: "Personal AI agent guides, templates, and learnings"
readmeQualityOk: true
url: "https://github.com/ArcadeAI/safeword"
homepage: "https://arcadeai.github.io/safeword/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 6
forks: 2
openIssues: 253
closedIssues: 240
watchers: 0
contributors: 33
recentReleases: 0
createdAt: "2025-10-27T03:36:25Z"
lastCommitAt: "2026-07-08T05:41:29Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 89
undervaluedScore: 64
maintainers: ["TheMostlyGreat"]
openGraphImageUrl: "https://opengraph.githubassets.com/440b703f7287b52c3437ca6318eb2fd97a77a8ab6617eff80c552e1100f8448e/ArcadeAI/safeword"
---

# SAFEWORD - AI Agent Configuration CLI

**Problem**: AI agents write code without tests, skip design validation, and lack consistency across projects.

**Solution**: Portable patterns and guides that enforce test-first development (BDD/TDD), quality standards, and best practices across all your projects.

**Repository**: <https://github.com/TheMostlyGreat/safeword>

---

## Quick Start (30 seconds)

**1. Install in your project:**

```bash
cd /path/to/your/project
bunx safeword@latest setup
```

**2. Verify installation:**

```bash
# Check for SAFEWORD files
test -f .safeword/SAFEWORD.md && echo ".safeword/SAFEWORD.md ✓"
test -f AGENTS.md && echo "AGENTS.md ✓"
```

**Result**: Your project now has:

- `.safeword/SAFEWORD.md` - Global patterns and workflows
- `.safeword/guides/` - Testing methodology (BDD/TDD), code philosophy
- `.safeword/hooks/` - Auto-linting, quality review hooks
- `.claude/settings.json` - Hook configuration for Claude Code
- `.claude/skills/` - Skills and slash-command workflows for Claude Code
- `.codex/config.toml` - Hook configuration for Codex
- `.agents/skills/` - Skills for Codex
- `.cursor/hooks.json` - Hook configuration for Cursor
- `.cursor/rules/`…

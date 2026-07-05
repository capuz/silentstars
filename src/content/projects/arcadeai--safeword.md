---
repo: "ArcadeAI/safeword"
name: "safeword"
description: "Personal AI agent guides, templates, and learnings"
readmeQualityOk: true
url: "https://github.com/ArcadeAI/safeword"
homepage: "https://arcadeai.github.io/safeword/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 5
forks: 2
openIssues: 216
closedIssues: 203
watchers: 0
contributors: 31
recentReleases: 0
createdAt: "2025-10-27T03:36:25Z"
lastCommitAt: "2026-07-05T20:59:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 89
undervaluedScore: 66
maintainers: ["TheMostlyGreat"]
openGraphImageUrl: "https://opengraph.githubassets.com/aadcb869213a9cbb403a7282c83aaee447c8066172f7b1a3a24677eedff40b82/ArcadeAI/safeword"
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

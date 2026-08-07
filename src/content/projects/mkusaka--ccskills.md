---
repo: "mkusaka/ccskills"
name: "ccskills"
description: "Installable Claude Code skills generated from Piebald's published system prompts, with sync and PR automation included."
readmeQualityOk: true
url: "https://github.com/mkusaka/ccskills"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-08T12:53:57Z"
lastCommitAt: "2026-08-07T05:14:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0e82f3212b3ed32afa068f9f1fb1abb885c9fd17cbbd4289b9a0c8e1235b9e3/mkusaka/ccskills"
---

# ccskills

Installable Claude Code skills generated from Piebald's published system prompts, with sync and PR automation included.

This repository converts Piebald's `system-prompts/skill-*.md` files into installable `SKILL.md` directories under [`./skills`](https://github.com/mkusaka/ccskills/blob/HEAD/skills).

## Usage

Install generated skills with the Skills CLI:

```bash
npx skills add mkusaka/ccskills
npx skills add mkusaka/ccskills@debugging
npx skills add https://github.com/mkusaka/ccskills/tree/main/skills/debugging
```

If you maintain this repo locally, sync from upstream with:

```bash
pnpm sync
pnpm sync --dry-run
pnpm sync:related
pnpm sync Piebald-AI/claude-code-system-prompts
pnpm sync /path/to/local/claude-code-system-prompts
```

## Automation

[`./.github/workflows/sync-piebald-skills.yml`](https://github.com/mkusaka/ccskills/blob/HEAD/.github/workflows/sync-piebald-skills.yml) runs daily at `03:17 UTC` and on `workflow_dispatch`.

The workflow:

- runs `pnpm sync`
- runs `pnpm test`
- uses [`./scripts/sync_skills_pull_request.sh`](https://github.com/mkusaka/ccskills/blob/HEAD/scripts/sync_skills_pull_request.sh) to push `automation/piebald-skill-sync`
-…

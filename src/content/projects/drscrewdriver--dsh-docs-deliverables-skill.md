---
repo: "drscrewdriver/dsh-docs-deliverables-skill"
name: "dsh-docs-deliverables-skill"
description: "DSH bundle plugin: 4 evidence-verified knowledge skills (cross-version adaptation ledger for six host lines, plugin dev contract, release discipline, host architecture digests) served via ctx.skills provider"
readmeQualityOk: true
url: "https://github.com/drscrewdriver/dsh-docs-deliverables-skill"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-11T09:21:36Z"
lastCommitAt: "2026-11-14T09:45:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 25
maintainers: ["drscrewdriver"]
openGraphImageUrl: "https://opengraph.githubassets.com/38e2bda51eaa63776f4b2558658324e322122c9d25a90a2e22f5b4959e122f80/drscrewdriver/dsh-docs-deliverables-skill"
---

# dsh-docs-deliverables-skill

MIT | zero runtime deps | bundle plugin

A DSH bundle plugin that ships the **DSH plugin-development knowledge base as agent skills**: four skills (plugin dev contract / cross-version adaptation ledger covering the six 0.1.x–0.2.0 host lines / release & awesome-submission discipline / host architecture digests), served through the official `ctx.skills` provider registry — plus the raw `skills/` tree you can also drop into any `.agents/skills` directory.

Every technical claim inside the skills is code-verified against `deepseek-harness@0.2.0-rc.2` (main) and `0.1.7-rc.2` (auxiliary), labeled VERIFIED / FARM / PENDING / UNVERIFIED, with `file:line@version` anchors and a maintenance gate (`maintenance/skill-anchor-map.yaml`) that re-greps them on every host bump. No machine-absolute paths — references are workspace-relative (`<ws>` placeholder).

## Install (as a DSH plugin)

```sh
dsh plugin --profile web add github:drscrewdriver/dsh-docs-deliverables-skill
```

The bundle row mounts `src/index.js`, which registers a bundled SkillProvider over `skills/`. If a profile does not mount the skill registry, the plugin no-ops silently (soft…

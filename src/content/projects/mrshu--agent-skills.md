---
repo: "mrshu/agent-skills"
name: "agent-skills"
description: "Useful skills for AI agents (Claude Code, etc.)"
readmeQualityOk: true
url: "https://github.com/mrshu/agent-skills"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [69, 20]
stars: 20
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-22T00:19:46Z"
lastCommitAt: "2026-09-30T09:56:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 71
undervaluedScore: 36
maintainers: ["mrshu"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1c63cf5b8cea16432931615b08c4422148939ef56798308b672174fbe3187d1/mrshu/agent-skills"
---

# agent-skills

A Claude Code plugin marketplace with useful skills for AI agents.

## Installation

First, add the marketplace:
```bash
/plugin marketplace add mrshu/agent-skills
```

Then install plugins:
```bash
/plugin install scholar-search
/plugin install wshot
/plugin install paper-siphon
/plugin install codex-exec
/plugin install claude-exec
/plugin install review-anvil
/plugin install overleaf-comment
/plugin install overleaf-compile
/plugin install gdocs-comment
/plugin install gh-pr-image
```

For hosts that consume skills directly via `npx skills`, install the
Review Anvil family with its reviewer backends in one command:
```bash
npx skills add mrshu/agent-skills \
  --skill review-anvil \
  --skill review-anvil-readonly \
  --skill review-anvil-pr \
  --skill review-anvil-improve-pr \
  --skill codex-exec \
  --skill claude-exec
```

## Plugins

### scholar-search

Find academic papers, explore citations, and export BibTeX. Uses four tools under the hood:

- **s2cli** (Semantic Scholar) — paper recommendations, citation/reference networks, arXiv/DOI lookups
- **openalexcli** (OpenAlex) — broadest coverage (260M+ works), institution/journal queries, aggregation
-…

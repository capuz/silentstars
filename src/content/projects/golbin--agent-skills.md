---
repo: "golbin/agent-skills"
name: "agent-skills"
description: "Reusable agent skills for Codex and compatible tools"
readmeQualityOk: true
url: "https://github.com/golbin/agent-skills"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["agent-skills", "codex", "prd", "product-requirements-document", "skills-sh", "code-review", "implementation-review", "review-implementation"]
stars: 210
forks: 27
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-19T05:56:45Z"
lastCommitAt: "2026-08-18T04:07:49Z"
lastReleaseAt: "2026-04-20T05:10:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 6
maintainers: ["golbin"]
openGraphImageUrl: "https://opengraph.githubassets.com/31bf8cf1544786fff3c0932137ab7cb3548de8010b0925de5819c1bb579d7e01/golbin/agent-skills"
---

# Agent Skills

Reusable agent skills for Codex and other Agent Skills compatible tools.

Skills are packaged under `skills/<skill-name>/` so this repository can hold
multiple installable skills.

## Repository Layout

- `skills/`: installable agent skills discovered by `npx skills` and `gh skill`
- `templates/`: copyable project templates such as `AGENTS.md` and `CLAUDE.md`

## Available Skills

- `prd`: Design the simplest coherent solution, then refine its living
  implementation checklist as evidence changes.
- `review-implementation`: Verify purpose and correctness, fix root causes,
  isolate justified legacy compatibility, and simplify repeatedly.

## Templates

- `templates/AGENTS.md`: concise project instruction template for coding agents
- `templates/CLAUDE.md`: delegates Claude-compatible tools to `AGENTS.md`

Copy the templates into a project root and customize the placeholders:

```bash
cp templates/AGENTS.md /path/to/project/AGENTS.md
cp templates/CLAUDE.md /path/to/project/CLAUDE.md
```

## Install

### skills.sh / `npx skills`

Install globally for Codex:

```bash
npx skills add https://github.com/playmoreai/agent-skills/tree/main/skills/prd \
  -g \
  -a codex \…

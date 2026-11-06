---
repo: "black-yt/skills"
name: "skills"
description: "Reusable agent skills that Xu Wanghan uses and maintains in daily work."
originalDescription: "徐望瀚日常工作中使用和维护的可复用 agent skills。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/black-yt/skills"
homepage: "https://black-yt.github.io/skills/"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["agent-skills", "codex", "docx", "latex", "markdown", "pdf-processing", "workflow-automation", "agent", "claude-code", "codex-cli"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-09T08:10:07Z"
lastCommitAt: "2026-11-06T12:18:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 35
maintainers: ["black-yt"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6c4dd9dd7e6669075e4d49b9fd0766b3cc2b8263fbdd6de7f6872a40a4a98e2/black-yt/skills"
---

# Skills

This is a set of reusable skills that Xu Wanghan uses and maintains in daily work. Each skill uses its own subfolder and provides a `SKILL.md` in the Anthropic/Claude Skills style.

Basic structure of each skill:

```text
skill-name/
  SKILL.md
  scripts/      # optional, executable scripts
  references/   # optional, reference material to read on demand
  assets/       # optional, templates, images, sample files, and other materials
```

## Skill List

| Skill | Entry document | Purpose |
| --- | --- | --- |
| `agent-orchestration` | [`agent-orchestration/SKILL.md`](https://github.com/black-yt/skills/blob/HEAD/agent-orchestration/SKILL.md) | Organizes a primary Codex, mid-level native sub-agents or Claude Code/Atria companion runners, and an underlying deterministic pipeline, covering temporary credential injection, long-running sessions, takeover after exceptions, resource concurrency, and evidence-based acceptance. |
| `agents-md-maintenance` | [`agents-md-maintenance/SKILL.md`](https://github.com/black-yt/skills/blob/HEAD/agents-md-maintenance/SKILL.md) | Creates, organizes, splits, and maintains repository-level `AGENTS.md` and `AGENTS.local/`, covering…

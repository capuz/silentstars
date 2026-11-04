---
repo: "piotrekno1/second-shift"
name: "second-shift"
description: "Scheduled agent tasks for your repositories, defined in Git. Approved access, sandboxed runs, a full audit trail."
readmeQualityOk: true
url: "https://github.com/piotrekno1/second-shift"
homepage: "https://second-shift.app/"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["agent-skills", "ai-agents", "automation", "developer-tools", "django", "gitops", "llm", "mcp", "model-context-protocol", "sandbox"]
stars: 6
forks: 1
openIssues: 31
closedIssues: 27
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-23T14:16:39Z"
lastCommitAt: "2026-11-04T11:27:46Z"
lastReleaseAt: "2026-10-30T22:07:27Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 60
maintainers: ["piotrekno1"]
openGraphImageUrl: "https://opengraph.githubassets.com/98e3017de69c449bb9c216151f22a408ccd2681526ddd99604a1b700f2e6786b/piotrekno1/second-shift"
discussionCount: 0
---

SecondShift

**Give recurring engineering work a shift.**

Commit an agent skill next to your code. SecondShift runs it in a sandbox,
with only the access your team approved, and keeps its results and cost.

Open source, self-hosted, and in beta. Bring your own model provider.

[Quick start](#quick-start) · [Skill catalog](https://github.com/piotrekno1/second-shift/blob/HEAD/examples/README.md) ·
[Docs](https://second-shift.app/docs/overview/) · [Website](https://second-shift.app/)

https://github.com/user-attachments/assets/0a9a7baa-f79e-4934-af81-8e5374e9cdbf

## How it works

Define a job in `.secondshift.yaml`. This example runs a skill every Monday:

```yaml
jobs:
  engineering-briefing:
    name: Monday engineering briefing
    skill: examples/engineering-briefing/.agents/skills/engineering-briefing/SKILL.md
    schedule: "0 9 * * 1"
    requires:
      mcps:
        - binding: github
          tools:
            - search_pull_requests
            - list_commits
    notify:
      - binding: engineering-reports
```

1. **Write** the skill with Claude Code, Codex, or any coding agent. Merge it
   through your normal review.
2. **Approve** its access in the dashboard. A…

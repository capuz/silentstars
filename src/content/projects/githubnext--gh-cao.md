---
repo: "githubnext/gh-cao"
name: "gh-cao"
description: "GitHub Central Agentic Ops"
readmeQualityOk: true
url: "https://github.com/githubnext/gh-cao"
homepage: "https://gh.io/cao"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [49, 48]
topics: ["agentic-factory", "agentic-workflows", "github-actions", "github-agentic-workflows", "cao", "central-agentic-ops"]
stars: 24
forks: 8
openIssues: 164
closedIssues: 17027
watchers: 0
contributors: 14
recentReleases: 10
createdAt: "2026-07-16T15:38:40Z"
lastCommitAt: "2026-11-27T16:17:21Z"
lastReleaseAt: "2026-10-06T00:52:46Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 56
maintainers: ["mnkiefer", "pelikhan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/34f9565351ec532866abc265f4e5d86552e24cf98965e31e46ec3191b68d50db/githubnext/gh-cao"
---

# Central Agentic Ops

> **Note**
>
> **Research prototype:** Features and interfaces may change.

> **Tip**
>
> **Agents:** Use the [`central-agentic-ops` skill](https://github.com/githubnext/gh-cao/blob/HEAD/skills/central-agentic-ops/SKILL.md)
> to set up a control plane, operate campaigns, analyze evidence, or debug CAO.

Central Agentic Ops (CAO) brings GitHub Agentic Workflow runs, costs, and
outcomes into one dashboard, then adds policy-governed execution when you are
ready. It operates from a control repository across explicitly enrolled
repositories. CAO does not replace repository permissions, branch protection,
or human review.

## Open a local dashboard

Use your locally authenticated [GitHub CLI](https://cli.github.com) to install
the release extension and inspect a repository. These commands work unchanged
in Windows Command Prompt, PowerShell, and POSIX shells:

```bash
gh auth status
gh extension install githubnext/gh-cao
gh cao dashboard --repo OWNER/REPOSITORY
```

**Fresh Windows 11 machine:** install the prerequisites with WinGet, then
reopen Command Prompt so `PATH` is refreshed:

---
repo: "githubnext/gh-cao"
name: "gh-cao"
description: "GitHub Central Agentic Ops"
readmeQualityOk: true
url: "https://github.com/githubnext/gh-cao"
homepage: "https://gh.io/cao"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [57, 41]
topics: ["agentic-factory", "agentic-workflows", "github-actions", "github-agentic-workflows", "cao", "central-agentic-ops"]
stars: 12
forks: 5
openIssues: 186
closedIssues: 15794
watchers: 0
contributors: 11
recentReleases: 10
createdAt: "2026-07-16T15:38:40Z"
lastCommitAt: "2026-10-29T10:21:21Z"
lastReleaseAt: "2026-10-06T00:52:46Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["mnkiefer", "Copilot", "pelikhan"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c0c3b98c7401a48c25d1be6534896dce05b284ec2a84a3f6f7991d133f94409/githubnext/gh-cao"
---

# Central Agentic Ops

> [!NOTE]
> **Research prototype:** Features and interfaces may change.

> [!TIP]
> **Agents:** Use the [setup skill](https://github.com/githubnext/gh-cao/blob/HEAD/skills/setup-cao/SKILL.md) to create a control
> plane and the [debug skill](https://github.com/githubnext/gh-cao/blob/HEAD/skills/debug-cao/SKILL.md) when CAO fails.

Central Agentic Ops (CAO) brings GitHub Agentic Workflow runs, costs, and
outcomes into one dashboard, then adds policy-governed execution when you are
ready. It operates from a control repository across explicitly enrolled
repositories. CAO does not replace repository permissions, branch protection,
or human review.

## Start safely

Install the extension:

```bash
gh extension install githubnext/gh-cao
```

Git and authenticated GitHub CLI 2.68+ are required. Need a repository?
Create one with `gh repo create OWNER/REPOSITORY --private --clone`, then
`cd REPOSITORY`.

From the repository root:

```bash
gh cao setup
```

Setup makes this the control repository by preparing the monitoring runtime,
policy, and gh-aw. It does **not** install or run a campaign, and it keeps
changes local unless you separately approve commit and push.…

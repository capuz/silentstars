---
repo: "richkuo/rk-skills"
name: "rk-skills"
description: "Claude Code workflow skills — GitHub issue/PR/release automation and Fable-driven planning. Install via npx or as a Claude Code plugin."
readmeQualityOk: true
url: "https://github.com/richkuo/rk-skills"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
topics: ["ai-agents", "claude", "claude-code", "github-automation", "skills", "workflow"]
stars: 49
forks: 8
openIssues: 1
closedIssues: 92
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-04T10:38:56Z"
lastCommitAt: "2026-09-05T07:50:56Z"
lastReleaseAt: "2026-07-14T10:58:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 44
maintainers: ["richkuo"]
openGraphImageUrl: "https://opengraph.githubassets.com/c02719f4a30985fdc7d8f34d836bc812d202e1f51de876d08cb467badd66f8e7/richkuo/rk-skills"
---

# rk-skills

Workflow skills for [Claude Code](https://claude.com/claude-code): GitHub issues, pull request (PR) review loops, docs syncing, and releases.

A skill is a reusable instruction file that teaches Claude Code one job (file an issue, cut a release). Trigger one by name and Claude follows its steps.

## Skills

Most workflow skills come in two forms: a **base** skill that does one step and stops, and a **`-loop`** variant that continues through review and re-review until the PR is approved.

```mermaid
flowchart LR
    A([validate-issue]) --> B([work-on-issue])
    B --> C([PR + review])
    C -- findings --> D([fix-pr-review])
    D --> C
    C -- LGTM --> E([issue complete])
```

Issues carry a **complexity score** (`C0` to `C100`) in the title and a `fableplan: yes|no` signal on the first line. The score routes the validate model, the build model and effort, and the first reviewer; `validate-issue` step 6 owns the band table. `fableplan` is `yes` at score 71 or higher, and a Fable 5.1 plan is then posted before the build. "Fable" skills hand part of the work to a subagent on the Fable 5.1 model; it runs at `high` by default and at `xhigh` only when you ask for it.

###…

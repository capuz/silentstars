---
repo: "lamngockhuong/aiteamkit"
name: "aiteamkit"
description: "Multi-harness AI plugin for Claude Code, Cursor and Codex CLI: skills that run the delivery lifecycle of a project team - intake, estimate, design, spec, breakdown, plan, implement, fix, review, QA, verify, release, incident, retro, onboard, handover. Author and approver stay separate roles."
readmeQualityOk: true
url: "https://github.com/lamngockhuong/aiteamkit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["agent-skills", "ai-skills", "claude-code", "codex", "cursor", "plugin", "sdlc", "team-workflow"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-01-08T06:22:04Z"
lastCommitAt: "2026-09-23T08:47:12Z"
lastReleaseAt: "2026-09-23T04:01:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 64
maintainers: ["lamngockhuong", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2460a79aac2149405ad4d990cfc165e6d83d69cf2337acc8cda3fe3e498ab165/lamngockhuong/aiteamkit"
---

# AI Team Kit (`atk`)

Twenty-one skills covering the software delivery lifecycle of a **company project team**. Every skill
assumes work has an author and a separate reviewer, decisions have an owner, and artifacts are read
by someone who was not in the conversation that produced them. Those are roles rather than a
headcount: a solo developer holding all of them gets the same gates, and still approves by hand.

Compatible with Claude Code, Cursor, and OpenAI Codex CLI.

Walkthrough of what each skill means and when to use it:
[docs/skills-overview.md](https://github.com/lamngockhuong/aiteamkit/blob/HEAD/docs/skills-overview.md) (English) /
[docs/vi/skills-overview.md](https://github.com/lamngockhuong/aiteamkit/blob/HEAD/docs/vi/skills-overview.md) (Tiếng Việt).

## Lifecycle

```mermaid
flowchart LR
    I["init"] --> T["tailor"] --> IN["intake"] --> C["catchup"] --> E["estimate"]
    E --> D["design-doc"] --> SP["spec"] --> B["breakdown"] --> CV["convention"] --> P["plan"]
    P --> IM["implement"] --> R["review"] --> Q["qa"] --> V["verify"] --> RL["release"]
    R -.->|Blocking findings| IM
    RL --> IC["incident"] --> RT["retro"]
    RT -.->|Next cycle| IN
```

Three skills…

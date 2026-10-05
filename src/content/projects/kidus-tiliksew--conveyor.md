---
repo: "kidus-tiliksew/conveyor"
name: "conveyor"
description: "Intent on paper, agents on the line, and every merge remembers why."
readmeQualityOk: true
url: "https://github.com/kidus-tiliksew/conveyor"
language: "Go"
languages: ["Go"]
languagePcts: [79]
stars: 11
forks: 0
openIssues: 6
closedIssues: 521
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-07-10T12:15:25Z"
lastCommitAt: "2026-10-05T10:46:33Z"
lastReleaseAt: "2026-08-19T15:24:13Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 57
maintainers: ["kidus-tiliksew", "conveyor-factory[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c0553ffcfdb45b1dace443ebcc75a3e4925639bebe5ee28875a851ecaaf0bac/kidus-tiliksew/conveyor"
---

# Conveyor

Coding agents can produce changes faster than a team can review them. The
harder question is whether those changes match what the team intended to build.

Conveyor gives that work a defined process. Humans confirm requirements,
system designs, and decisions. Agents use those documents to plan, implement,
and review tasks on your machines, with human approval where required.

Requirements traceability gives reviewers a basis for checking the work and
identifying where it has drifted from the agreed intent.

Conveyor has used this process to build itself since July 2026.

## The knowledge graph

Conveyor links each change to the documents, task, review, and test evidence
behind it.

```mermaid
flowchart LR
    intent["Confirmed requirements<br/>and designs"] --> task["Task"]
    task --> delivery["Delivered change"]

    intent -.-> check{"Misalignment checks"}
    delivery -.-> check
    repository["Observed repository"] -.-> check

    check -->|mismatch found| signal["Signal"]
    signal --> followup["Judgment or gated follow-up"]
    followup -->|re-enters the factory| task
```

Conveyor checks each delivery against confirmed requirements and governing
designs. When…

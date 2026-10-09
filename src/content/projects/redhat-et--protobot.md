---
repo: "redhat-et/ProtoBot"
name: "ProtoBot"
description: "IdeaBot calling ProtoBot — you got your EARS on?"
readmeQualityOk: true
url: "https://github.com/redhat-et/ProtoBot"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 6
forks: 6
openIssues: 27
closedIssues: 83
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2026-07-30T20:46:13Z"
lastCommitAt: "2026-10-09T18:53:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 65
maintainers: ["fullsend-ai-coder[bot]", "JohnStrunk", "hermes-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8346f75876827cab94f8b15c1d7a88cd61257ad75ad64cd404b8dd7d721fe1c9/redhat-et/ProtoBot"
---

# ProtoBot

ProtoBot is an experimental, spec-first software development system. It
takes structured requirements and generates working, tested, inspected
prototypes for customer demonstrations. It is the second tool in the Hermes
pipeline:

```mermaid
flowchart LR
    IdeaBot["IdeaBot<br/>(idea)"] --> ProtoBot["ProtoBot<br/>(prototype)"] --> TransferBot["TransferBot<br/>(product transfer)"]
```

ProtoBot is intended to produce prototypes, not final production products.
The implementation is a disposable, regenerable artifact. The durable asset
is the specification and the evidence showing how a particular implementation
conformed to it.

## Approach to Software Development

ProtoBot puts human judgment before implementation and automation after the
specification is approved:

1. **Sketching:** A person and an agent define the project's Vision and
   Architecture, including its observable external interfaces.
2. **Dimensioning:** They turn those interfaces into precise EARS
   (Easy Approach to Requirements Syntax) requirements. This approved
   Schematic is the human review boundary.
3. **Building:** Autonomous Workers independently generate tests and
   implementation from the…

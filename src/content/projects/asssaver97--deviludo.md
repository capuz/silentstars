---
repo: "asssaver97/DeviLudo"
name: "DeviLudo"
description: "The autonomous AI multi-agent swarm for end-to-end game development. From idea to playable game in one click."
readmeQualityOk: true
url: "https://github.com/asssaver97/DeviLudo"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 20]
stars: 57
forks: 26
openIssues: 0
closedIssues: 3
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-07-17T11:54:37Z"
lastCommitAt: "2026-08-25T04:08:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 40
maintainers: ["asssaver97"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff8d0f406c917ad7eb3741e440537f57fac187b351c3c90af423c90858d05834/asssaver97/DeviLudo"
---

<h1>DeviLudo</h1>
  <p><strong>AI-powered game development automation for Godot</strong></p>
  <p>
    <strong>English</strong>
    ·
  </p>
  <p>
  </p>
</div>

DeviLudo turns requirements and existing Godot projects into tested desktop builds and Steam-ready releases. Design, Development, and Test agents collaborate on the same project, generate image assets, build the game, operate it through native input, and preserve evidence for every iteration.

> [!IMPORTANT]
> DeviLudo is currently an MVP. The complete local workflow requires an Apple Silicon Mac. Cross-platform production validation uses separate Linux, Windows, and macOS E2E nodes.

## Core workflow

```mermaid
flowchart LR
    A[Requirements] --> B[Design and implementation]
    B --> C[Image assets]
    C --> D[Godot build]
    D --> E[Real-operation E2E]
    E -->|Fix and retry| B
    E --> F[Review or Steam delivery]
```

| Capability | What it provides |
| --- | --- |
| Specialized agents | Design, Development, and Test agents with separate roles and model settings |
| Existing-project support | Direct access to a local directory or a GitHub clone using the host's Git credentials |
| Iterative development | A…

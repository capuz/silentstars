---
repo: "joyzhang14-14/My-Portrait"
name: "My-Portrait"
description: "Build your external memory and personal portrait automatically"
readmeQualityOk: true
url: "https://github.com/joyzhang14-14/My-Portrait"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["ai-memory-system", "localstorage", "long-term-memory", "privacy-first", "portrait"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-17T08:44:22Z"
lastCommitAt: "2026-10-21T23:36:59Z"
lastReleaseAt: "2026-06-02T04:33:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 49
maintainers: ["joyzhang14-14"]
openGraphImageUrl: "https://opengraph.githubassets.com/585a7931ee7313f809b0bd7727a37b94842448e70c6cc78384329fa5f3484c08/joyzhang14-14/My-Portrait"
---

---

## How it works

```mermaid
flowchart TB
  subgraph CAP["Capture system"]
    A1["Screenshots"] --> B1["OCR"]
    A2["Mic + system audio"] --> B2["Transcribe + diarize"]
    A3["Keystrokes / AX"]
    A1 --> TL["Timeline"]

    TL --> MT[("~/.portrait<br/>Capture DB")]
    B1 --> MT
    B2 --> MT
    A3 --> MT
  end

  subgraph ANA["Analysis system"]
    E["Events"] --> P["Portrait:<br/>Experiences, social, etc."]
    E --> PS["Personality"]
    TE["Typing event"] --> WS["Writing style"]

    E --> DB[("~/.portrait<br/>SQLite + markdown files")]
    TE --> DB
    P --> DB
    PS --> DB
    WS --> DB
  end

  MT --> E
  MT --> PS
  MT --> TE

  DB --> G(("Neural Graph"))

  style CAP fill:#f9731626,stroke:#f97316,stroke-width:2px
  style ANA fill:#3b82f626,stroke:#3b82f6,stroke-width:2px
  style G fill:#a855f733,stroke:#a855f7,stroke-width:3px
```

## The Neural Graph

Over time, My Portrait builds a memory graph and a portrait graph that belong only to you, out of what it sees and the algorithms built into it.

## Install

1. Download the `.dmg` from [the latest release](https://github.com/joyzhang14-14/My-Portrait/releases/latest).
2. The app is self-signed, so Gatekeeper…

---
repo: "sagemathinc/cocalc-ai"
name: "cocalc-ai"
description: "CoCalc.ai: Collaborative Calculation with AI"
url: "https://github.com/sagemathinc/cocalc-ai"
homepage: "https://CoCalc.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 6
forks: 1
openIssues: 11
closedIssues: 6
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-01-19T22:09:24Z"
lastCommitAt: "2026-06-26T06:47:59Z"
lastReleaseAt: "2026-06-02T01:49:49Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 84
undervaluedScore: 58
maintainers: ["williamstein", "novoselt"]
openGraphImageUrl: "https://opengraph.githubassets.com/77a9580a6b767b0d04778972c1983be068c629342198b0c22f5f6d15aa4a35aa/sagemathinc/cocalc-ai"
discussionCount: 0
---

# CoCalc-AI

CoCalc-AI is a complete rewrite of CoCalc. This repository is the codebase for the next generation of CoCalc products:

- [CoCalc Plus](https://software.cocalc.ai/software/cocalc-plus/index.html): a local, single-user CoCalc runtime
- [CoCalc Launchpad](https://software.cocalc.ai/software/cocalc-launchpad/index.html): a multi-user CoCalc with project hosts
- [CoCalc CLI:](https://software.cocalc.ai/software/cocalc/index.html) the operator and agent CLI used to drive projects, browsers, workspaces, and automation
- `CoCalc Rocket`: the multi-bay scalable architecture built on the same core ideas as Launchpad

The relaunch is AI-native: Codex is integrated as a first-class agent runtime, browser automation is built into the platform, and the same project/workspace concepts are intended to work across local, self-hosted, and large-scale deployments.

Short illustrated guides for using CoCalc-AI are published at
[sagemathinc.github.io/cocalc-guides](https://sagemathinc.github.io/cocalc-guides/).

```mermaid
flowchart TD
    A["CoCalc-AI<br/>one codebase"]:::core

    A --> P["CoCalc Plus<br/>local, single-user"]
    A --> L["CoCalc Launchpad<br/>multi-user, project-host"]…

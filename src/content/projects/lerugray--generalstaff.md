---
repo: "lerugray/generalstaff"
name: "generalstaff"
description: "Open-source local-first dispatcher for AI coding agents. Verification-gated, BYOK, rolls back on test failures."
readmeQualityOk: true
url: "https://github.com/lerugray/generalstaff"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agpl", "ai-agents", "autonomous-coding", "claude-code", "cli", "coding-agents", "dispatcher", "llm", "local-first", "self-hosted"]
stars: 14
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2026-04-15T23:36:37Z"
lastCommitAt: "2026-08-28T14:36:59Z"
lastReleaseAt: "2026-06-16T21:48:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 51
maintainers: ["lerugray", "djeats"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb91e431068e187dae6b88322d1f49e1d3b1096436542e9a7f3e083ad64a8990/lerugray/generalstaff"
fundingLinks: ["GITHUB:https://github.com/lerugray"]
---

# GeneralStaff

## In plain English

GeneralStaff lets you describe, in plain words, the software you want, then puts AI to work building it while you stay in charge. The catch with letting AI write code on its own is that it tends to report a job as finished when it isn't. GeneralStaff stops that. Before any work is accepted it has to pass a check: the tests must pass, real changes must exist, and a second AI has to confirm the work matches what was asked. If it fails, the work is thrown out instead of kept, and you can read a full record of everything the AI did.

The maintainer is a game designer with no coding background. He builds and runs GeneralStaff by directing AI in plain English rather than writing the code himself. The craft is in structuring the work and verifying it until you can trust the result. GeneralStaff itself was built that way.

**Verification-gate discipline for autonomous coding agents.**
**Your code. Your keys. Your audit log.**

## The wedge

Let an agent attempt bounded work. Deterministically reject changes that violate scope or fail project-authored evidence. Preserve everything needed to audit the decision.

The gate is code, not a prompt. Every…

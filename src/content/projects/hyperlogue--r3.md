---
repo: "hyperlogue/r3"
name: "r3"
description: "r3 - Review. Revise. Resolve. A code review tool that runs on your machine and sparks joy ✨ when reviewing AI-generated code and docs."
readmeQualityOk: true
url: "https://github.com/hyperlogue/r3"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["ai-coding", "ai-pair-programming", "code-review", "diff", "feedback-loop", "human-in-the-loop"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-06-29T18:35:49Z"
lastCommitAt: "2026-07-12T06:18:11Z"
lastReleaseAt: "2026-07-10T09:53:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["rickye26"]
openGraphImageUrl: "https://opengraph.githubassets.com/38abb2672ade81d6eb189aed789b2c94b0f49677307ce35109f628e60e098ee1/hyperlogue/r3"
---

</p>

<h1 align="center">r3: Review. Revise. Resolve.</h1>

</p>

r3 is a review tool for the diffs and docs produced by your coding agents, running
locally with a web interface. You leave feedback pinned to the exact line or
quote it's about, and track each comment to resolution.

r3 fills a gap the chat box can't. Say your agent writes a long planning doc and
you want to fix a handful of things. In a chat you copy-paste each passage to
quote it, type your feedback, then lose track across turns of what's been handled.
Instead of working in a linear, unstructured chat stream, r3 works like the code
review tools you're used to, but just for you and your agents, and it runs fully
locally.

  <video src="https://github.com/user-attachments/assets/0c1aefaf-0229-49e7-a4dc-e660dc0214f6" width="760" muted controls></video>
</div>

## Workflow

The point of r3 is a tight, copy-paste-free review loop between you and an agent.

```mermaid
sequenceDiagram
    participant A as Agent
    participant S as r3 server
    participant U as You (browser)

    A->>S: [1] `r3 create` — opens a review, shares the URL
    loop until you Approve or Abandon
        A->>S: [2] `r3 watch` (blocks for…

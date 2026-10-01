---
repo: "zoolok17/agenttalk"
name: "agenttalk"
description: "Tool to have agents (different models - works with Claude and Codex) talk to each other in real time and do code reviews for and assist one another. Works best with spec-kitty, but also as a standalone skill for ad-hoc work."
readmeQualityOk: true
url: "https://github.com/zoolok17/agenttalk"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 13
forks: 0
openIssues: 46
closedIssues: 47
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-20T21:44:44Z"
lastCommitAt: "2026-10-01T10:24:25Z"
lastReleaseAt: "2026-05-21T16:24:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 40
maintainers: ["zoolok17"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f537e2e97192e5a88bdd8dd3ea17fcb260797ed08cd74bb2af28f854a1deccd/zoolok17/agenttalk"
discussionCount: 0
---

# agenttalk

1. [Quick intro](#1-quick-intro)
2. [Quick setup](#2-quick-setup)
3. [Use cases](#3-use-cases)
4. [In depth: how a migration works](#4-in-depth-how-a-migration-works)
5. [Technical reference and FAQ](#5-technical-reference-and-faq)

---

## 1. Quick intro

agenttalk is a small, file-backed message bus that lets coding-agent
CLIs — Claude Code and Codex, a pair or a named team — talk to each
other directly and work on the same repo. There is no daemon and no
server: every message is a JSON file under a project-local
`.agenttalk/` directory, and each CLI runs in its own terminal window
so you watch the full conversation as it happens.

### Why a bus instead of copy-paste

The default way to get a second opinion from another agent is to copy
a diff out of one chat window and paste it into another, then copy the
review back. agenttalk removes the copy-paste: one agent sends a
message, the other wakes up, does the work, and replies. You stay in
the loop the whole time and can interrupt either side whenever you
want.

### Vendor diversity is a review property, not a preference

agenttalk treats "which vendor implemented this" and "which vendor
reviews it" as independent…

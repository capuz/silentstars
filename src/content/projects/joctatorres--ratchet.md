---
repo: "joctaTorres/ratchet"
name: "ratchet"
description: "BYOA light weight Agent harness that ensures alignment end-to-end"
url: "https://github.com/joctaTorres/ratchet"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["agent-harness", "agent-orchestration", "agent-workflow", "bdd", "byoa", "harness-engineering", "specs"]
stars: 9
forks: 0
openIssues: 5
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-05T13:09:04Z"
lastCommitAt: "2026-06-23T23:27:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 27
maintainers: ["joctaTorres"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e3a284183123b98bbe13cf353340ae485dbb8370ff757407f2e68988ba02ce0/joctaTorres/ratchet"
---

</p>

<h1 align="center">ratchet</h1>

**AI-native, BDD-flavored spec-driven development.** A lightweight CLI that lets you and your coding agent agree on *behavior* — written as executable [Gherkin](https://cucumber.io/docs/gherkin/) — before any code is written, then drive the change from proposal to merged spec.

ratchet keeps a lean, behavior-first model: every change is just **two artifacts** — feature files and a plan — and completed work ratchets forward into a permanent, living feature store.

```
You: /rct:propose add dark mode
AI:  Created .ratchet/changes/add-dark-mode/
     ✓ features/theming/dark-mode.feature   — behavior as Given/When/Then
     ✓ plan.md                              — why, what, design, tasks
     Ready for implementation.

You: /rct:apply
AI:  ✓ 1.1 Add theme context provider
     ✓ 1.2 Wire up the toggle + persistence
     All tasks complete.

You: /rct:archive
AI:  Synced features → .ratchet/features/theming/dark-mode.feature
     Archived to .ratchet/changes/archive/2026-06-05-add-dark-mode/
```

---

## Why ratchet?

AI coding assistants are powerful but unpredictable when the spec lives only in chat history. ratchet adds a thin spec layer so…

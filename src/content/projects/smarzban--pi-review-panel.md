---
repo: "smarzban/pi-review-panel"
name: "pi-review-panel"
description: "Multi-model review panel for pi coding agents"
readmeQualityOk: true
url: "https://github.com/smarzban/pi-review-panel"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-08-13T08:25:27Z"
lastCommitAt: "2026-11-16T11:50:49Z"
lastReleaseAt: "2026-10-26T17:25:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 44
maintainers: ["smarzban"]
openGraphImageUrl: "https://opengraph.githubassets.com/610a6169496e15352e5814506abac74f0786312b022b4e249cdeb4a980449673/smarzban/pi-review-panel"
fundingLinks: ["GITHUB:https://github.com/smarzban"]
---

# Review panel

One model reviewing your PR is an opinion.

A **panel** is several exact models, on one pinned snapshot, that can report
findings only through a structured channel, and a tool that is **forbidden**
from saying the change is good. It reviews a committed change.

Most AI reviewers try to be the judge. They score the diff. They invent
agreement. They print “ready to merge.” That is why you stopped trusting them.

Review panel does not judge. It seats the models you named, runs the lenses the
change warrants, and hands you evidence. You keep or skip. You fix. It verifies
the keep list. **You merge.**

One PR with two fix rounds. Each verify compares only the commits since the last
round. The final check runs once, over the whole change, before the close-out card.

## Why this, not another “please review this”

**Nothing else in this stack is a panel.** A chat review is prose. A
single-model CLI is one voice plus a correctness score. CI is the suite —
reviewers here cannot run it, and they must not pretend they did.

What you get instead:

- **Several models, not one.** You pin exact `provider/model` seats. A dead
  seat is lost coverage, never a silent empty pass.
-…

---
repo: "breferrari/vigia"
name: "vigia"
description: "A live diff monitor for the terminal pane beside your coding agent. Built to stay open, not opened once per review."
readmeQualityOk: true
url: "https://github.com/breferrari/vigia"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai-agents", "developer-tools", "diff", "git", "ratatui", "rust", "terminal", "tui"]
stars: 15
forks: 2
openIssues: 74
closedIssues: 192
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-29T22:43:33Z"
lastCommitAt: "2026-09-10T08:20:21Z"
lastReleaseAt: "2026-08-16T17:12:21Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 94
undervaluedScore: 52
maintainers: ["breferrari", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a291224859431917f5a134ac533c46a57c0c0788847ef01ab2512348d736e360/breferrari/vigia"
fundingLinks: ["GITHUB:https://github.com/breferrari", "KO_FI:https://ko-fi.com/brennoferrari"]
discussionCount: 0
---

### A live diff **monitor** for your terminal.

*Portuguese: a watchman, the one who keeps watch. At sea, also a porthole.*

**Your agent writes in one pane. `vigia` watches in the pane beside it.**

Leave it open. It follows what lands and asks nothing.

</div>

---

## 🔭 Why

An agent edits **fast**, **wide**, and while you are reading something else. The scrollback tells you what it *said* it did. `vigia` shows you what actually landed, continuously, without being touched.

|  |  |
|---|---|
| 🤖 **Built for the pane beside the agent** | Zero input required. It follows the newest change and scrolls to it on its own |
| 🪶 **Cheap enough to leave open for a week** | Zero wakeups while idle, under 5% memory drift over 24 hours |
| 🎯 **The diff, and nothing else** | No branches, no commits, no stash list, no staging *actions*. One mode, the note box, which you open with a click and leave with `Esc`; outside it `vigia` has toggles and no key ever changes meaning, so there is no state you end up in by accident |
| 📐 **Fits half a laptop screen** | Legible at 40 columns, because that is the actual pane you have |
| ⌨️ **Nothing to learn first** | `?` draws every gesture the pane…

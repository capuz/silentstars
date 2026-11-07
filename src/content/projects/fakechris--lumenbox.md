---
repo: "fakechris/lumenbox"
name: "lumenbox"
description: "A multi-agent orchestrator with a remote Docker box and Linux computer-use — one X11 desktop per agent, watchable and takeable-over."
readmeQualityOk: true
url: "https://github.com/fakechris/lumenbox"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-21T07:50:27Z"
lastCommitAt: "2026-11-07T16:11:37Z"
lastReleaseAt: "2026-10-03T06:11:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 62
maintainers: ["fakechris", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f79fe097fd81225aa4d3e3b33af0d622a43ac8709393af70a45f3219323a7a8/fakechris/lumenbox"
---

Your own team of AI agents, each with a real computer to work on — reached from your desktop and your chat apps, taken over at any moment, and believed on the record, not on its word.

---

LumenBox gives you a small team of agents — each with a name, a memory, its own desktop and a
shell — on a Linux "box" you can watch and take over at any moment. You talk to them in the app
or from Feishu and DingTalk; they read documents, browse, write code, run it, and keep a task
board of what they owe you. How that differs from a coding-agent CLI or a hosted agent platform
is one table in [the product spec](https://github.com/fakechris/lumenbox/blob/HEAD/docs/02-product.md#11-how-it-differs).

## What it believes · 设计理念

LumenBox is built around four questions: on which machine an agent works, who should do a piece
of work, whether it may, and why anyone should believe it when it says "done". Each has one place
where it is answered.

LumenBox 围绕四个问题设计：agent 在哪台机器上做事，一件事该谁做，它能不能做，它说"做完了"时凭什么信。每个问题只在一处回答。

- **Write the record before the capability.** What an agent actually did is kept as data, not as
  its summary of itself; a capability without a record gets claimed, never proven.…

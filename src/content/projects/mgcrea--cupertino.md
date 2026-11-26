---
repo: "mgcrea/cupertino"
name: "cupertino"
description: "MCP servers for the Apple apps on your Mac — one Full Disk Access grant, held by a signed app instead of your editor"
readmeQualityOk: true
url: "https://github.com/mgcrea/cupertino"
homepage: "https://cupertino.mgcrea.io"
language: "TypeScript"
languages: ["TypeScript", "Swift"]
languagePcts: [44, 37]
topics: ["ai-agents", "apple", "apple-calendar", "apple-mail", "apple-notes", "apple-reminders", "applescript", "claude", "imessage", "jxa"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-21T08:05:59Z"
lastCommitAt: "2026-11-26T15:26:00Z"
lastReleaseAt: "2026-08-26T09:41:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 41
maintainers: ["mgcrea"]
openGraphImageUrl: "https://opengraph.githubassets.com/99881e1985eee84091178b29acd9f7d38e0ebfd0aee37c1facdf575b83118be2/mgcrea/cupertino"
---

# Cupertino

**Put your agent to work in your everyday Apple apps.**

MCP servers for the Apple apps already on your Mac, and the signed app that grants them their
permissions once instead of once each — for any agent that speaks MCP, not for one host.

> **Unofficial.** Not affiliated with Apple. These drive the apps that are already on your Mac.

## In use

> Look at how I write in my work inbox, then draft this reply in the same voice.

> Pull together everything about the Atlas launch from my mail, my notes and my calendar. What do I
> still owe people?

> Turn the action items from yesterday's client thread into reminders, due Friday.

Every one of those carries a constraint — an account, a date bound, a filter. That is the part the
naive `osascript` path answers in 74 seconds or answers wrongly, and the reason a server earns its
place: it holds what the model would otherwise re-derive every session. The measurements are in
[docs/verify.md](https://github.com/mgcrea/cupertino/blob/HEAD/docs/verify.md); what the alternatives cost is in
[docs/alternatives.md](https://github.com/mgcrea/cupertino/blob/HEAD/docs/alternatives.md).

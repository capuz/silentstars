---
repo: "margince/margince"
name: "margince"
description: "A CRM your AI agents can actually work in. And it's yours: you get the source."
readmeQualityOk: true
url: "https://github.com/margince/margince"
homepage: "https://margince.com/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [72, 24]
stars: 14
forks: 1
openIssues: 548
closedIssues: 449
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-07-04T05:03:04Z"
lastCommitAt: "2026-08-24T04:21:19Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["LarsGradion", "tinnhlt-gra", "dungbanguyen"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c1b97a2055637cfb858aff29ccb650bf61b0865d00d8109a8cb814b382de9c1/margince/margince"
---

# Margince

**A CRM your AI agents can actually work in. And it's yours: you get
the source.**

CRMs got stuck. You pay per seat, per contact, per feature. You can't
change anything without consultants. And the "AI" is a sidebar that
summarizes what you typed in yourself.

We hit that wall ourselves, so we're building Margince: a fast,
opinionated core for the 80% every sales team needs, plus a governed
agent surface so the AI you already pay for (Claude, Copilot, your own)
works inside your customer data, not next to it.

Three things matter:

**Your agents do the real work.** An agent connects over MCP or plain
REST and gets audited tools. Every action has a risk tier. 🟢 actions
(reading, drafting, normal updates) just run and get logged. 🟡 actions
(sending mail, archiving, merging, closing a deal) stop and wait for a
human to approve them. An agent never gets more rights than the human
behind it, and it can never approve its own actions. Punkt.

**You change it by changing the code.** No config screens, no metadata
engine, no ceiling. Need a custom field or a workflow? That's a normal
code change in your own copy, protected by types, tests, and extension
seams upstream never…

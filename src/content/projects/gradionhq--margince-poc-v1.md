---
repo: "gradionhq/margince-poc-v1"
name: "margince-poc-v1"
description: "A CRM your AI agents can actually work in. And it's yours: you get the source."
readmeQualityOk: true
url: "https://github.com/gradionhq/margince-poc-v1"
homepage: "https://margince.com/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [76, 21]
stars: 12
forks: 1
openIssues: 339
closedIssues: 235
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2026-07-04T05:03:04Z"
lastCommitAt: "2026-08-18T04:07:36Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 45
maintainers: ["LarsGradion", "dungbanguyen", "tinnhlt-gra"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba60a1d8312e7810b64788679193eed6a40fb102dc7911125d4cf0d30e66449d/gradionhq/margince-poc-v1"
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

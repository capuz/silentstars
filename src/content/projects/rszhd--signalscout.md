---
repo: "rszhd/signalscout"
name: "signalscout"
description: "Finds public conversations from people describing a problem your product solves."
readmeQualityOk: true
url: "https://github.com/rszhd/signalscout"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-08T05:34:59Z"
lastCommitAt: "2026-09-19T08:14:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["rszhd"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdea780e428b48f705695750451fd58f37e55da252046a489110d28e2646e309/rszhd/signalscout"
---

# SignalScout

**Open-source AI intent monitoring.** Find the people publicly talking about
the problem your product solves.

Traditional social listening answers *who mentioned my brand*. SignalScout
answers a different question:

> Who is publicly describing a problem my product can solve?

You describe what you sell, who buys it, and what problems you solve.
SignalScout searches Reddit, X, LinkedIn, YouTube, TikTok and Instagram — posts
and the comments underneath them — and uses a model to read each conversation
and score it: relevance, problem fit, ICP fit, buyer intent, urgency. What you
get is not a dashboard. It is an inbox of people who might need what you build.

---

## How it works

```
Reddit    ─┐
X         ─┤
LinkedIn  ─┤
YouTube   ─┼─► posts and comments ─► keyword ─► embedding ─► triage ─► scoring
TikTok    ─┤                             the three cheap stages    the good model
Instagram ─┘                                                                 │
                                                     relevance · ICP · intent
                                                                             │…

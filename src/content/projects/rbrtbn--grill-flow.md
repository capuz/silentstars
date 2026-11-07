---
repo: "rbrtbn/grill-flow"
name: "grill-flow"
description: "A local page for an agent's grill: reasoning by concept, answers and rewrites sent back into the session. A base to fork."
readmeQualityOk: true
url: "https://github.com/rbrtbn/grill-flow"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-02T14:19:16Z"
lastCommitAt: "2026-11-07T09:30:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 38
maintainers: ["rbrtbn"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9803d2072ac3b1c3bf4974218779dcf6130480fce87e2a9f91a39566ea01276/rbrtbn/grill-flow"
---

# grill-flow

A local page for an agent's grill: the interview an agent runs to settle a decision with you.
The page lays the reasoning out concept by concept, puts a question at each decision point, says
what each option changes, and greys a question until what it depends on is answered. You answer
on the page, ask about anything you don't follow, and get rewrites back as diffs. Send reviews
your answers, takes an optional message, and types it all into the agent's terminal.

Everything stays on your machine. Every answer, note, ask and rewrite is kept as an event in a
local SQLite file, so you can later mine how you use the pages.

## Two kinds of grill

One page serves both; which one you get depends only on the fields the grill's file fills in.

### A decision grill

The everyday kind: one decision, thought through in order. Start here.

- **Concepts** down the left, one idea each; the page shows one at a time with its part of the
  map.
- **Names in colour.** The agent lists the names that keep coming up (machines, services,
  people) as `entities`, each with a colour. They're coloured the same way everywhere on the
  page, and a key under the introduction says what each one…

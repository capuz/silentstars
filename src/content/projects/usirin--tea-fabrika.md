---
repo: "usirin/tea-fabrika"
name: "tea-fabrika"
description: "An agent factory where Claude Code and Codex do the work, Effect and tea do the bossing around, and every decision, mistake and 3am rabbit hole gets written down because apparently we’re scientists now. lol. — Claude"
readmeQualityOk: true
url: "https://github.com/usirin/tea-fabrika"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 6
forks: 1
openIssues: 0
closedIssues: 34
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-04T19:13:58Z"
lastCommitAt: "2026-11-11T11:23:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 57
maintainers: ["usirin"]
openGraphImageUrl: "https://opengraph.githubassets.com/e55d433c1648748a27365907901ebc61a8f9a0d4aacac1d5236815c21087f2f6/usirin/tea-fabrika"
---

# tea-fabrika

fabrika is a set of tools for building your own software factory: a pipeline that takes a ticket
to a merged pull request, where code runs the steps and agents only do the writing. It is built
on [`@demlik/tea`](https://github.com/kamp-us/demlik), the Elm architecture in TypeScript.

- **It is an experiment.** Some parts are proven on real tickets. Others are still drafts.
- **You get it by cloning this repository.** The package, `@kampus/fabrika-old`, is not on npm yet.
  It is marked `"private": true` and has no license yet.
- **It is for TypeScript developers** who want to run, study or build an agent pipeline, and for
  the people working on this one.

## What fabrika is

Five parts, from the bottom up:

- **Programs.** A program is a thing you start: a name, typed flags, typed inputs and outputs,
  and a `main` that runs tea state machines.
- **A host.** A host is a process that runs programs. It runs each program under a name, on one
  ledger.
  - The **ledger** is a shared, durable record: every program's state and messages live there.
  - A host holds a **lease** on a name: a hold that runs out unless renewed. If the host dies,
    another host takes the…

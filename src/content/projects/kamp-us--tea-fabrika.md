---
repo: "kamp-us/tea-fabrika"
name: "tea-fabrika"
description: "An agent factory where Claude Code and Codex do the work, Effect and tea do the bossing around, and every decision, mistake and 3am rabbit hole gets written down because apparently we’re scientists now. lol. — Claude"
readmeQualityOk: true
url: "https://github.com/kamp-us/tea-fabrika"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 7
forks: 1
openIssues: 1
closedIssues: 35
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2026-10-04T19:13:58Z"
lastCommitAt: "2026-11-15T10:56:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 55
maintainers: ["usirin"]
openGraphImageUrl: "https://opengraph.githubassets.com/0857d18688a0fc4b3a9105d73e0ee056e7da358253d10a26882f55d304275462/kamp-us/tea-fabrika"
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

---
repo: "Crystal-Matter/matter"
name: "matter"
description: "A complete Crystal lang implementation of the Matter protocol specification (https://buildwithmatter.com). Includes full support for controller, device, commissioning, secure communications, device types, and cluster definitions."
readmeQualityOk: true
url: "https://github.com/Crystal-Matter/matter"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [97]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2023-10-30T05:03:26Z"
lastCommitAt: "2026-10-22T08:51:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["stakach"]
openGraphImageUrl: "https://opengraph.githubassets.com/5535167a6e024beda74edaaff97e1d771829bab6d07fb3106fc98e298c07e065/Crystal-Matter/matter"
---

# Matter

Matter protocol implemented in pure Crystal Lang.

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     matter:
       github: Crystal-Matter/matter
   ```

2. Run `shards install`

## Architecture

The library is a stack of layers, each one depending only on the layers below it.
`src/matter.cr` requires them in that order, one aggregator per subsystem, with no globs.

| Layer | Namespace | What lives there |
|---|---|---|
| Device | `Matter::Device` | the runtime and the declarative DSL: lifecycle, advertisements, persistence |
| Node | `Matter::Node`, `Matter::Endpoint`, `Matter::EventJournal` | endpoints, the clusters they own, the flat cluster index, the event rings |
| Clusters | `Matter::Cluster` | Matter 1.6 clusters built on the cluster DSL, plus `Cluster::Registry` |
| Protocol | `Matter::Protocol` | `MessageHandler` and the objects it routes through, the interaction model handler, subscriptions |
| Commissioning | `Matter::Commissioning` | the failsafe, commissioning window and credential services |
| Session | `Matter::Session` | PASE and CASE, `SecureContext`, `SecureMessage` framing |
| Transport | `Matter::Transport`…

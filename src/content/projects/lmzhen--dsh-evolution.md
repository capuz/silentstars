---
repo: "lmzhen/dsh-evolution"
name: "dsh-evolution"
description: "Hermes-inspired agent self-evolution plugin family, purpose-built for DeepSeek Harness"
readmeQualityOk: true
url: "https://github.com/lmzhen/dsh-evolution"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["agent", "deepseek", "dsh", "self-evolution", "hermes-inspired", "dsh-plugin"]
stars: 11
forks: 5
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-16T10:05:03Z"
lastCommitAt: "2026-11-14T21:31:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["lmzhen"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5e743f6a700dfc0e34fb2fb970d66bcfa99202d9475449a5fee1c94da6d2ea1/lmzhen/dsh-evolution"
---

# dsh-evolution

## What is this plugin for?

The plugin is designed to generate skills automatically and manage their full lifecycle, with an emphasis on retaining capabilities that are specific to a user and a project. It is task-oriented: the model builds and maintains a private set of skills for the user's environment, preferences and working procedures, improving its fit for those tasks.

That lifecycle includes creation, discovery, use, revision after review, restructuring, merging, archiving and restoration. These are independent capabilities rather than stages every skill must pass through. The plugin also provides budgeted memory for project facts and user preferences across sessions.

It does not modify or train the model, and it does not provide a hosted model service. DSH's configured model performs the semantic work, while the plugin's write gates, snapshots, history and approval mechanisms constrain changes and recovery.

## Platform line

The family targets DeepSeek Harness `0.2.2-rc.1` only. Published packages declare the `^0.2.2-rc.0` peer range and the `>=0.2.2-rc.0 <0.2.3-0` engine range. The single host edge is the `evolutionPlatform` service; features reach it…

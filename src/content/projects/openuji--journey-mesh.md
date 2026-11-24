---
repo: "openuji/journey-mesh"
name: "journey-mesh"
description: "Model-driven execution and validation of cross-service user journeys, with pluggable model bindings, automation adapters, application drivers, interaction profiles, and evidence observers."
readmeQualityOk: true
url: "https://github.com/openuji/journey-mesh"
homepage: "https://journey-mesh.openuji.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["user-journey", "user-journey-testing"]
stars: 7
forks: 1
openIssues: 10
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-28T20:44:39Z"
lastCommitAt: "2026-11-24T14:06:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 43
maintainers: ["zavalit"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f1833fc7d97895dbc822a9e66085ac1ae15104d3f9cabb8e4514873a1a8b08f/openuji/journey-mesh"
---

# journey-mesh

Composable, model-driven execution and checking of user journeys. Choose how a
journey is described, how its steps are executed, and which evidence is collected
by plugging compatible components together.

In practice Journey Mesh is a configurable, multi-adapter, sequential journey
runner: one test composes several journeys (for example Alice in a browser, Bob
on Android) into one ordered plan, runs it once per interaction profile, and
saves outcomes and evidence in one run record.

## Problem

Healthy components do not guarantee that a user can complete a journey. The
journey can fail within an application or across service boundaries, through
interaction, account mapping, discovery, or delivery. Journey Mesh makes the
intended journey executable and records what happened against its model.

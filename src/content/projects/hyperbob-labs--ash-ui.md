---
repo: "hyperbob-labs/ash_ui"
name: "ash_ui"
description: "Model your UI with Ash."
readmeQualityOk: true
url: "https://github.com/hyperbob-labs/ash_ui"
homepage: "https://hexdocs.pm/ash_ui"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [91]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-11-02T06:24:48Z"
lastCommitAt: "2026-11-03T10:52:27Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 14
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ab9d4eee7e234387860461022af997d078863e2723cb1c594acae77ea0453a64/hyperbob-labs/ash_ui"
---

# AshUi

**Model your UI with Ash.** No more parallel vocabularies for the business
domain and your UI.

With AshUi you build user interfaces out of ordinary
[Ash](https://ash-hq.org/) resources.

You already have every part of a UI model in Ash. You give a resource typed
state, identity, relationships to the data you want to show, calculations
that derive values, actions that change state under validations and
policies, and notifications for when something changes. With AshUi, one
idea is added: **you model a screen as a resource, and you give each browser
session its own row.** You get everything else from that idea.

- You keep the screen's UI state (selection, draft text, open panels, sort
  order) in the row's attributes.
- You load the data on screen through the row's relationships, aggregates,
  and calculations.
- You write the view as the row's `:view` calculation.
- Your users trigger the row's actions when they click, type, or submit.
- When someone changes a related record, we reload the row and recalculate
  the view for every user looking at it.

You don't learn a component system, a template language, a store, an
event-handler layer, or any subscription wiring. You…

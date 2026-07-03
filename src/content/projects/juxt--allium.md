---
repo: "juxt/allium"
name: "allium"
description: "Velocity through clarity"
url: "https://github.com/juxt/allium"
homepage: "https://juxt.github.io/allium/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 421
forks: 23
openIssues: 2
closedIssues: 25
watchers: 11
contributors: 84
recentReleases: 0
createdAt: "2026-01-25T19:49:03Z"
lastCommitAt: "2026-07-03T12:22:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 26
maintainers: ["henrygarner", "yavorpanayotov", "yenda"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1142002519/944f69b5-e28c-47cc-be5b-62893806bf58"
---

# Allium

*Velocity through clarity*

---

Feed your AI something healthier than Markdown. [juxt.github.io/allium](https://juxt.github.io/allium/)

## What this is

Allium is a skill for clarifying intent during agentic engineering. The LLM builds and maintains a behavioural specification alongside your code, capturing what the system should do in a form that persists across sessions. Paired with a CLI that validates syntax and draws semantic inferences, it catches design gaps, surfaces implications you missed and generates tests from the formal behaviours of your system.

## How it works

You keep a `.allium` file alongside your code describing what the system should do — entities and their shapes, and rules in the form *when* an event happens, *requires* these preconditions hold, *ensures* these outcomes follow — while deliberately leaving out how it's done. The spec is the primary artefact; the code that implements it is secondary. Because the structure is explicit rather than prose, contradictions surface on their own: two rules with incompatible preconditions expose the conflict without anyone needing to be clever enough to spot it.

Two forces feed the spec, and one loop…

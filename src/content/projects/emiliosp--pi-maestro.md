---
repo: "emilioSp/pi-maestro"
name: "pi-maestro"
description: "Pi extension to manage a spec driven multiagent development workflow"
readmeQualityOk: true
url: "https://github.com/emilioSp/pi-maestro"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 49
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-18T19:55:25Z"
lastCommitAt: "2026-11-17T12:21:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 32
maintainers: ["emilioSp"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a253d601b78ebd7b055e86d1ba38e6bf07cf20fbc43fa6ab2202a5a4bee5604/emilioSp/pi-maestro"
---

# pi-maestro

Pi extension for writing a `spec` and optionally implementing it through a spec-driven multiagent workflow.

## The idea

Read [The Pi Maestro Manifesto](https://github.com/emilioSp/pi-maestro/blob/HEAD/MANIFESTO.md) for the motivation behind the project.

`Maestro` has two goals:

1. Help the `owner` write and approve a `specification` (`spec`) for one reversible change.
2. Implement the approved `spec` through a multiagent workflow.

The `owner` can use `Maestro` only to write and approve a `spec`, leaving implementation to another workflow, or to write the `spec` and implement it within `Maestro`.
`Spec` preparation and approval are required. The entire implementation stage is optional, and each of its phases is optional too:

1. The `builder` implements the approved `spec`.
2. The independent `verifier` checks every `acceptance criterion`.
3. The `simplifier` refactors accepted code without changing behavior.

Disabling the `builder` skips the entire implementation stage and scoring. With the `builder` enabled, the `verifier`, `simplifier`, and `scorer` can be disabled
independently. 

In existing configurations, `builder` and `verifier` default to enabled;…

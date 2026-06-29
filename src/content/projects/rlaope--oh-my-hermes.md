---
repo: "rlaope/oh-my-hermes"
name: "oh-my-hermes"
description: "Oh My Hermes (OMH) — Makes Hermes Agent feel best. Multi-Agent orchestration, Loop Engineering, Planning and Handoff."
url: "https://github.com/rlaope/oh-my-hermes"
homepage: "https://rlaope.github.io/oh-my-hermes/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 36
forks: 1
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-06-03T13:00:34Z"
lastCommitAt: "2026-06-29T07:22:58Z"
lastReleaseAt: "2026-06-18T04:18:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 46
maintainers: ["frirenai"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9aeb22269a067bc4d1ac6228b5659c51fc0b8f114b895d6d8b362bd1f4b9981/rlaope/oh-my-hermes"
---

# oh-my-hermes

</p>

  <strong>Install once. Keep your Hermes workflow. Let OMH make the next step safe.</strong>
  <br>
  <em>Chat-first skills, workflow contracts, status cards, and handoffs that fit existing Hermes setups without breaking them.</em>
</p>

</p>

Most people skip the docs. **oh-my-hermes** is built for that reality: install
it, keep working in [Hermes](https://github.com/NousResearch/hermes-agent), and
let the added skills, contracts, and status cards make the next action obvious
without replacing your existing setup.

The product is not "more CLI commands." The `omh` command is setup, repair,
doctor, verifier, and wrapper/backend infrastructure. For
[Hermes](https://github.com/NousResearch/hermes-agent) wrappers and routers,
that CLI contract is a first-class backend surface; for normal users, the main
experience is still chat:

```text
user says a plain request in Hermes
  -> OMH routes it to the right skill/playbook/profile
  -> Hermes explains the next action and evidence boundary
  -> coding is handed off to the selected runtime only when the user or wrapper accepts that path
```

OMH exists for the gap between installation and real use: config checks,…

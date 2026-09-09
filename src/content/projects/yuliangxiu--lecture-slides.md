---
repo: "YuliangXiu/lecture-slides"
name: "lecture-slides"
description: "HTML lecture slides skill: 04-magazine editorial style + presenter view (dual progress bars) + fully offline fonts/media localization. Agent skill for WorkBuddy/Claude-style assistants."
readmeQualityOk: true
url: "https://github.com/YuliangXiu/lecture-slides"
language: "JavaScript"
languages: ["JavaScript", "Python", "HTML"]
languagePcts: [34, 29, 27]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-31T14:21:38Z"
lastCommitAt: "2026-09-09T08:18:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 16
maintainers: ["YuliangXiu"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b8f53872a18805d27d629489ce1c85773806ec712958917647b0248dd8996d5/YuliangXiu/lecture-slides"
---

# lecture-slides

Four independent agent skills for building, polishing and deploying **HTML lecture slides**:

| Skill | Directory | What it does |
|---|---|---|
| `lecture-deck-pipeline` | [`lecture-deck-pipeline/`](https://github.com/YuliangXiu/lecture-slides/blob/HEAD/lecture-deck-pipeline/) | Builds and iterates a course deck project end to end: fixed-stage engine + Python content modules, a single-source bilingual speaker-script JSON, presenter view, and the `play.command` launcher. Owns the directory contract, build/acceptance commands and the engine's authoring rules. |
| `lecture-slides` | [`lecture-slides/`](https://github.com/YuliangXiu/lecture-slides/blob/HEAD/lecture-slides/) | Builds decks in one visual system (04-magazine editorial style) with a Keynote-style presenter view and fully offline, self-contained output. |
| `polish-slides` | [`polish-slides/`](https://github.com/YuliangXiu/lecture-slides/blob/HEAD/polish-slides/) | Runs the feedback loop on an existing deck project: reads a queue of unsolved review comments, routes them to the deck and its bilingual speaker script, rebuilds, verifies, and closes the resolved items. |
| `deploy-slides` |…

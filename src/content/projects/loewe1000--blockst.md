---
repo: "Loewe1000/blockst"
name: "blockst"
description: "A Typst package for creating Scratch-style code blocks with pure curves and style."
readmeQualityOk: true
url: "https://github.com/Loewe1000/blockst"
homepage: "https://loewe1000.github.io/blockst/"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [46, 22]
stars: 15
forks: 4
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 9
recentReleases: 3
createdAt: "2025-10-22T10:49:16Z"
lastCommitAt: "2026-11-14T22:01:31Z"
lastReleaseAt: "2026-09-27T20:17:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 81
maintainers: ["Loewe1000", "lkoehl"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1166f7b363759d69676e0aa66cf31c5a4cba128a53364cab6765917ffbc5c03/Loewe1000/blockst"
---

# Blockst — Block-based programs in Typst

Blockst renders block-based programs in Typst documents, each drawn the way
its editor draws it — for worksheets, tutorials, teaching material and
anything else where block code has to appear in print or online.

| Editor | Function | What you get |
| --- | --- | --- |
| **Scratch 3** | `scratch()` | the Scratch look in 26 languages, right-to-left included; turtle graphics that run the program; import of real `.sb3` projects — [Scratch](#scratch) |
| **Blockly** | `blockly()` | today's flat Blockly and the pre-2019 look, with profiles for the Jugendwettbewerb Informatik (jwinf.de) and its robot and turtle blocks, 24 languages — [Blockly and jwinf](#blockly-and-jwinf) |
| **MakeCode** | `makecode()` | the micro:bit and Calliope mini editors' blocks, LED matrix and melody editor included, in all 36 editor languages — [MakeCode](#makecode) |
| **NEPO** | `nepo()` | Open Roberta Lab's Calliope mini and micro:bit blocks — [NEPO (Open Roberta)](#nepo-open-roberta) |

All four share one text notation: a block per line, `(…)` for a value,
`[… v]` for a dropdown, `<…>` for a condition, indentation and an end marker
for the body of a loop. Typst…

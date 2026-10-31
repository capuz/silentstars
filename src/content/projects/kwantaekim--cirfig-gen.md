---
repo: "KwantaeKim/cirfig_gen"
name: "cirfig_gen"
description: "AI-driven analog circuit figure generator. Ask Claude Code or Codex for a circuit and get one SVG at final size."
readmeQualityOk: true
url: "https://github.com/KwantaeKim/cirfig_gen"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 40
forks: 3
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-08T14:07:54Z"
lastCommitAt: "2026-10-31T09:51:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 8
maintainers: ["KwantaeKim"]
openGraphImageUrl: "https://opengraph.githubassets.com/c63e100eb561a217685bcf26f9f6932433c4d07b2873ed70ad366c3144acbec1/KwantaeKim/cirfig_gen"
---

# <img src="https://raw.githubusercontent.com/KwantaeKim/KwantaeKim.github.io/main/favicon-rounded.png" height="40" align="top" alt=""> cirfig_gen

Clean analog circuit schematics for slides, drawn by a coding agent.

You describe a circuit in plain words. Claude Code or Codex lays it out from a fixed palette
of symbols, checks it against the drawing rules, and gives you one SVG file to drop into
PowerPoint, Keynote or any slide tool.

## Why one SVG per circuit

If a schematic is built from separate pictures and lines in PowerPoint, the PDF export shifts
every object by its own small amount, up to about 0.4 pt. Wires and symbol leads then no longer
line up. A single SVG per circuit keeps every line exactly aligned, on screen and in the PDF.

## How to use

1. Clone the repository and open the folder in Claude Code or Codex:

   ```
   git clone https://github.com/KwantaeKim/cirfig_gen.git
   cd cirfig_gen
   claude        # or: codex
   ```

2. Ask for a circuit, for example:

   > Draw a PMOS-input current-mirror OTA.

   > Draw an NMOS current mirror with a reference current source and an output terminal.

   The agent picks up its instructions from `AGENTS.md` by itself. You…

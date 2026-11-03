---
repo: "absmach/synth"
name: "synth"
description: "Open-source circuit compiler for engineers and AI agents"
readmeQualityOk: true
url: "https://github.com/absmach/synth"
homepage: "https://www.absmach.eu/synth"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 26
forks: 4
openIssues: 101
closedIssues: 78
watchers: 1
contributors: 6
recentReleases: 3
createdAt: "2026-09-09T14:46:27Z"
lastCommitAt: "2026-11-03T10:52:08Z"
lastReleaseAt: "2026-10-09T12:33:50Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 46
maintainers: ["JeffMboya", "rodneyosodo", "SammyOina"]
openGraphImageUrl: "https://opengraph.githubassets.com/259d83b091262660c22bb584a266f133485b27f018bd4677268b96913757905f/absmach/synth"
---

### Design circuit boards as code.

Turn text-based circuit designs into KiCad schematics, PCB layouts, and bills of materials.

Open source. Built for engineers and AI agents.

[Quick Start](#quick-start) · [Features](#features) · [Examples](#examples) · [Documentation](https://absmach.eu/docs/synth/user-guide/quick-start/) · [Contributing](#contributing)

## Introduction

Synth is an open-source compiler for electronic circuit boards. Describe your components, their connections, and board constraints in **SynthSpec**, a text-based design language. Synth checks the design and generates KiCad schematics, PCB layouts, and a bill of materials.

This brings a software development workflow to hardware: edit designs in your usual editor, review changes in Git, and run automated checks. Your `.synth` files capture the design intent; the schematic and board layout are generated outputs you can inspect in KiCad.

Engineers can use Synth from the command line. AI agents can use its **Model Context Protocol (MCP)** server to find components, validate circuits, and generate outputs through the same compiler, with structured diagnostics to guide corrections.

## Release checks

For CI and…

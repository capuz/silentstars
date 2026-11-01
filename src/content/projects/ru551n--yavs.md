---
repo: "ru551n/yavs"
name: "yavs"
description: "yavs: Yet Another VHDL Simulator, in Rust"
readmeQualityOk: true
url: "https://github.com/ru551n/yavs"
language: "Rust"
languages: ["Rust", "VHDL"]
languagePcts: [57, 38]
stars: 8
forks: 0
openIssues: 50
closedIssues: 959
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-18T13:32:34Z"
lastCommitAt: "2026-11-01T10:44:05Z"
lastReleaseAt: "2026-10-28T20:22:48Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 59
maintainers: ["ru551n"]
openGraphImageUrl: "https://opengraph.githubassets.com/f579f8b8bf606f68f9444ca0cd5d320e3378dfa3bad0cff85a539effbdcde5dc/ru551n/yavs"
discussionCount: 0
---

yavs is a VHDL simulator written in Rust, for VHDL-1993, 2008 and 2019.

## What it does

- [VHDL support](https://yavs.readthedocs.io/en/latest/language-support.html): VHDL-1993, 2008 and 2019, mixed in one project, with the IEEE packages built in.
- [VS Code debugger](https://yavs.readthedocs.io/en/latest/debugging.html): available through the [DAP protocol](https://microsoft.github.io/debug-adapter-protocol/).
- [Interactive console](https://yavs.readthedocs.io/en/latest/interactive.html): breakpoints, stepping, `examine`, `force`, `drivers`, `trace x` and `restart` at a `yavs>` prompt or in a script.
- [Live waveforms](https://yavs.readthedocs.io/en/latest/waveforms.html): [The Surfer waveform viewer](https://surfer-project.org/) follows the run and the debugger's stops. FST files for any viewer.
- [Sane error messages, Rust style](https://yavs.readthedocs.io/en/latest/troubleshooting.html)
- [Coverage](https://yavs.readthedocs.io/en/latest/coverage.html): from statements to condition combinations, with HTML and Cobertura reports and a CI gate.
- [Static analysis](https://yavs.readthedocs.io/en/latest/lint.html): `yavs lint` reports what can be proved wrong before a…

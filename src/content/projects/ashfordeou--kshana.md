---
repo: "ashfordeOU/kshana"
name: "kshana"
description: "Open, validated, reproducible PNT-resilience simulator spanning the full positioning, navigation & timing stack — orbit, clocks, INS, GNSS, integrity, resilience, lunar/cislunar & deep-space nav — plus quantum-vs-classical models. Runs as a Rust lib/CLI, Python, in-browser (WASM), an MCP server / Claude Code plugin, and a JetBrains plugin."
readmeQualityOk: true
url: "https://github.com/ashfordeOU/kshana"
homepage: "https://kshana.dev"
language: "Fluent"
languages: ["Fluent"]
languagePcts: [71]
topics: ["aerospace", "astrodynamics", "gnss", "mcp", "model-context-protocol", "navigation", "orbital-mechanics", "pnt", "positioning", "quantum-sensors"]
stars: 7
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-01T21:02:33Z"
lastCommitAt: "2026-11-06T13:20:07Z"
lastReleaseAt: "2026-06-03T13:28:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 80
undervaluedScore: 52
maintainers: ["ashfordeOU", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/48100be3b35adabd1f52ec73a60cf4d92713568e79fc968027314097cf5cbfb4/ashfordeOU/kshana"
fundingLinks: ["CUSTOM:https://ashforde.org/support"]
---

An open-source simulator for PNT (positioning, navigation and timing) resilience.

  (for example <code>kshana scenarios/holdover-test-example.toml --lang de</code>), and so do the Python, WebAssembly and MCP surfaces.
  Each name opens this README in that language, and the website is translated too (for example <a href="https://kshana.dev/de/">kshana.dev/de/</a>).
  These are machine translations that no native speaker has reviewed yet; English is the reference.
  See <a href="docs/i18n.md">Localisation</a>.</sub>

- [Rehearse the minute GNSS goes dark](#rehearse-the-minute-gnss-goes-dark)
- [What's new in 0.40](#whats-new-in-040), [What's new in 0.39](#whats-new-in-039), [What's new in 0.38](#whats-new-in-038), and [0.38 in depth](#038-in-depth): jammertest scoring, the receiver's own flags, machine inputs, timing and holdover, standards packs, LunaNet AFS, the lab round trip, kshana-bench, the observatory, exporters, optical, [space-user navigation](#space-user-navigation-gnss-ssv) and [lunar infrastructure](#lunar-infrastructure-lunar-infrastructure)
- [Kshana Studio](#kshana-studio) and every Studio page
- [Capabilities](#capabilities): the table of areas, [every scenario…

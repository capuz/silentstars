---
repo: "jurimaxam-dotcom/chemdraw-mcp"
name: "chemdraw-mcp"
description: "Draw chemistry from chat: names or SMILES → publication-ready 2D structures, reaction schemes and curved-arrow mechanisms. PNG/SVG rendered offline with RDKit. MCP server for Claude Desktop (unofficial; CDXML export optional)."
readmeQualityOk: true
url: "https://github.com/jurimaxam-dotcom/chemdraw-mcp"
homepage: "https://pypi.org/project/chemdraw-mcp/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [53, 38]
topics: ["chemdraw", "cheminformatics", "chemistry", "claude", "mcp", "mcp-server", "model-context-protocol", "molecule-visualization", "rdkit", "smiles"]
stars: 18
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-06-09T23:35:38Z"
lastCommitAt: "2026-10-02T09:59:25Z"
lastReleaseAt: "2026-10-01T00:18:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 46
maintainers: ["jurimaxam-dotcom"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5705f01d002b3499d1338665af8c3e4debcbbee8c098bfaf3ea9e20d6ac58e1/jurimaxam-dotcom/chemdraw-mcp"
---

# chemdraw-mcp

**Chat → chemical structure.** An MCP server for Claude Desktop: you describe
a molecule, a reaction or a lab result in plain words, and it draws the
figure — a print-ready PNG/SVG rendered locally with RDKit, plus an
interactive preview inside the chat. *"Draw aspirin"* is already a complete
command.

Built for pharmacy and chemistry students who spend too much time clicking
hexagons: **structures, reaction schemes, curved-arrow mechanisms and
substrate-scope figures** — the drawing a report or a slide actually asks for.

For the same lab report, also:

| | |
|---|---|
| **Lab graphics** | TLC plates, titration curves, schematic spectra, calibration lines |
| **Look up** | PubChem/GHS data sheets, expected IR bands |
| **Bench maths** | weighing and dilutions, Ph.Eur. content determination, pH and buffers |
| **Exam prep** | Anki decks with the structures rendered in |

What it costs you: one install command. Apache-2.0, no API key, no sign-up
for the server, no ChemDraw licence — you need Claude Desktop and
[uv](https://docs.astral.sh/uv/), everything else is fetched once.
Rendering runs entirely on your machine; only name resolution and the
database lookups…

---
repo: "jurimaxam-dotcom/chemdraw-mcp"
name: "chemdraw-mcp"
description: "Draw chemistry from chat: names or SMILES → publication-ready 2D structures, reaction schemes and curved-arrow mechanisms. PNG/SVG rendered offline with RDKit. MCP server for Claude Desktop (unofficial; CDXML export optional)."
readmeQualityOk: true
url: "https://github.com/jurimaxam-dotcom/chemdraw-mcp"
homepage: "https://github.com/jurimaxam-dotcom/chemdraw-mcp/releases/latest"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["chemdraw", "cheminformatics", "chemistry", "claude", "mcp", "mcp-server", "model-context-protocol", "molecule-visualization", "rdkit", "smiles"]
stars: 24
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-06-09T23:35:38Z"
lastCommitAt: "2026-10-26T18:06:27Z"
lastReleaseAt: "2026-10-02T18:59:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 47
maintainers: ["jurimaxam-dotcom"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1264484436/1160272d-6094-44e2-afc8-73f112999303"
discussionCount: 1
---

# chemdraw-mcp

**Chat → chemical structure.** Say *"draw aspirin"* in Claude Desktop and get a
correct, print-ready structure — rendered locally with RDKit, interactive right in the chat.

- **The right molecule, not a lookalike.** Names (also German trivial names), IUPAC names and SMILES resolve through OPSIN, PubChem and NCI; a pinned identity test checks 24 inputs against their InChIKey.
- **Ready for your lab report.** PNG and SVG in a consistent publication style, optional ChemDraw CDXML — no ChemDraw licence needed.
- **Understand, not just draw.** Hover a functional group to see where it sits, switch to the PubChem data sheet with GHS safety, compare structures with the differences highlighted.

**Install:** [download the Claude Desktop extension](https://github.com/jurimaxam-dotcom/chemdraw-mcp/releases/latest) (`.mcpb`, double-click) — or `uv tool install chemdraw-mcp && chemdraw-install`.
Free and open source (Apache-2.0), no API key, no sign-up.

| Without | With chemdraw-mcp |
|---|---|
| Claude describes the structure in words or writes SMILES you have to paste somewhere | the structure appears in the chat, ready to export |
| hand-drawn figures in ChemDraw or…

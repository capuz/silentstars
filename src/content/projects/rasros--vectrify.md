---
repo: "rasros/vectrify"
name: "vectrify"
description: "Vectorizes raster images (PNG/JPG) using a mix of LLMs and NSGA-II multi-objective optimization. Outputs SVG and other vector formats."
readmeQualityOk: true
url: "https://github.com/rasros/vectrify"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2025-12-11T12:50:07Z"
lastCommitAt: "2026-10-03T09:21:51Z"
lastReleaseAt: "2026-07-28T21:20:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 66
maintainers: ["rasros"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aca9b5f6f1a4b850cacbce336b9679eb9af18b4b5d905c27e87baf95addb892/rasros/vectrify"
---

# vectrify

vectrify is a local SVG editor for turning a raster image into editable vector
artwork. Alongside manual tools it offers automated operations that work
against a reference image: generate new shapes, improve existing ones, and
simplify the result. Every operation previews its result and applies it as one
undoable edit, limited to the objects and kinds of change you allow.

## Start

```bash
uv tool install "vectrify[all]"     # or: pipx install "vectrify[all]"
vectrify                            # open the editor in its own window
vectrify drawing.svg --reference original.png
vectrify --serve --port 8765        # or serve it to a browser
```

The `desktop` extra (included in `all`) opens the editor in a native window.
Without it, or with `--serve`, vectrify serves the editor on loopback and
prints the address to open in a browser. Neither needs a Node build step. From
a source checkout, run `uv run vectrify`. See [the editor guide](https://github.com/rasros/vectrify/blob/HEAD/docs/editor.md)
for every control.

## Agents

Vectrify is an MCP server through which an agent (Claude Code, Claude
Desktop or any MCP client) looks at a drawing and its reference and edits it…

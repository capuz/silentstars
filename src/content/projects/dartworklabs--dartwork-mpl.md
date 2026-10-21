---
repo: "dartworklabs/dartwork-mpl"
name: "dartwork-mpl"
description: "Thin matplotlib layer for publication-quality figures — physical-width API, OKLCH color system, content-aware layout, and an MCP server for AI agents."
readmeQualityOk: true
url: "https://github.com/dartworklabs/dartwork-mpl"
homepage: "https://dartworklabs.github.io/dartwork-mpl/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["charts", "color-palette", "data-visualization", "matplotlib", "matplotlib-style", "mcp", "plotting", "scientific-visualization", "visualization-library"]
stars: 5
forks: 0
openIssues: 7
closedIssues: 146
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-03-15T13:03:38Z"
lastCommitAt: "2026-10-21T23:36:09Z"
lastReleaseAt: "2026-07-05T08:14:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 82
maintainers: ["wonjun-lab", "Sangwon91"]
openGraphImageUrl: "https://opengraph.githubassets.com/d437da2b4342b8eb194f2ff8ee9ae03f072a99bc0aa3b7511de7ba1f40ad9a10/dartworklabs/dartwork-mpl"
---

# dartwork-mpl

**Publication-quality matplotlib — a thin utility layer, not a wrapper.**

`dartwork-mpl` keeps `Figure` / `Axes` 100% native and adds the parts matplotlib
makes tedious: a physical-width geometry API, curated style presets, an OKLCH-aware
color system, deterministic content-aware layout, visual validation, and a
first-class integration for AI coding assistants (an MCP server + a bundled prompt
corpus). You never learn a new plotting API — you keep writing matplotlib, just
without the friction.

```python
import matplotlib.pyplot as plt
import dartwork_mpl as dm

dm.style.use("scientific")                                       # 1. curated preset
fig, ax = plt.subplots(figsize=dm.figsize("13cm", "standard"))   # 2. physical width × aspect
ax.plot(x, y, color="oc.blue5", lw=dm.lw(0))
ax.set_xlabel("Time [s]")
dm.simple_layout(fig)                                            # 3. content-aware margins
dm.save_formats(fig, "figure", formats=("svg", "png", "pdf"))    # 4. multi-format save
```

That four-step pattern — **preset → `figsize(width, aspect)` → `simple_layout` →
`save_formats`** — is the whole workflow. No `tight_layout()`, no hand-tuned
`figsize=(w, h)`…

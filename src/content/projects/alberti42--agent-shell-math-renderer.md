---
repo: "alberti42/agent-shell-math-renderer"
name: "agent-shell-math-renderer"
description: "An extension for Emacs Agent Shell to render math equations"
readmeQualityOk: true
url: "https://github.com/alberti42/agent-shell-math-renderer"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [100]
stars: 18
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-02T15:22:21Z"
lastCommitAt: "2026-09-27T09:27:00Z"
lastReleaseAt: "2026-08-19T19:13:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 47
maintainers: ["alberti42", "ultronozm", "jsilve24"]
openGraphImageUrl: "https://opengraph.githubassets.com/a56c4fadc0aeae49898f5b0fc602db9cae7e2ec1b376c155abe153ce65b7b38a/alberti42/agent-shell-math-renderer"
---

# agent-shell-math-renderer

Render LaTeX math in [`agent-shell`](https://github.com/xenodium/agent-shell)'s
streamed markdown output. Display equations and inline math in an agent's response
are compiled with [LaTeX](https://www.latex-project.org/) (`latex` → `dvisvgm`), or
with [RaTeX](https://github.com/erweixin/RaTeX), and shown as crisp, theme-matched
SVG images — while the original LaTeX stays in the buffer, so copy and save
round-trip renderable source.

*▶ [Watch the ~30-second demo](https://www.youtube.com/watch?v=wGM3xH06Wso) (silent). Toward the end the buffer font size is changed and every equation re-scales to match automatically.*

## Highlights

- **Crisp at any size** — equations are vector SVGs, not bitmaps: no pixelation,
  sharp on HiDPI/Retina displays and at every zoom level.
- **Font-matched sizing** — equations render at the buffer's font size, so math
  sits at the same weight as the surrounding text.
- **Rescales with your font** — change the buffer or global font size, or zoom
  (`C-x C-+` / `C-x C--`), and every equation re-sizes to match.
- **Theme-aware** — switch theme or toggle light/dark and the SVGs re-tint to
  the new foreground automatically,…

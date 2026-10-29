---
repo: "NahumLitvin/prismantis"
name: "prismantis"
description: "Colorful, themeable Claude Code replies: tables, code, diagrams, charts and tool rows in 15 themes, with copy buttons. A Claude Code mod."
readmeQualityOk: true
url: "https://github.com/NahumLitvin/prismantis"
homepage: "https://www.catchkill9.dev/posts/prismantis.html"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["claude-code", "claude-code-mod", "claude-code-plugin", "markdown", "mermaid", "terminal", "theme"]
stars: 238
forks: 34
openIssues: 6
closedIssues: 59
watchers: 0
contributors: 22
recentReleases: 10
createdAt: "2026-10-02T13:01:59Z"
lastCommitAt: "2026-10-29T10:36:12Z"
lastReleaseAt: "2026-10-04T06:17:13Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 34
maintainers: ["NahumLitvin", "tomerbr1", "Malorn44"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1401738352/deed31d2-44bd-4c44-8916-077afb923451"
---

## TL;DR

- Claude Code prints mermaid as source and tool calls as walls of text. prismantis draws them: real charts and flowcharts, typeset LaTeX math in kitty and Ghostty, colored tables and code, and quiet tool rows.
- 16 palettes plus `mono`, and copy buttons on everything.
- Two commands to install, `/plugin` to turn it off. Claude Code's own renderer comes back the moment you do.
- No network calls. It runs a program only when you click `⧉ html` or `▣ png` (the clipboard helper) or turn on LaTeX (RaTeX's renderer).

```
/plugin marketplace add NahumLitvin/prismantis
```

```
/plugin install prismantis@prismantis
```

Then run `/prismantis setup` to pick a theme and styles from drawn samples, and `/prismantis demo` for a tour of the main features. In a terminal, setup opens a pane: the arrows or Tab move through the styles of a step with a preview of the one in focus, Enter saves it and shows the next step. Where the session has no terminal, as in the desktop app, it walks the same steps in the transcript.

## Install

Requires Claude Code **2.1.287** or later. Run the two commands above.

To update, run this, then `/reload` in every open session. A session keeps the version…

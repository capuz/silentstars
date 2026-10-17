---
repo: "NahumLitvin/prismantis"
name: "prismantis"
description: "Colorful, themeable Claude Code replies: tables, code, diagrams, charts and tool rows in 15 themes, with copy buttons. A Claude Code mod."
readmeQualityOk: true
url: "https://github.com/NahumLitvin/prismantis"
homepage: "https://www.catchkill9.dev/posts/prismantis.html"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["claude-code", "claude-code-mod", "claude-code-plugin", "markdown", "mermaid", "terminal", "theme"]
stars: 118
forks: 20
openIssues: 4
closedIssues: 35
watchers: 0
contributors: 14
recentReleases: 10
createdAt: "2026-10-02T13:01:59Z"
lastCommitAt: "2026-10-17T07:59:36Z"
lastReleaseAt: "2026-10-04T06:17:13Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 39
maintainers: ["NahumLitvin", "Malorn44", "fqueiro"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1401738352/deed31d2-44bd-4c44-8916-077afb923451"
---

## TL;DR

- Claude Code prints mermaid as source and tool calls as walls of text. prismantis draws them: real charts and flowcharts, typeset LaTeX math in kitty and Ghostty, colored tables and code, and quiet tool rows.
- 15 palettes plus `mono`, and copy buttons on everything.
- Two commands to install, `/plugin` to turn it off. Claude Code's own renderer comes back the moment you do.
- No network calls. It runs a program only when you click `⧉ html` (the clipboard helper) or turn on LaTeX (RaTeX's renderer).

```
/plugin marketplace add NahumLitvin/prismantis
```

```
/plugin install prismantis@prismantis
```

Then run `/prismantis setup` to pick a theme and styles from drawn samples, and `/prismantis demo` for a tour of the main features.

## Install

Requires Claude Code **2.1.287** or later. Run the two commands above.

To update, run this, then `/reload` in every open session. A session keeps the version it loaded until it reloads.

```bash
claude plugin marketplace update prismantis && claude plugin update prismantis@prismantis
```

To uninstall:

```bash
claude plugin uninstall prismantis@prismantis
```

For LaTeX math, install RaTeX's renderer and set `latex` to `true`;…

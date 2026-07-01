---
repo: "heyhuynhgiabuu/pi-pretty"
name: "pi-pretty"
description: "Pretty terminal output for pi — syntax-highlighted reads, colored bash, tree-view ls, grouped find, highlighted grep"
url: "https://github.com/heyhuynhgiabuu/pi-pretty"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 35
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-03-25T09:15:33Z"
lastCommitAt: "2026-07-01T06:59:00Z"
lastReleaseAt: "2026-06-09T09:46:48Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 46
maintainers: ["buddingnewinsights", "heyhuynhgiabuu", "spahl"]
openGraphImageUrl: "https://opengraph.githubassets.com/7240e1c9fc4d62287ba7d6a8d767a2b82acf0d16079577dedd98a6cc6dc57dae/heyhuynhgiabuu/pi-pretty"
---

# pi-pretty

A [pi](https://pi.dev) extension that upgrades built-in tool output in the terminal and includes built-in FFF-powered search for `find`/`grep`.

Tool **result bodies** start **collapsed** (header + line count). Use Pi **Ctrl+O** (`app.tools.expand`) on a tool block to show full output; **Ctrl+Shift+O** expands all. See [Pi keybindings](https://pi.dev/docs/latest/keybindings).

It currently enhances:

- **`read`**: syntax-highlighted text previews with line numbers, plus inline image rendering when the terminal supports it
- **`bash`**: colored exit summary (`exit 0`/`exit 1`) with a preview body of command output
- **`ls`**: Nerd Font file icons with tree-oriented rendering
- **`find` / `grep`**: built-in FFF-backed search with frecency-aware results, plus grouped/highlighted rendering

> Companion to [@heyhuynhgiabuu/pi-diff](https://github.com/buddingnewinsights/pi-diff) for `write`/`edit` diff rendering.

## Install

```bash
pi install npm:@heyhuynhgiabuu/pi-pretty
```

Latest release: https://github.com/buddingnewinsights/pi-pretty/releases/latest

Or load locally:

```bash
pi -e ./src/index.ts
```

## Screenshots

*`bash` exit summary + output preview, and…

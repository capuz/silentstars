---
repo: "javiermolinar/pi-zellij"
name: "pi-zellij"
description: "Pi package with zellij-powered terminal integrations for Pi. Make your workflow agent driven."
readmeQualityOk: true
url: "https://github.com/javiermolinar/pi-zellij"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["pi-coding-agent", "zellij"]
stars: 13
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-08T18:11:48Z"
lastCommitAt: "2026-09-05T07:49:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 46
undervaluedScore: 2
maintainers: ["javiermolinar"]
openGraphImageUrl: "https://opengraph.githubassets.com/172bd3cf4bb2401ac62d2cdcbbdab7b18bae6235079e762a01e226706ec36667/javiermolinar/pi-zellij"
---

# pi-zellij

Pi package with [zellij](https://zellij.dev)-powered terminal integrations for [Pi](https://pi.dev). Make your workflow agent driven.

## Workflow

## Why

[Pi](https://pi.dev) works well in the terminal, but pane orchestration is better handled by a terminal multiplexer. `pi-zellij` adds zellij-native split workflows for Pi.

It includes split and tab commands, generic tool launchers, an agent-facing terminal tool, settings-driven floating app shortcuts, opt-in pane highlighting for completed agent turns, zoxide jumps, review workflows, and split-based task handoff.

## Usage

Install with pi:

```bash
pi install npm:pi-zellij
```

Or with the installer:

```bash
npx pi-zellij
```

If pi is already running, use:

```text
/reload
```

## Requirements

- `zellij` must be installed
- pane, tab, and floating commands must be run from inside an active zellij session
- `zoxide` is required for the zoxide commands

### Recommended zellij version

| zellij version | status | notes |
| --- | --- | --- |
| `0.44.0+` | recommended | `pi-zellij` can show created pane/tab IDs in success notifications, and `/zt` can launch its initial command directly via `zellij action new-tab --…

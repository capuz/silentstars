---
repo: "max-sixty/leaf"
name: "leaf"
description: "Generative UI for your agent"
readmeQualityOk: true
url: "https://github.com/max-sixty/leaf"
homepage: "https://leaf.page/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [68, 25]
stars: 5
forks: 1
openIssues: 5
closedIssues: 142
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-07-24T16:57:56Z"
lastCommitAt: "2026-10-11T10:15:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["max-sixty", "leaf-agent"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0e0c8d344bd481456ffe5cbc6013764b74874189d88e1e68299039c5487502e/max-sixty/leaf"
---

# leaf

> **Experimental software; not ready for general use.**

Leaf is generative UI for Claude Code and Codex. Review a plan, make a decision,
or follow live work in a page you can comment on and change. The agent responds by
revising the page.

[Try Leaf on the home page](https://leaf.page/), where a small demo agent responds in your
private copy, or [explore the examples](https://leaf.page/examples/).

## Install

You need [`uv`](https://docs.astral.sh/uv/),
[`jq`](https://jqlang.github.io/jq/download/) 1.6 or newer on `PATH`, and a
browser that can reach the machine the agent runs on. No Leaf account or
configuration is required.
Leaf ships a prepared browser runtime. Users and package authors never need to
build Leaf or run a package manager; custom widgets are ordinary browser JavaScript.

Claude Code:

```
/plugin marketplace add max-sixty/leaf#prepared
/plugin install leaf@leaf
```

Codex:

```
codex plugin marketplace add max-sixty/leaf --ref prepared
codex plugin add leaf@leaf
```

Pi (a highly experimental trial, which the rest of these docs don't cover yet):

```
pi install git:github.com/max-sixty/leaf@prepared
```

Then ask: “Use Leaf to write up the options for…

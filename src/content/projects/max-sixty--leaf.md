---
repo: "max-sixty/leaf"
name: "leaf"
description: "Generative UI for your agent"
readmeQualityOk: true
url: "https://github.com/max-sixty/leaf"
homepage: "https://leaf.page/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [64, 31]
stars: 7
forks: 2
openIssues: 54
closedIssues: 1052
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-07-24T16:57:56Z"
lastCommitAt: "2026-11-22T02:10:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["max-sixty", "leaf-agent"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d7d04b2146989a7542f5b4e89545bf7e7a4703c783f69a575973faf04525293/max-sixty/leaf"
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
Users and package authors never need to build Leaf or run a package manager;
custom widgets are ordinary browser JavaScript.

Install the Leaf plugin, which includes the application, harness integration and
the Leaf skill. The skill supplies the agent's instructions; copying its directory
alone does not install the application.

Claude Code 2.1.275 or later:

```
/plugin install leaf --marketplace max-sixty/leaf
```

Codex:

```
codex plugin marketplace add max-sixty/leaf
codex plugin add leaf@leaf
```

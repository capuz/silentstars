---
repo: "max-sixty/leaf"
name: "leaf"
description: "Generative UI for your agent"
readmeQualityOk: true
url: "https://github.com/max-sixty/leaf"
homepage: "https://leaf.page/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [67, 27]
stars: 6
forks: 2
openIssues: 122
closedIssues: 446
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-07-24T16:57:56Z"
lastCommitAt: "2026-10-29T12:25:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 58
maintainers: ["leaf-agent", "max-sixty", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bd476f05fe86ddef4a9016cc652f534dffffd9b37cd9d88c1da77dd0ee1faab/max-sixty/leaf"
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

Claude Code:

```
/plugin marketplace add max-sixty/leaf
/plugin install leaf@leaf
```

Codex:

```
codex plugin marketplace add max-sixty/leaf
codex plugin add leaf@leaf
```

Pi (a highly experimental trial, which the rest…

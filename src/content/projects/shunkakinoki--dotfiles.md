---
repo: "shunkakinoki/dotfiles"
name: "dotfiles"
description: "My personal dotfiles configuration"
readmeQualityOk: true
url: "https://github.com/shunkakinoki/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [63]
stars: 10
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-01-27T06:24:50Z"
lastCommitAt: "2026-09-08T08:16:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 67
maintainers: ["shunkakinoki"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f348efa270c84235bdc0d76e1d7dd23f68de80c51af59f2944c84fd09c7bd9e/shunkakinoki/dotfiles"
---

# Dotfiles

## Installation

See [PREREQUISITES.md](https://github.com/shunkakinoki/dotfiles/blob/HEAD/PREREQUISITES.md) for private credentials and managed CLI requirements.

```bash
 curl -fsSL https://raw.githubusercontent.com/shunkakinoki/dotfiles/main/install.sh | sh
```

To pin a named host (skips hostname auto-detection):

```bash
 curl -fsSL https://raw.githubusercontent.com/shunkakinoki/dotfiles/main/install.sh | HOST={NAMED_HOST_HERE} sh
```

For troubleshooting and frequently asked questions, see [FAQ.md](https://github.com/shunkakinoki/dotfiles/blob/HEAD/FAQ.md).

For default and fallback model assignments per harness, see [MODELS.md](https://github.com/shunkakinoki/dotfiles/blob/HEAD/MODELS.md).

For Kamino setup and verification, see the [host runbook](https://github.com/shunkakinoki/dotfiles/blob/HEAD/named-hosts/kamino/README.md).

## Credits

See [REFERENCES.md](https://github.com/shunkakinoki/dotfiles/blob/HEAD/REFERENCES.md) for more information.

## Beads authority

Kyber owns the live Beads SQL service on port 3307. All fleet clients, including
future Kamino hosts, read and write that authority with local auto-start disabled.
Only Kyber runs the SQL service…

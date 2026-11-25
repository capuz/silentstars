---
repo: "mrled/psyops"
name: "psyops"
description: "Personal SYs OPS"
readmeQualityOk: true
url: "https://github.com/mrled/psyops"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 9
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2017-04-21T06:04:57Z"
lastCommitAt: "2026-11-25T12:51:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 62
maintainers: ["renovate-seedboxk8s[bot]", "mrled"]
openGraphImageUrl: "https://opengraph.githubassets.com/22fd5944b42c7fb7036ba08a3567e09823dcb57781019d3e5bbfd6c642463f9e/mrled/psyops"
---

# psyops: Personal SYs OPS

Shit I use to manage my own infrastructure

## VS Code / Python development

Open the multi-root workspace rather than just the repository directory:

```sh
code psyops.code-workspace
```

Each Python project is a separate workspace folder with its own `.venv`.

Prereqs:

- `ruff`
- `ty`
- `uv`

Set up all the venvs (otherwise you get a slew of messages when vscode starts):

```sh
make venvs
```

Directories:

- .claudebox: Configuration for claudebox2 script from submod/dhd repository
- ansible: infrastructure as code
  - tagasaw seedbox running seedboxk8s single-node Kubernetes cluster
  - dreadnaught chineseroom host for AI agent containment
  - apsylania server running misc services, including hosting for Tor hidden services that mirror me.micahrl.com
  - wenaglia TailScale exit note and out of state SOCKS proxy
  - bolgana IRC bouncer running The Lounge
  - CloudFormation templates for DNS (micahrl.com, micahrl.me, younix.us, seedbox domain)
- docker: Mostly deprecated interactive container that provides a host-OS-independent container to use this psyops; ignore
- fly: Deploy fly.io infrastructure
  - disagreements.micahrl.com: the comments engine…

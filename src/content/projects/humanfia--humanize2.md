---
repo: "humanfia/humanize2"
name: "humanize2"
description: "Orchestrate, execute, and observe agent flows for token maxing!"
readmeQualityOk: true
url: "https://github.com/humanfia/humanize2"
homepage: "https://humanfia.ai/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 84
forks: 8
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-07-24T00:15:19Z"
lastCommitAt: "2026-08-26T04:15:33Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 36
maintainers: ["futrime", "DongyunZou", "antoinegg1"]
openGraphImageUrl: "https://opengraph.githubassets.com/c212a09edfd713743d3f49ded365d110d9c30e621d6fc0b5c6371629cfabbb82/humanfia/humanize2"
---

# humanize

Orchestrate, execute, and observe agent flows

## Table of Contents

- [Security](#security)
- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Security

Three things to know before pointing one at a repository you care about. Each is explained in
[Security](https://docs.humanfia.ai/humanize2/guide/security):

- humanize runs every agent with **permission prompts disabled**, and nothing turns them back on.
- **A flow is a directory of Python, and reading one means running it**, so adding a flowverse
  is trusting that repository with this machine.
- **An `hmz anchor` port is equivalent to a shell on that machine.**
- humanize asks, once, whether to **report what goes wrong** to its developers, and says what
  a report carries before you answer. Nothing is sent by a machine that has not answered yes:
  `HUMANIZE_SENTRY=off` settles it for a scripted install, and `/settings` changes it later.

## Install

```sh
pip install git+https://github.com/humanfia/humanize2.git
```

DeepSeek Harness arrives with humanize: its Python SDK and the runtime its turns are taken…

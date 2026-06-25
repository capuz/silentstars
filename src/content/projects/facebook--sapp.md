---
repo: "facebook/sapp"
name: "sapp"
description: "Post Processor for Facebook Static Analysis Tools."
url: "https://github.com/facebook/sapp"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 143
forks: 48
openIssues: 8
closedIssues: 9
watchers: 29
contributors: 88
recentReleases: 0
createdAt: "2020-12-04T16:12:55Z"
lastCommitAt: "2026-06-25T06:39:22Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 67
undervaluedScore: 41
maintainers: ["alexblanck", "alichtman", "daruuro"]
openGraphImageUrl: "https://opengraph.githubassets.com/860d2cb51315f677a0cc7f7eb7cc3ffa28416badbe5f855c9d4c153280345cff/facebook/sapp"
---

![lint](https://github.com/facebook/sapp/workflows/lint/badge.svg)
![tests](https://github.com/facebook/sapp/workflows/tests/badge.svg)
![pyrefly](https://github.com/facebook/sapp/workflows/pyrefly/badge.svg)

# SAPP

SAPP stands for Static Analysis Post Processor. SAPP takes the raw results of [Pysa](https://developers.facebook.com/blog/post/2021/04/29/eli5-pysa-security-focused-analysis-tool-python/) and [Mariana Trench](https://engineering.fb.com/2021/09/29/security/mariana-trench/), and makes them explorable both through a command-line interface and a web UI.

</p>

SAPP is also available on [GitHub Marketplace as a GitHub Action](https://github.com/marketplace/actions/sapp-action)

## Installation

To run SAPP, you will need [Python 3.8 or later](https://www.python.org/getit/). SAPP can be installed through [PyPI](https://pypi.org/project/fb-sapp/) with `pip install fb-sapp`.

## Getting Started

This guide assumes that you have results from a Pysa run saved in an `~/example` directory. If you are new to Pysa, you can follow [this tutorial](https://pyre-check.org/docs/pysa-quickstart/) to get started.

### Processing the Results

The postprocessing will translate the raw…

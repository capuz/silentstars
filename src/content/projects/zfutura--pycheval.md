---
repo: "zfutura/pycheval"
name: "pycheval"
description: "Factur-X/ZUGFeRD parsing and generation library for Python"
url: "https://github.com/zfutura/pycheval"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["factur-x", "invoice", "invoicing", "zugferd"]
stars: 24
forks: 6
openIssues: 2
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-08-20T11:49:28Z"
lastCommitAt: "2026-07-01T07:05:32Z"
lastReleaseAt: "2026-02-20T17:25:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 50
maintainers: ["srittau", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e105cb43d1f4195d506c39c870a767dac705a5c41f7a6b2694c5a9f38ecf2a4a/zfutura/pycheval"
---

# PyCheval – Factur-X/ZUGFeRD parsing and generation library for Python

Factur-X (also called ZUGFeRD in Germany) is a Franco-German standard for
electronic invoices. Structured XML data is embedded in PDF-A/3 files,
allowing invoices to be processed automatically while still being displayed in
standard PDF readers. Factur-X supports EN 16931, the European standard for
electronic invoicing.

See the [Factur-X website (French)](https://www.factur-x.org/) or
[FeRD website (German)](https://www.ferd-net.de/) for more information.

This library supports reading and writing PDF and XML files according to
Factur-X Version 1.08 (aka ZUGFeRD 2.4). The following Factur-X profiles
are currently supported:

- Minimum
- Basic WL
- Basic
- EN 16931 (Comfort)

Extended and XRechnung profiles are not yet supported.

**Warning**: This library is still in early development. The API may change
frequently, and not all features are implemented yet.

## Usage

### Installation

You can install PyCheval from PyPI:

```bash
pip install PyCheval
```

### Generating Factur-X

PyCheval supports several Factur-X profile levels, each with different levels of detail and complexity. First, you need to create…

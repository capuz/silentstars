---
repo: "inseven/psion-software-index"
name: "psion-software-index"
description: "Tools for generating an index of Psion software"
readmeQualityOk: true
url: "https://github.com/inseven/psion-software-index"
homepage: "https://software.psion.info"
language: "Python"
languages: ["Python"]
languagePcts: [70]
stars: 7
forks: 2
openIssues: 32
closedIssues: 49
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-14T21:55:12Z"
lastCommitAt: "2026-10-03T22:04:39Z"
lastReleaseAt: "2025-08-22T22:03:34Z"
status: "thriving"
tags: ["hidden_gem", "funded", "under_pressure"]
healthScore: 79
undervaluedScore: 78
maintainers: ["renovate[bot]", "jbmorley", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/29020c625471396666b3206d2dbe30b2db046b0fc02ed92b5b24ea52af488a7b/inseven/psion-software-index"
fundingLinks: ["GITHUB:https://github.com/jbmorley", "BUY_ME_A_COFFEE:https://buymeacoffee.com/jbmorley"]
---

# Psion Software Index

Tools for generating an index of Psion software

## Usage

Install the dependencies:

```bash
brew install p7zip
```

And then:

```bash
scripts/install-dependencies.sh
```

Download the assets:

```bash
uv run indexer libraries/full.yaml sync
```

Generate the index:

```bash
uv run indexer libraries/full.yaml index
```

Perform grouping:

```bash
uv run indexer libraries/full.yaml group
```

Apply the overlay:

```bash
uv run indexer libraries/full.yaml overlay
```

Build the website:

```bash
scripts/build-site.sh
```

These steps are intentionally separated to make it easy to cache different phases of index generation, especially when using GitHub Actions.

## Development

Check out the source, remembering to clone the submodules:

```bash
git clone git@github.com:jbmorley/psion-software-index.git
cd psion-software-index
git submodule update --init --recursive
```

It can be useful to be able to run the indexer on a smaller library:

```bash
uv run indexer libraries/3lib.yaml sync index group overlay
```

You can serve the site locally as follows:

```bash
cd site
bundle exec jekyll serve --watch
```

Building the site for the first time can be a bit…

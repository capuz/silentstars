---
repo: "quarto-dev/quarto-web"
name: "quarto-web"
description: "Quarto website"
readmeQualityOk: true
url: "https://github.com/quarto-dev/quarto-web"
homepage: "https://quarto.org"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
topics: ["documentation", "quarto"]
stars: 407
forks: 1018
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 343
recentReleases: 0
createdAt: "2021-03-14T12:40:16Z"
lastCommitAt: "2026-10-09T18:51:01Z"
status: "thriving"
tags: ["legacy_hero", "community_hub", "fork_magnet"]
healthScore: 88
undervaluedScore: 42
maintainers: ["cwickham", "github-actions[bot]", "cderv"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e4dccba7a1d1d85495be4e01ad47bef21d11cdb30fd3a697529aa004a3b9f34/quarto-dev/quarto-web"
discussionCount: 74
---

# quarto-web

This is the repo for the documentation hosted at:

* **Current release:** [quarto.org](https://quarto.org/)
* **Pre-release:** [prerelease.quarto.org](https://prerelease.quarto.org/)

## Reporting Issues

Please report issues on quarto.org by opening a "Documentation Issue" in the `quarto-dev/quarto-cli` repository: [New Issue](https://github.com/quarto-dev/quarto-cli/issues/new/choose)

## Rendering `quarto-web` locally

This section discusses how to contribute to the documentation by rendering a document locally.

### Quarto-web uses a frozen state of computation

This Quarto project uses `freeze: true`, meaning it will never run computation engines during a project render. No Knitr or Jupyter configuration is needed to build the whole website. The `_freeze` folder is tracked on the git repo for this purpose. (See about [freeze](https://quarto.org/docs/projects/code-execution.html#freeze) for a reminder of how this works).

What is the impact if you modify (or add) a document: 

- If you modify a document that doesn't use any computation (i.e default `engine: markdown` is used), committing only the changes in the document is enough.
- If you modify a document that…

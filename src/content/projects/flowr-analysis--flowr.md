---
repo: "flowr-analysis/flowr"
name: "flowr"
description: "Sophisticated static program analysis framework for the R programming language."
readmeQualityOk: true
url: "https://github.com/flowr-analysis/flowr"
homepage: "https://flowr-analysis.github.io/flowr/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["dataflow-analysis", "program-slicing", "r", "static-analyzer", "static-program-analysis", "abstract-interpretation", "linter", "program-comprehension", "r-language"]
stars: 108
forks: 12
openIssues: 243
closedIssues: 1380
watchers: 2
contributors: 23
recentReleases: 0
createdAt: "2023-04-07T10:31:34Z"
lastCommitAt: "2026-11-05T14:05:08Z"
lastReleaseAt: "2023-10-31T11:08:40Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 96
undervaluedScore: 48
maintainers: ["EagleoutIce", "actions-user", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/624819038/853af325-4523-4e1e-9938-628bd1bc1c78"
---

_flowR_ is a sophisticated, static [dataflow analyzer](https://en.wikipedia.org/wiki/Data-flow_analysis) for the [R programming language](https://www.r-project.org/),
available for [VSCode](https://marketplace.visualstudio.com/items?itemName=code-inspect.vscode-flowr), [Positron](https://open-vsx.org/extension/code-inspect/vscode-flowr), [RStudio](https://github.com/flowr-analysis/rstudio-addin-flowr),
and [Docker](https://hub.docker.com/r/eagleoutice/flowr).
It offers a wide variety of features, for example:

* 📚 **dependency analysis**\
  Given your analysis project, flowR offers a plethora of so-called [queries](https://github.com/flowr-analysis/flowr/wiki/Query-API) to get more information about your code.
  An important query is the [dependencies query](https://github.com/flowr-analysis/flowr/wiki/%5BQuery%5D-Dependencies), which shows you the library your project needs,
  the data files it reads, the scripts it sources, and the data it outputs.
  Building on it, the [guess dependency versions query](https://github.com/flowr-analysis/flowr/wiki/%5BQuery%5D-Guess-Dependency-Versions) narrows down the version range each
  of these libraries has to have, by combining the…

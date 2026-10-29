---
repo: "OutSystems/docs-odc"
name: "docs-odc"
description: "Source of the OutSystems Developer Cloud documentation"
readmeQualityOk: true
url: "https://github.com/OutSystems/docs-odc"
homepage: "https://success.outsystems.com/documentation/outsystems_developer_cloud/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["learn", "outsystems"]
stars: 16
forks: 54
openIssues: 2
closedIssues: 0
watchers: 4
contributors: 131
recentReleases: 0
createdAt: "2023-04-14T17:13:09Z"
lastCommitAt: "2026-10-29T13:04:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 68
maintainers: ["KnowOps", "rmlos", "OS-priyadarshiniudayashankar"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5c07733bda04e0e9d70d042b627bec96440da77e6d0ecec6924b066ee29bffa/OutSystems/docs-odc"
---

# Documentation

This repository holds the source files of the [OutSystems Developer Cloud documentation](https://success.outsystems.com/documentation/outsystems_developer_cloud/).

Check [how you can contribute](https://github.com/OutSystems/docs-odc/blob/HEAD/CONTRIBUTING.md).

## Writing

All documentation present in this repository should be written in Markdown (check [here](https://daringfireball.net/projects/markdown/syntax) for the basic syntax).

The Markdown-to-HTML conversion process is done through the Python Markdown package. The following Markdown extensions are currently being used in the conversion step:

| Extension | Description |
| ---------- | ------------ |
| [markdown.extensions.extra](https://python-markdown.github.io/extensions/extra/) | Meta-extension adding support to a series of smaller extensions (check documentation). Currently supports the definition lists syntax. |
| [markdown.extensions.meta](https://python-markdown.github.io/extensions/meta_data/) | Read metadata from each Markdown front-matter section (discarded in HTML output). Can be used for specifying custom page titles, for example (not used by the default template). |
|…

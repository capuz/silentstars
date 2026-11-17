---
repo: "mnott/PAI"
name: "PAI"
description: "Personal AI Infrastructure"
readmeQualityOk: true
url: "https://github.com/mnott/PAI"
language: "TypeScript"
languages: ["TypeScript", "Swift"]
languagePcts: [78, 20]
stars: 69
forks: 8
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-02-26T10:18:16Z"
lastCommitAt: "2026-11-17T14:44:20Z"
lastReleaseAt: "2026-11-15T12:09:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 47
maintainers: ["mnott"]
openGraphImageUrl: "https://opengraph.githubassets.com/b125a2ec42127276e35df4fb46681b61cb0a02bfc132740fde85d7fa19ea0ee7/mnott/PAI"
fundingLinks: ["GITHUB:https://github.com/mnott"]
---

# PAI Knowledge OS

> **Measured, not claimed.** The design choices in PAI come out of a series of lab reports, published with DOIs:
> [PAI Reports](https://github.com/mnott/PAI-Reports) ([doi:10.5281/zenodo.24274093](https://doi.org/10.5281/zenodo.24274093)).
> The latest, *Planner and Worker* ([doi:10.5281/zenodo.24274754](https://doi.org/10.5281/zenodo.24274754)), shows when a cloud
> planner over a local coder pays off: a local model alone handles small changes for free; on larger multi-file work a
> Sonnet planner over a local worker matches Sonnet alone at about a third less cloud cost. That is what
> `pai worker mode speed|balanced|budget` switches between.

## Local AI used to be hard. Now it is a button.

I have spent a long time on local AI. Getting a strong model to run on my own machine was the easy part; making it actually useful was not. Which server, which quantization, which port, how to keep it alive, how to send it only the work it can do, and how to fall back to the cloud when it cannot. Every piece worked on its own and none of them worked together.

PAI is what came out of that, and I am giving it to the community. A MacBook can already run a serious model: on…

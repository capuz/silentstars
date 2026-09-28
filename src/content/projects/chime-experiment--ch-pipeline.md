---
repo: "chime-experiment/ch_pipeline"
name: "ch_pipeline"
description: " CHIME Analysis Pipeline"
readmeQualityOk: true
url: "https://github.com/chime-experiment/ch_pipeline"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 6
closedIssues: 28
watchers: 20
contributors: 24
recentReleases: 0
createdAt: "2019-09-18T18:01:42Z"
lastCommitAt: "2026-09-28T10:06:32Z"
lastReleaseAt: "2024-07-25T18:31:29Z"
status: "watched"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 70
undervaluedScore: 39
maintainers: ["ljgray", "rikvl", "yukari-u"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2c172e3fda6ad4a41b7dc6ff390ec0028ff7e4d36c7c0764286a796b4f5f884/chime-experiment/ch_pipeline"
---

<h1 align="center">CHIME Analysis Pipeline</h1>

This is the repository for storing the CHIME Analysis Pipeline. For CHIME members, more information about
the pipeline can be found in the [Pipeline Repo](https://github.com/chime-experiment/Pipeline) and
[Pipeline Wiki](https://github.com/chime-experiment/Pipeline/wiki/Overview).

Development should be done along the lines of [Github Flow](https://guides.github.com/introduction/flow/).

Important notes:

 - *Don't* develop directly in `main`, use a feature branch for any change, and merge back into *main* promptly. Merging should be done by filing a Pull Request.
 - *Do* install the `virtualenv` with `mkchimeenv`, located [here](https://github.com/chime-experiment/mkchimeenv).

# Development Guidelines

The idea behind this repository is to keep track of the CHIME pipeline development, such that the union of the input data and this repository always gives the same
output. This requires that we keep track of not only the code and scripts in this repository, but also any dependencies (discussed below).

The underlying pipeline code uses the pipeline task module `caput.pipeline`…

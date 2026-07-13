---
repo: "glotzerlab/row"
name: "row"
description: "Row is a command line tool that helps you manage workflows on HPC resources."
readmeQualityOk: true
url: "https://github.com/glotzerlab/row"
homepage: "https://glotzerlab.engin.umich.edu/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["batch", "hpc", "rust", "slurm", "workflow"]
stars: 18
forks: 1
openIssues: 1
closedIssues: 25
watchers: 7
contributors: 12
recentReleases: 0
createdAt: "2024-03-20T17:11:29Z"
lastCommitAt: "2026-07-13T06:38:28Z"
lastReleaseAt: "2025-08-11T11:14:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 65
maintainers: ["renovate[bot]", "joaander"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc2a7cbcc1a4f7b382b8757e84d9871cfb182c1094e4b42c5501ca782d6485a9/glotzerlab/row"
discussionCount: 6
---

Row is a command line tool that helps you manage workflows on HPC resources. Define
**actions** in a workflow configuration file that apply to **groups** of **directories**
in your **workspace**. **Submit** actions to your cluster's **scheduler**. Row tracks
which actions have been submitted on which directories so that you don't submit the same
work twice. Once a job completes, subsequent actions become eligible allowing you to
process your entire workflow to completion over many submissions.

The name is **row** as in *"row, row, row your boat"*.

Notable features:
* Support arbitrary directories and [signac](https://signac.readthedocs.io/) workspaces.
* Define your workflow in a configuration file.
* Execute actions via user-defined shell commands.
* Flexible group definitions:
  * Select directories with conditions on their value.
  * Split directories by their value and/or into fixed size groups.
  * Construct groups of any eligible directories or require that the entire matching
    group is submitted whole.
* Execute groups in serial or parallel.
* Schedule CPU and GPU resources.
* Multiple users can operate the same workflow.
* Automatically determine the partition based…

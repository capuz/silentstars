---
repo: "mozilla/looker-hub"
name: "looker-hub"
description: "Hub for Mozilla Looker models"
readmeQualityOk: true
url: "https://github.com/mozilla/looker-hub"
language: "LookML"
languages: ["LookML"]
languagePcts: [100]
stars: 18
forks: 20
openIssues: 0
closedIssues: 0
watchers: 19
contributors: 50
recentReleases: 0
createdAt: "2021-01-19T17:44:33Z"
lastCommitAt: "2026-08-22T04:07:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 63
maintainers: ["dataops-looker"]
openGraphImageUrl: "https://opengraph.githubassets.com/689fd7f9b05cc0728723b2df34e12b812d15c06dbd543939725c7f3dcb5353b1/mozilla/looker-hub"
---

# Mozilla Looker Hub - Base Branch

Mozilla uses a hub-and-spoke model for our Looker deploy.
This centralized repository contains all of the automated imports (called _views_ in Looker) of BigQuery tables that are used in any Looker explore.
Downstream projects import these views and extend them to suit the needs of the project.

This is the base branch. All generated branches are derived from this branch directly, and files in this branch are kept as-is in the generated branches.

## `base` branch and why it matters

The `base` branch plays an important role in the LookML generation process and should not be deleted!

The `base` branch contains pre-defined `looker-hub` content which should remain and be unchanged after generation. If the `generate` command overwrites any files found in the `base` branch it exits with an error exit code prior to pushing the changes to this repo.

More detailed description of the LookML generate process can be found [here](https://github.com/mozilla/lookml-generator#generate-command-explained---high-level-explanation).

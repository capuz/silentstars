---
repo: "processing/processing-contributions"
name: "processing-contributions"
description: "This repo holds the list of user contributed libraries, tools, modes, and examples and the scripts to convert this list to the appropriate format for the PDE Contribution Manager and the website."
readmeQualityOk: true
url: "https://github.com/processing/processing-contributions"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 7
openIssues: 18
closedIssues: 45
watchers: 4
contributors: 27
recentReleases: 0
createdAt: "2024-10-29T14:23:23Z"
lastCommitAt: "2026-07-08T05:41:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 83
maintainers: ["Stefterv", "github-actions[bot]", "catilac"]
openGraphImageUrl: "https://opengraph.githubassets.com/2dee14fb8637f7e446635c53b3023a3efb8cc2037714c6089c535a831bd9cd1a/processing/processing-contributions"
---

# Processing Contributions

This repository contains the list of Processing libraries, tools, modes, and examples contributed by the community. Contributions added here will appear in the Contribution Manager and on the Processing.org website.

> [!TIP]
> Ready to publish your contribution? Submit it through the [GitHub issue forms for new contributions](https://github.com/processing/processing-contributions/issues/new/choose).

## Technical information

All contributions are stored in a contributions database file in yaml format, `contributions.yaml`.
Consumers of this data are the Processing website, and the Processing application.

Within the `scripts` folder are scripts for parsing and validating the data from the 
properties file. These are used by a Github action to processing new contributions and add them to the
database. The `issue_to_pr.yml` workflow is triggered by a new issue for registering a new contribution.
It will then retrieve the properties file provided in the issue, parse and validate, and then if valid,
add the new information to the `contributions.yaml` database file in a new pull request.

### Data structure
All contributions are stored in a contributions…

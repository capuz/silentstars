---
repo: "ASFHyP3/hyp3"
name: "hyp3"
description: "A processing environment for HyP3 Plugins in AWS."
url: "https://github.com/ASFHyP3/hyp3"
language: "Python"
languages: ["Python", "Jinja"]
languagePcts: [76, 23]
stars: 53
forks: 12
openIssues: 59
closedIssues: 81
watchers: 13
contributors: 44
recentReleases: 0
createdAt: "2020-04-29T17:33:47Z"
lastCommitAt: "2026-06-23T23:28:26Z"
lastReleaseAt: "2020-08-07T21:06:13Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 48
maintainers: ["asjohnston-asf", "jhkennedy", "mfangaritav"]
openGraphImageUrl: "https://opengraph.githubassets.com/195035d8c858ee238863de0e998ccb5c08e9d3c006f21fcab8ae83e23474c31c/ASFHyP3/hyp3"
discussionCount: 0
---

# HyP3
![Static code analysis](https://github.com/ASFHyP3/hyp3/workflows/Static%20code%20analysis/badge.svg)
![Deploy to AWS](https://github.com/ASFHyP3/hyp3/workflows/Deploy%20to%20AWS/badge.svg)
![Run tests](https://github.com/ASFHyP3/hyp3/workflows/Run%20tests/badge.svg)

A processing environment for HyP3 Plugins in AWS.

## Developer Setup

1. Clone the repository
   ```
   git clone git@github.com:ASFHyP3/hyp3.git
   cd hyp3
   ```

2. Create and activate a conda environment
   ```
   conda env create -f environment.yml
   conda activate hyp3
   ```

3. Run the tests:
   ```
   make tests
   ```
   Alternatively, you can invoke `pytest` directly (e.g. for passing command-line arguments):
   ```
   eval $(make env)
   make render && pytest
   ```
   In particular, to skip tests that require a network connection, run:
   ```
   pytest -m 'not network'
   ```
   And to run *only* those tests:
   ```
   pytest -m network
   ```
   When writing new tests, decorate such tests with `@pytest.mark.network`.

   Also, remember to re-run `make render` after making changes to rendered files.

4. Additionally, if you just want to set up `PYTHONPATH`
   without setting up all of the…

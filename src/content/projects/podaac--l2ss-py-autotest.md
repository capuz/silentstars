---
repo: "podaac/l2ss-py-autotest"
name: "l2ss-py-autotest"
description: "This repository hosts and runs automated tests and failures reports for the EarthData L2SS service."
readmeQualityOk: true
url: "https://github.com/podaac/l2ss-py-autotest"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["development", "tva", "hitide"]
stars: 6
forks: 3
openIssues: 31
closedIssues: 1216
watchers: 3
contributors: 21
recentReleases: 0
createdAt: "2023-07-06T17:53:37Z"
lastCommitAt: "2026-09-06T08:03:02Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 82
maintainers: ["jamesfwood", "github-actions[bot]", "sliu008"]
openGraphImageUrl: "https://opengraph.githubassets.com/c23c86894e48764c6f742a801d2e5351bd3541070630273e9e95f98559032c77/podaac/l2ss-py-autotest"
---

# l2ss-py-autotest

This repository contains functional/integration tests for l2ss-py. It also includes github
action workflows for automatically running these tests whenever a new collection gets
associated to the l2ss-py UMM-S record.

## How it works

1. Every 5 minutes the `cmr_association_diff.py` script is run against UAT and OPS. This script looks at the collection concept ids in `tests/cmr/l2ss-py/*_associations.txt` and compares them to the associations in CMR (see [diff.yml](https://github.com/podaac/l2ss-py-autotest/blob/HEAD/.github/workflows/diff.yml))
2. For every collection concept id that exists in CMR association but does NOT exist in the .txt file in this repository, a new PR is opened in this repository with the new collection concept id as the title and branch name.
3. When a pull request is created or updated in this repository and the base branch name starts with `diff/uat` or `diff/ops`, the tests will be executed for that collection (see [verify.yml](https://github.com/podaac/l2ss-py-autotest/blob/HEAD/.github/workflows/verify.yml))
4. The results of the test will be recorded as a status check for the PR
   1. If all tests pass: The pr will be labeled…

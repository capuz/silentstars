---
repo: "longhorn/longhorn-tests"
name: "longhorn-tests"
description: "Various test cases for longhorn"
readmeQualityOk: true
url: "https://github.com/longhorn/longhorn-tests"
language: "Python"
languages: ["Python", "RobotFramework"]
languagePcts: [64, 24]
stars: 23
forks: 60
openIssues: 0
closedIssues: 0
watchers: 15
contributors: 50
recentReleases: 0
createdAt: "2016-06-22T18:09:18Z"
lastCommitAt: "2026-09-18T08:26:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 62
maintainers: ["yangchiu", "roger-ryao", "chriscchien"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d48856c76d526a10ba40e3425016037fbdf850261160bb32cac8e52aa35575a/longhorn/longhorn-tests"
---

# Longhorn Test cases

This repo hosts the manual and automated end-to-end test cases for Longhorn.

## Manual Test Cases
Some scenarios are hard to test using the automation tests and are documented as manual test cases that need to be verified before release.
The manual test cases are accessible [here](https://longhorn.github.io/longhorn-tests/manual/).

The manual test case pages can be edited under `docs/content/manual/`.

To categorize tests, place them in sub-directories under `docs/content/manual/`.
These sub-directories must contain a file named `_index.md` with the following:
```markdown
---
title: Name of Test Category
---
Optional description regarding the test category.
```

Each test page should be structured as such:
```markdown
---
title: Name of Test Case
---
Description of the test case.
```

Both of these files can contain Markdown in the title and page body.

## Automated end-to-end test cases
Generated end-to-end integration test case documents for automation tests are accessible [here](https://longhorn.github.io/longhorn-tests/integration/).

The test cases are in https://github.com/longhorn/longhorn-tests/tree/master/manager/integration .

See…

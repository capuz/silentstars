---
repo: "ioBroker/ioBroker.repochecker"
name: "ioBroker.repochecker"
description: "Check the ioBroker adapter github repositories if they can be added to public ioBroker repository"
url: "https://github.com/ioBroker/ioBroker.repochecker"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["iobroker", "repository-utilities"]
stars: 9
forks: 11
openIssues: 74
closedIssues: 587
watchers: 4
contributors: 11
recentReleases: 0
createdAt: "2019-01-20T21:26:07Z"
lastCommitAt: "2026-07-01T07:09:05Z"
lastReleaseAt: "2022-12-08T09:01:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 83
maintainers: ["mcm1957", "Copilot", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4a58e696d5a1d7aadf24ce5666eacffca66e7f8b4884ce9986b1957b0d41899/ioBroker/ioBroker.repochecker"
---

# Adapter repository checker

This is a code for frontend and back-end of the service <https://adapter-check.iobroker.in/>

If you want to add your adapter to the public ioBroker repository, all tests on this page must be OK.

## How to test via cli

When running the repository checker via the command line, you **need** to add the repository as parameter, while the branch parameter (`master/main/dev`) is optional. If this parameter is omitted, the `default` branch (typically master / main) will be checked.

```
npx @iobroker/repochecker <repo> [branch]`
```

For extra debugging outputs you can pass the `--debug` parameter.

For a local test you can pass the `--local` parameter. Most of the files are read locally.
The link to the GitHub repository is still necessary because data from the project settings on GitHub is also checked.

Example:

`npx @iobroker/repochecker https://github.com/ioBroker/ioBroker.repochecker --local`

### 5.19.6 (2026-07-01)

- (mcm1957) false positive related to workflow logs has been fixed

### 5.19.4 (2026-06-29)

- (mcm1957) false positives related to objectChecker have been fixed

### 5.19.3 (2026-06-28)

- (mcm1957) false positives for…

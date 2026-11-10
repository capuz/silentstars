---
repo: "ioBroker/ioBroker.repochecker"
name: "ioBroker.repochecker"
description: "Check the ioBroker adapter github repositories if they can be added to public ioBroker repository"
readmeQualityOk: true
url: "https://github.com/ioBroker/ioBroker.repochecker"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["iobroker", "repository-utilities"]
stars: 9
forks: 13
openIssues: 89
closedIssues: 644
watchers: 4
contributors: 13
recentReleases: 0
createdAt: "2019-01-20T21:26:07Z"
lastCommitAt: "2026-11-10T11:38:02Z"
lastReleaseAt: "2022-12-08T09:01:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 83
maintainers: ["mcm1957", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6de869c01c90ff502bdb8bc7c4162ae14764fc90e5bf9da2836933133b833001/ioBroker/ioBroker.repochecker"
---

# Adapter repository checker

This is a code for frontend and back-end of the service <https://adapter-check.iobroker.in/>

If you want to add your adapter to the public ioBroker repository, all tests on this page must be OK.

## How to test via cli (standard tests accessing repository data)

When running the repository checker via the command line, you **need** to add the repository as parameter, while the branch parameter (`master/main/dev`) is optional. If this parameter is omitted, the `default` branch (typically master / main) will be checked.

```
npx @iobroker/repochecker <repo> [branch]`
```

## How to test via cli using local mode

> [!NOTE]  
> local mode feature is experimental and untested. 

For extra debugging outputs you can pass the `--debug` parameter.

For a local test you can pass the `--local` parameter. Most of the files are read locally.
The link to the GitHub repository is still necessary because data from the project settings on GitHub is also checked.

Example:

`npx @iobroker/repochecker https://github.com/ioBroker/ioBroker.repochecker --local`

## Using a GitHub token

Unauthenticated requests to the GitHub API are rate limited. To raise the limit you…

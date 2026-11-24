---
repo: "JoshuaKGoldberg/all-contributors-auto-action"
name: "all-contributors-auto-action"
description: "Fills in missing allcontributors entries for a repository. 👪"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/all-contributors-auto-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 16
forks: 3
openIssues: 3
closedIssues: 31
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2023-05-01T15:45:13Z"
lastCommitAt: "2026-11-24T01:58:44Z"
lastReleaseAt: "2024-01-04T18:56:07Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 69
maintainers: ["renovate[bot]", "JoshuaKGoldberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/8057f18b86ac1573c1e0fd61edd8edd8830799f4204c09eed8bdc132c528e38b/JoshuaKGoldberg/all-contributors-auto-action"
fundingLinks: ["GITHUB:https://github.com/JoshuaKGoldberg"]
---

Fills in missing allcontributors entries for a repository.
	👪

	
	

	

## Usage

This action will:

1. Ask [`all-contributors-for-repository`](https://github.com/JoshuaKGoldberg/all-contributors-for-repository) to collect the current repository's contributors
2. Post [`@all-contributors add` bot comments](https://allcontributors.org/docs/en/bot/usage) in the newest issues and PRs for each contributor

> **Warning**
> This tool only sees contributions that can be detected from the last 500 events in GitHub's API.
> Don't forget to manually add in other forms of contributions!

For example, the following job will run on every push to `main`:

```yml
# .github/workflows/contributors.yml
name: Contributors

on:
  push:
    branches:
      - main

permissions:
  contents: read
  issues: write
  pull-requests: write

jobs:
  contributors:
    runs-on: ubuntu-latest
    steps:
      - uses: JoshuaKGoldberg/all-contributors-auto-action@v0.7.0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

...and will post comments like the following automatically:

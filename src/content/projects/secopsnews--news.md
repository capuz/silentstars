---
repo: "SecOpsNews/news"
name: "news"
description: "RSS items as GitHub Issues for the discerning engineering leader or security professional"
readmeQualityOk: true
url: "https://github.com/SecOpsNews/news"
homepage: "http://secops.thechels.uk/"
language: "SCSS"
languages: ["SCSS", "Python"]
languagePcts: [46, 38]
topics: ["feed", "github-actions", "issue-tracker", "issues", "rss"]
stars: 73
forks: 7
openIssues: 213
closedIssues: 72982
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-07-15T19:52:03Z"
lastCommitAt: "2026-08-29T17:26:57Z"
status: "thriving"
tags: ["solo_builder", "funded", "under_pressure"]
healthScore: 100
undervaluedScore: 53
maintainers: ["actions-user", "thechelsuk", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6c3ba330737056963c2f76eaa866c221fed456e0c03e9ee4c2304f629c6c076/SecOpsNews/news"
fundingLinks: ["KO_FI:https://ko-fi.com/thechelsuk"]
---

# News

A repository to track third party (RSS) feeds from various security sites as GitHub issues. Note this is quite noisy.

## Adding a new feed

Add to the relevant action yml file the following code; replacing `SourceName` with the provider as needed, including URL of the RSS/Atom/Json feed + any labels as appropriate

```yaml
SourceName:
    runs-on: ubuntu-latest
    steps:
    - uses: guilhem/rss-issues-action@0.5.2
      continue-on-error: true
      with:
        repo-token: ${{ secrets.GITHUB_TOKEN }}
        feed: "[URL]"
        prefix: "[SourceName]"
        dry-run: "false"
        lastTime: "24h"
        labels: "SourceName, [App, DevOps]"
```
